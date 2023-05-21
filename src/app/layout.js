import { Metadata } from "next"
import "../components/ui/globals.css"

//analytics
import { AnalyticsWrapper } from "../components/analytics/Analytics"
//fonts
import localFont from "next/font/local"

//modules
import Header from "@/components/ui/shared/header"
import Footer from "../components/ui/shared/footer"
import Container from "@/components/modules/Container"

//next-themes
import Provider from "../components/Provider/Providers"

export const metadata = {
  title: {
    default: "chred | Home",
    template: "chred | %s",
  },
  description: "Hello, i'm Redouan Ch. Front-end developer and UI designer. I help Independents and startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
  openGraph: {
    title: "chred.me | Hey folks!",
    description: "Hello, i'm Redouan Ch. Front-end developer and UI designer. I help Independents and startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
    url: "https://chred.me",
    siteName: "chred.me",
    images: [
      {
        url: "https://chred.me/assets/og/og.jpg",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  category: "technology",
}

const domaine = localFont({
  src: [
    {
      path: "./../../public/fonts/TestDomaineDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "./../../public/fonts/TestDomaineDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "./../../public/fonts/TestDomaineDisplay-Semibold.otf",
      weight: "600",
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
      <body className={`${domaine.variable} ${mark.variable} font-sans scroll-smooth scrollbar overflow-x-hidden flex-grow bg-black`}>
        <Provider>
          {<Header />}
          <Container>{children}</Container>
          {<Footer />}
        </Provider>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
