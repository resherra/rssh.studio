import Image from "next/image"
import githubIcon from "../public/github-logo.svg"
import twitterIcon from "../public/twitter-logo.svg"
import copyrightIcon from "../public/copyright-icon.svg"
import logo from "../public/logo.svg"

export default function Footer() {
  return (
    <div className={`flex flex-col relative justify-center overflow-hidden`}>
      <div className={`w-[35rem] md:w-screen`}>
        <Image src={logo} alt="" className={`w-[35rem] md:w-screen`} />
      </div>

      <div className={`m-4 lg:mx-8 lg:my-8 absolute top-0 md:bottom-0 md:top-auto left-0 flex flex-col gap-5`}>
        <div className={`text-mainColor text-2xl`}>Stay in touch!</div>
        <form name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/moqznaqk" method="POST">
          <fieldset className={`flex flex-col items-start gap-3`}>
            <input type="email" name="_replyto" id="email-address" placeholder="example@email.com" required="" className={`text-mainColor px-3 py-1 border-2 border-mainColor rounded-3xl`} />
            <input className={`text-mainColor border-2 border-mainColor  hover:text-textColor hover:bg-mainColor px-3 py-1 rounded-3xl`} type="submit" value="Submit" />
          </fieldset>
        </form>

        <div className={`flex items-center justify-between`}>
          <div className={`flex gap-2 items-baseline`}>
            <Image className={`w-3`} src={copyrightIcon} />
            <h6 className={`text-mainColor`}>Redouan ch {new Date().getFullYear()}</h6>
          </div>
          <div className={`flex gap-2`}>
            <a href="https://twitter.com/lazycherrat" target="_blank">
              <Image src={twitterIcon} alt="" className={`w-5`} />
            </a>
            <a href="https://github.com/lazych" target="_blank">
              <Image src={githubIcon} alt="" className={`w-5`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
