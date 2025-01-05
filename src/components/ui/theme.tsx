"use client"

import { Box, createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
})

export default function Theme({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <Box p={3} minHeight="100vh">
        {children}
      </Box>
    </ThemeProvider>
  )
}
