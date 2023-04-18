import Link from "next/link"

import ContactForm from "./ContactForm"
import BackToTop from "./BackToTop"

import Image from "next/image"
import copyrightIcon from "../public/copyright-icon.svg"

export default function Footer() {
  return (
    <div className={`flex flex-col font-mono justify-center text-textColor`}>
      <p className={`font-sans font-medium`}>Stay in touch</p>
      <div className={`flex gap-4`}>
        <p>You can find me on</p>
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
      <div>
        <p>Or submit your email:</p>
        <div>
          <ContactForm />
        </div>
      </div>
      <div>
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
      <div className={`flex gap-2 items-baseline justify-between text-textColor`}>
        <div className={`flex items-baseline gap-2`}>
          <Image className={`w-3`} src={copyrightIcon} alt="Copyright icon" />
          <div>Redouan Ch. {new Date().getFullYear()}</div>
        </div>
        <BackToTop />
      </div>
    </div>
  )
}
