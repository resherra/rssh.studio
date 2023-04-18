"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

//components
import LightModes from "./LightModes"

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
    <nav className={`w-full text-sm fixed top-0 left-0 leading-none bg-black backdrop-filter-none lg:bg-black/40 lg:backdrop-blur-[1px] font-mono  ${scroll && `border-b border-neutral-400`}`}>
      <div className={`m-4 lg:mx-8 lg:mt-8 lg:mb-2`}>
        <div className={`flex justify-between items-baseline`}>
          <LightModes />
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
