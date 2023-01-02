import React from "react"
import Page from "./Page"

function HomeServices() {
  return (
    <Page>
      <div className="bg-gridsColor rounded-b-3xl lg:rounded-none w-screen-lg lg:m-auto clip-path-mypolygon lg:clip-path-none">
        <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-10 pt-20 pb-10 lg:py-14 max-w-screen-lg p-4 lg:m-auto">
          <div className="bg-mainColor rounded-[2.5rem] p-8 flex flex-col justify-center lg:justify-start drop-shadow-md">
            <h3 id="services" data-link="link1" className={`font-semibold pb-6 lg:pb-10 lg:pt-3`}>
              Ideate
            </h3>
            <p className="lg:pb-10">I am here to help you consider the product's architecture, design system, tech stack, and features..</p>
          </div>

          <div className="bg-mainColor rounded-[2.5rem] p-8 flex flex-col justify-center lg:justify-start drop-shadow-md">
            <h3 id="services" data-link="link2" className={`font-semibold pb-6 lg:pb-10 lg:pt-3`}>
              Prototype
            </h3>
            <p className="lg:pb-10">Get your MVP ready and share it with your earliest adopters to gather feedback.</p>
          </div>

          <div className="bg-mainColor rounded-[2.5rem] p-8 flex flex-col justify-center lg:justify-start drop-shadow-md">
            <h3 id="services" data-link="link3" className={`font-semibold pb-6 lg:pb-10 lg:pt-3`}>
              Build & deploy
            </h3>
            <p className="lg:pb-10">I will work to enhance your product and elevate it to the next level, then distribute the final version to the intended audience.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomeServices
