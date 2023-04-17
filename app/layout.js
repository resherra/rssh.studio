import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { DM_Serif_Display } from "next/font/google"

//components
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const major = DM_Serif_Display({
  variable: "--font-major",
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "Chred | Hello world!",
  description: "Hello, i'm Redouan Ch. Front-end developer and UI designer. I help Independents, startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${major.variable} font-sans text-white bg-black scrollbar overflow-x-hidden`}>
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
