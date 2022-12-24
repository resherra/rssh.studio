import React from "react"
import Page from "./Page"

function About() {
  return (
    <Page title="About">
      <div className="h-[34rem] max-w-screen-lg p-4 lg:m-auto">
        <div className="h-full flex flex-col gap-5 justify-center text-center">
          <p>HTML5 / CSS / Tailwindcss / Sass / JavaScript / Webpack / Git</p>
          <p>Intermediate knowledge : Node.js / Express.js / MongoDB</p>
          <p>Adobe Illustrator / Adobe XD</p>
          <p>Quadrilingual: English, French, Arabic and Spanish</p>
        </div>
      </div>
    </Page>
  )
}

export default About
