"use client"

import { ThemeProvider } from "next-themes"

const AllProviders = ({ children }) => <ThemeProvider attribute="class">{children}</ThemeProvider>

export default AllProviders
