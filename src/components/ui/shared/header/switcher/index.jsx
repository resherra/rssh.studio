"use client"

import ButtonSkel from "@/components/modules/ButtonSkel"

import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Switcher() {
  const { forcedTheme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <ButtonSkel />
  }

  return (
    <button disabled={!!forcedTheme} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={`text-xs rounded-xl px-2 py-1 bg-white text-black w-14 disabled:bg-white/10`}>
      {!!forcedTheme ? "/Dark" : resolvedTheme === "dark" ? "/Dark" : "/Light"}
    </button>
  )
}
