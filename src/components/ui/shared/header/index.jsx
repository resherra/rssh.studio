"use client"

import { useEffect, useState } from "react"

//components
import Links from "./links"
import Bar from "./bar"

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
    <div className={`font-mono selection:bg-white selection:text-black text-xs lg:text-sm w-full z-30 sticky top-0 m-auto bg-secColor ${scroll && `backdrop-blur-md md:backdrop-blur-sm bg-secColor/50 border-b border-mainGray`}`}>
      <nav className={`max-w-screen-2xl m-auto`}>
        <div className={`p-4 md:px-6 lg:px-8 md:pt-6 md:pb-2`}>
          <div className={`flex items-center m-auto max-w-screen-sm gap-4`}>
            <div className="hidden md:block">
              <Bar />
            </div>
            <Links isHeader={true} />
          </div>
          <div className="block pt-8 md:hidden max-w-fit">
            <Bar />
          </div>
        </div>
      </nav>
    </div>
  )
}
