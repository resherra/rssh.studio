import React from "react"
import { Link } from "react-router-dom"
import Page from "./Page"

function Contact() {
  return (
    <Page title="Contact">
      <div className="h-[34rem] max-w-screen-lg m-4 lg:m-auto">
        <h3 className="h-full gap-1 flex justify-center items-center">
          Say Hi via
          <Link to="mailto:Ciao@lazych.com" target="_top">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientFrom to-gradientTo font-semibold">Ciao@lazych.me</span>
          </Link>
        </h3>
      </div>
    </Page>
  )
}

export default Contact
