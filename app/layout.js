import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import localFont from "next/font/local"

//components
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const domaine = localFont({
  src: [
    {
      path: "./../public/fonts/TestDomaineDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "./../public/fonts/TestDomaineDisplay-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-domaine",
})

const mark = localFont({
  src: "./../public/fonts/FontFont_FF.Mark.Pro.otf",

  variable: "--font-mark",
})

export const metadata = {
  title: "Chred | Hello world!",
  description: "Hello, i'm Redouan Ch. Front-end developer and UI designer. I help Independents, startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${domaine.variable} ${mark.variable} text-white bg-black scrollbar overflow-x-hidden`}>
        <nav className="selection:bg-stone-200 selection:text-black">{<Header />}</nav>
        <div className={`max-w-screen-lg p-4 lg:px-0 m-auto selection:bg-stone-200 selection:text-black`}>
          {children}
          <Analytics />
        </div>
        <footer>{<Footer />}</footer>
      </body>
    </html>
  )
}
