import ContactForm from "./form"
import BackToTop from "./back to top"
import Links from "../header/links"
import Social from "./social"

import Image from "next/image"
import copyrightIcon from "@/components/ui/icons/copyright-icon.svg"

export default function Footer() {
  return (
    <div className={`w-screen absolute bg-secColor text-textColor selection:bg-textColor selection:text-secColor border-t dark:border-mainGray`}>
      <div className={`p-4 lg:px-8 pt-12 md:pt-20 text-sm`}>
        <div className={`flex flex-col font-mono justify-center`}>
          <p className={`font-sans font-medium text-3xl pb-12`}>Stay in touch</p>
          <div className={`flex items-baseline gap-4 pb-6`}>
            <p>You can find me on:</p>
            <Social />
          </div>
          <div className={`flex flex-col gap-4 pb-20 md:pb-28`}>
            <p>Or submit your email:</p>
            <div>
              <ContactForm />
            </div>
          </div>
          <div className="flex justify-between items-end md:gap-12">
            <div className="flex flex-col md:flex-row-reverse justify-between items-baseline md:w-full">
              <div className={`pb-6 md:pb-0 text-xs text-mainGray`}>
                <Links />
              </div>
              <div className={`flex items-baseline gap-2`}>
                <Image className={`w-3`} src={copyrightIcon} alt="Copyright icon" />
                <div>Redouan Ch. {new Date().getFullYear()}</div>
              </div>
            </div>
            <div className={`min-w-max`}>
              <BackToTop />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
