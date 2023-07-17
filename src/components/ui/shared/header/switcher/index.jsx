"use client"

import ButtonSkel from "@/components/modules/ButtonSkel"

import { useTheme } from "next-themes"
import { useEffect } from "react"
import { useState } from "react"

export default function Switcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <ButtonSkel />
  }

  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={`text-xs rounded-xl px-2 py-1 bg-white text-black w-14`}>
      {resolvedTheme === "dark" ? "/Dark" : "/Light"}
    </button>
  )
}
