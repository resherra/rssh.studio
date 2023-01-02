import React from "react"
import { Link } from "react-router-dom"
import Page from "./Page"

function Footer() {
  return (
    <Page>
      <footer className="pt-[6rem] max-w-screen-lg lg:mx-auto flex flex-col gap-16 items-center text-center">
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-semibold">Find me on:</h3>
          <div className="flex gap-4">
            <a href="https://twitter.com/lazycherrat" target="_blank">
              <img className="w-5" src="./images/twitter-icon.svg" alt="twitter" width="640" height="360" />
            </a>
            <a href="https://www.linkedin.com/in/redouan-cherrat-b951b81bb/" target="_blank">
              <img className="w-5" src="./images/linkedin-icon.svg" alt="linkedin" width="640" height="360" />
            </a>
            <a href="https://github.com/lazych" target="_blank">
              <img className="w-5" src="./images/github-icon.svg" alt="github" width="640" height="360" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/About" className="">
            About
          </Link>
          <Link to="/Blog" className="">
            Blog
          </Link>
          <Link to="/Contact" className="">
            Contact
          </Link>
        </div>

        <div className="flex gap-2 pb-4">
          <img className="w-3" src="./images/copyright-icon.svg" alt="" width="640" height="360" />
          <p>lazych {new Date().getFullYear()}</p>
        </div>
      </footer>
    </Page>
  )
}

export default Footer
