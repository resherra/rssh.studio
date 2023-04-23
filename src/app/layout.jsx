import localFont from "next/font/local"
import "../components/ui/globals.css"
import config from "../data/config"
import { Analytics } from "@vercel/analytics/react"

//modules
import Header from "../components/modules/Header"
import Footer from "../components/modules/Footer"

const { url, defaultDescription, defaultTitle, twitter } = config

export const metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteName: defaultTitle,
    images: [
      {
        url: `${url}/assets/thumbnail/thumbnail.png`,
        width: 1366,
        height: 768,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    creator: twitter,
    title: defaultTitle,
    description: defaultDescription,
    site: url,
  },
}

const domaine = localFont({
  src: [
    {
      path: "./../../public/fonts/TestDomaineDisplay-Medium.otf",
      weight: "400",
    },
    {
      path: "./../../public/fonts/TestDomaineDisplay-Regular.otf",
      weight: "500",
    },
  ],
  variable: "--font-domaine",
})

const mark = localFont({
  src: "./../../public/fonts/FFMarkPro.otf",

  variable: "--font-mark",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${domaine.variable} ${mark.variable} font-sans scroll-smooth text-white bg-secColor scrollbar`}>
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
