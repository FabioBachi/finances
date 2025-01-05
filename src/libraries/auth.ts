import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "~/libraries/database"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async authorized({ auth }) {
      if (!auth?.user?.email) {
        return false
      }

      const user = await prisma.user.findUnique({
        where: { email: auth.user.email },
      })
      await prisma.$disconnect()

      return !!user
    },
    async signIn({ profile }) {
      if (!profile?.email) {
        return false
      }

      const user = await prisma.user.findUnique({
        include: { accounts: true },
        where: { email: profile.email },
      })

      if (!user || user.accounts.length === 0) {
        return false
      }

      await prisma.$disconnect()
      return true
    },
  },
})
