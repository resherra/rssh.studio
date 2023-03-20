"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

import logo from "../public/logo.svg"

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
    <nav className={`w-full fixed top-0 left-0 leading-none bg-black backdrop-filter-none lg:bg-black/40 lg:backdrop-blur-[1px]  ${scroll && `border-b border-neutral-400`}`}>
      <div className={`m-4 lg:mx-8 lg:mt-8 lg:mb-2`}>
        <div className={`flex justify-between items-baseline`}>
          <Link href={`/`} className={`w-12 lg:w-14`} aria-label="Home page">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 95" className={`fill-[#c7c6c1]`}>
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path d="M0 0h95v95H0zM190 95H95l95-72.31V95z" />
                </g>
              </g>
            </svg>
          </Link>

          {/* <ul className={`flex gap-4`}>
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
