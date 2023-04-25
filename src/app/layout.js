import localFont from "next/font/local"
import "../components/ui/globals.css"
import config from "../data/config"
import { AnalyticsWrapper } from "../components/analytics/Analytics"

//modules
import Header from "@/components/ui/shared/header"
import Footer from "../components/ui/shared/footer"
import Container from "@/components/modules/Container"

//next-themes
import Provider from "../components/Provider/Providers"

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
  keywords: ["Next.js", "React", "JavaScript", "TailwindCSS", "next-themes", "App Directory", "personal website", "portfolio"],
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
      path: "./../../public/fonts/TestDomaineDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "./../../public/fonts/TestDomaineDisplay-Medium.otf",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${domaine.variable} ${mark.variable} font-sans scroll-smooth scrollbar`}>
        <Provider>
          <Container>
            {<Header />}
            {children}
          </Container>
          {<Footer />}
        </Provider>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
