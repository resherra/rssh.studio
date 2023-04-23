"use client"

import { ThemeProvider } from "next-themes"

const Provider = ({ children }) => <ThemeProvider attribute="class">{children}</ThemeProvider>

export default Provider
