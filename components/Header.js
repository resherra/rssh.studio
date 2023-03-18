"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

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
    <nav className={`w-full fixed top-0 left-0 leading-none bg-mainColor backdrop-filter-none lg:bg-mainColor/40 lg:backdrop-blur-[1px]  ${scroll && `border-b border-neutral-400`}`}>
      <div className={`m-4 lg:mx-8 lg:mt-8 lg:mb-2`}>
        <div className={`flex justify-between items-baseline`}>
          <Link href={`/`} className={`w-12 lg:w-14`}>
            <img src="./logo.svg" alt="Redouan Ch. Logo" />
          </Link>

          {/* <ul className={`flex gap-4 z-40`}>
            <li>
              <Link href={`/about`}>About</Link>
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  )
}
