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
  title: "Redouan Ch",
  description: "Hello, i'm Redouan Ch. Front-end developer and UI designer. I help Independents, startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${major.variable} text-textColor font-sans bg-mainColor scrollbar`}>
      <body>
        <div className={`max-w-screen-lg p-4 lg:px-0 lg:m-auto `}>
          <div>{<Header />}</div>
          <div>{children}</div>
        </div>
        <div>{<Footer />} </div>
      </body>
    </html>
  )
}
