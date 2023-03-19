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
    <html lang="en">
      <body className={`${major.variable} font-sans text-[#c7c6c1] bg-black scrollbar overflow-x-hidden`}>
        <nav>{<Header />}</nav>
        <div className={`max-w-screen-lg p-4 lg:px-0 m-auto`}>{children}</div>
        <footer>{<Footer />}</footer>
      </body>
    </html>
  )
}
