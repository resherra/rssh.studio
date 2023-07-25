"use client"

import { ThemeProvider } from "next-themes"
import { usePathname } from "next/navigation"

export default function Provider({ children }) {
  const path = usePathname()

  return (
    <ThemeProvider forcedTheme={path !== "/" && path !== "/blog" ? "dark" : undefined} attribute="class">
      {children}
    </ThemeProvider>
  )
}
