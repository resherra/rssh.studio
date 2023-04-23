import Link from "next/link"

import ContactForm from "./ContactForm"
import BackToTop from "./BackToTop"

import Image from "next/image"
import copyrightIcon from "../ui/icons/copyright-icon.svg"

export default function Footer() {
  return (
    <div>
      <div className={`m-4 lg:mx-8 lg:mt-8 lg:mb-2 text-sm`}>
        <div className={`flex flex-col font-mono justify-center text-textColor`}>
          <p className={`font-sans font-medium text-2xl pb-12`}>Stay in touch</p>
          <div className={`flex items-baseline gap-4 pb-6`}>
            <p>You can find me on:</p>
            <ul className={`flex gap-4 text-sm text-mainGray underline`}>
              <li>
                <a href="https://twitter.com/lazycherrat" target="_blank" aria-label="Twitter link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/lazych" target="_blank" aria-label="Twitter link">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className={`flex flex-col gap-4 pb-16`}>
            <p>Or submit your email:</p>
            <div>
              <ContactForm />
            </div>
          </div>
          <div className={`pb-6 text-sm text-zinc-300`}>
            <ul className={`flex gap-4 items-baseline`}>
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>
                <Link href={`/about`}>About</Link>
              </li>
              <li>
                <Link href={`/blog`}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className={`flex gap-2 items-baseline justify-between text-textColor text-sm`}>
            <div className={`flex items-baseline gap-2`}>
              <Image className={`w-3`} src={copyrightIcon} alt="Copyright icon" />
              <div>Redouan Ch. {new Date().getFullYear()}</div>
            </div>
            <BackToTop />
          </div>
        </div>
      </div>
    </div>
  )
}
