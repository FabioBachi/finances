"use client"

import { Box, colors, createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {},
})

export default function Theme({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <Box p={3} sx={{ backgroundColor: colors.grey[100] }} minHeight="100vh">
        {children}
      </Box>
    </ThemeProvider>
  )
}
