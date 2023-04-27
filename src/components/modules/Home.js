"use client"

import Image from "next/image"
import personalLogo from "./../../../public/assets/images/logo.svg"
import rect from "./../../../public/assets/images/rect.svg"
import polygon from "./../../../public/assets/images/polygon.svg"
import { useTheme } from "next-themes"

export default function Home() {
  // const { resolvedTheme, setTheme } = useTheme()

  return (
    <main className="relative h-[28rem] md:flex items-start justify-center">
      <div className={`flex items-center font-sans p-4`}>
        <div className={`flex flex-col text-3xl md:text-4xl lg:text-5xl gap-12 z-10`}>
          <h1 className={`leading-tight`}>Hello, i&apos;m Redouan Ch. Front-end developer and UI designer.</h1>
          <h1 className={`leading-snug font-medium`}>
            I help Independents, founders to <br className={`hidden md:block`} /> <span>Ideate. Prototype. Build. </span>User-friendly experiences and ship it Faster.
          </h1>
        </div>
      </div>
      <div className={`md:hidden`}>
        <div className={`absolute top-0 left-0 px-4`}>
          <Image className={`w-80`} src={rect} alt="Copyright icon" />
        </div>
        <div className={`absolute bottom-0 right-0 px-4`}>
          <Image className={`w-80`} src={polygon} alt="Copyright icon" />
        </div>
      </div>
      <div className="hidden md:block absolute">
        <Image className={`w-screen`} src={personalLogo} alt="Copyright icon" />
      </div>
    </main>
  )
}
