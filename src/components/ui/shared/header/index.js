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
      <nav className={`w-full z-20 fixed top-0 left-0 ${scroll && `bg-mainColor dark:bg-secColor border-b border-secColor dark:border-mainGray`}`}>
        <div className={`m-4 lg:mx-8 lg:mt-8 lg:mb-2`}>
          <div className={`flex flex-row-reverse justify-between items-baseline`}>
            <Links />
            <Switcher />
          </div>
        </div>
      </nav>
    </div>
  )
}
