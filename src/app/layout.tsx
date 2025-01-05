import type { Metadata } from "next"
import CssBaseline from "@mui/material/CssBaseline"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Theme from "~/components/ui/theme"

export const metadata: Metadata = {
  title: "Controle de Finanças",
  description: "Controle de Finanças",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh" }}>
        <Theme>
          <CssBaseline />
          {children}
        </Theme>
      </body>
    </html>
  )
}
