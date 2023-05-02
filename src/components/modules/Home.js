"use client"

import Image from "next/image"
import personalLogo from "./../../../public/assets/images/logo.svg"
import Polygon from "../../../public/assets/images/polygon"
import Rect from "../../../public/assets/images/rect"

import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="relative pb-8 md:flex items-start">
      <div className={`flex font-sans md:w-11/12 lg:w-5/6 ${theme !== "dark" ? "md:px-4" : ""}`}>
        <div className={`flex flex-col text-3xl md:text-4xl lg:text-5xl gap-16 z-10`}>
          <h1 className={`leading-snug`}>Hello, i&apos;m Redouan Ch. Front-end developer and UI designer.</h1>
          <h1 className={`leading-snug font-medium`}>
            I help Independents, founders to <span>Ideate, Prototype and Build </span>User-friendly experiences and ship it Faster.
          </h1>
        </div>
      </div>
      {theme === "light" && (
        <div className={`md:hidden`}>
          <div className={`w-5/6 absolute top-0 left-0`}>
            <Rect />
          </div>
          <div className={`w-5/6 absolute right-0 bottom-0`}>
            <Polygon />
          </div>
        </div>
      )}

      {theme === "light" && (
        <div className="hidden md:block md:absolute ">
          <Image className={`w-screen`} src={personalLogo} alt="Personal Logo" />
        </div>
      )}
    </main>
  )
}
