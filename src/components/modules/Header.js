"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

//components
import ModeSwitcher from "./ModeSwitcher"
import { useTheme } from "next-themes"

export default function Header() {
  const [scroll, setScroll] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const handleSwitch = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <nav className={`w-full text-sm fixed top-0 left-0 leading-none bg-black backdrop-filter-none lg:bg-black/40 lg:backdrop-blur-[1px] font-mono  ${scroll && `border-b border-neutral-400`}`}>
      <div className={`m-4 lg:mx-8 lg:mt-8 lg:mb-2`}>
        <div className={`flex justify-between items-baseline`}>
          <div>
            <button onClick={handleSwitch} className={`bg-black text-pink-200 dark:bg-pink-200 dark:text-black text-sm rounded-md p-1 mb-4`}>
              Switch theme
            </button>
            <div>the theme now is: {resolvedTheme === "dark" ? "/red" : "a"}</div>
          </div>
          <ul className={`flex gap-4 items-baseline`}>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`/about`}>About</Link>
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
