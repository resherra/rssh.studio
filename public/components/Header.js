import React from "react"
import { Link } from "react-router-dom"
import Page from "./Page"

function Header() {
  return (
    <Page>
      <nav className="max-w-screen-lg p-4 lg:m-auto flex items-baseline justify-between">
        <div className="w-12 md:w-14">
          <Link to="/">
            <img src="./images/logo.svg" alt="" />
          </Link>
        </div>

        <div>
          <div>
            <ul className="flex-col lg:flex lg:flex-row gap-5 lg:gap-7 pl-4 lg:pl-0 text-center lg:mt-10 bg-zinc-200 bg-opacity-5 backdrop-blur-[1.2px] lg:bg-transparent fixed lg:static top-0 lg:-top-0 bottom-0 lg:-bottom-0 z-10 lg:z-auto pt-[5rem] lg:pt-0 right-0 lg:-right-0 w-screen lg:w-full hidden" id="menu-list">
              <li>
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <button onClick={handleNav} className="toggle-button w-5 cursor-pointer relative lg:hidden z-20" aria-label="toggle">
              <span className="block bg-textColor h-0.5 mb-0.5 rounded-lg"></span>
              <span className="block bg-textColor h-0.5 mb-0.5 rounded-lg"></span>
              <span className="block bg-textColor h-0.5 rounded-lg"></span>
            </button>
          </div>
        </div>
      </nav>
    </Page>
  )

  function handleNav(e) {
    console.log("test!")
  }
}

export default Header
