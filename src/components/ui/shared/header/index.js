"use client"

import { useEffect, useState } from "react"

//components
import Switcher from "./switcher"
import Links from "./links"

export default function Header() {
  const [scroll, setScroll] = useState(false)

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
    <div className={`pb-28 font-mono text-sm`}>
      <nav className={`w-full z-20 fixed top-0 right-0 ${scroll && `bg-mainColor dark:bg-secColor border-b border-secColor dark:border-mainGray`}`}>
        <div className={`p-4 md:p-8 md:pb-2`}>
          <div className={`flex flex-row-reverse justify-between items-center`}>
            <Links />
            <Switcher />
          </div>
        </div>
      </nav>
    </div>
  )
}
