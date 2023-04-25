import ContactForm from "./form"
import BackToTop from "./back to top"
import Links from "../header/links"
import Social from "./social"

import Image from "next/image"
// import copyrightIcon from "../ui/icons/copyright-icon.svg"

export default function Footer() {
  return (
    <div className={`bg-secColor text-textColor selection:bg-textColor selection:text-secColor`}>
      <div className={`p-4 lg:px-8 lg:pt-8 lg:pb-2 text-sm`}>
        <div className={`flex flex-col font-mono justify-center`}>
          <p className={`font-sans font-medium text-3xl pb-12`}>Stay in touch</p>
          <div className={`flex items-baseline gap-4 pb-6`}>
            <p>You can find me on:</p>
            <Social />
          </div>
          <div className={`flex flex-col gap-4 pb-16`}>
            <p>Or submit your email:</p>
            <div>
              <ContactForm />
            </div>
          </div>
          <div className={`pb-6 text-sm text-zinc-300`}>
            <Links />
          </div>
          <div className={`flex gap-2 items-baseline justify-between text-sm`}>
            <div className={`flex items-baseline gap-2`}>
              {/* <Image className={`w-3`} src={copyrightIcon} alt="Copyright icon" /> */}
              <div>Redouan Ch. {new Date().getFullYear()}</div>
            </div>
            <BackToTop />
          </div>
        </div>
      </div>
    </div>
  )
}
