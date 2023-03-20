import Image from "next/image"
import githubIcon from "../public/github-logo.svg"
import twitterIcon from "../public/twitter-logo.svg"
import copyrightIcon from "../public/copyright-icon.svg"

export default function Footer() {
  return (
    <div className={`flex flex-col relative justify-center overflow-hidden selection:text-textColor selection:bg-black`}>
      <div className={`w-[35rem] md:w-screen`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 95" className={`fill-[#c7c6c1]`}>
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path d="M0 0h95v95H0zM190 95H95l95-72.31V95z" />
            </g>
          </g>
        </svg>
      </div>

      <div className={`absolute w-full h-full flex lg:justify-start lg:items-end`}>
        <div className={`p-4 lg:px-8 lg:pb-8 flex flex-col gap-5`}>
          <div className={`text-black text-2xl`}>Stay in touch!</div>
          <form name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/moqznaqk" method="POST">
            <fieldset className={`flex flex-col items-start gap-3`}>
              <input type="email" name="_replyto" id="email-address" placeholder="example@email.com" required="" className={`text-black px-3 py-1 border-2 border-black rounded-3xl bg-transparent placeholder:text-black/40 outline-none`} />
              <input className={`text-black border-2 border-black  hover:text-textColor hover:bg-black px-3 py-1 rounded-3xl outline-none`} type="submit" value="Submit" />
            </fieldset>
          </form>

          <div className={`flex justify-between items-center`}>
            <div className={`text-black`}>You can find me on:</div>
            <div className={`flex gap-4`}>
              <a href="https://twitter.com/lazycherrat" target="_blank" aria-label="Github Link">
                <Image src={twitterIcon} alt="Twitter icon" className={`w-6`} />
              </a>
              <a href="https://github.com/lazych" target="_blank" aria-label="Github Link">
                <Image src={githubIcon} alt="Github icon" className={`w-6`} />
              </a>
            </div>
          </div>

          <div className={`flex gap-2 items-center`}>
            <Image className={`w-3`} src={copyrightIcon} alt="Copyright icon" />
            <div className={`text-black`}>Redouan Ch. {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
