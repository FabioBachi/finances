import { auth, signIn } from "~/libraries/auth"

export default async function SignIn() {
  const session = await auth()

  return !session ? (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  ) : null
}
