import React, { useRef } from "react"
import Page from "./Page"

function HomeServices(props) {
  const myRef = useRef(null)
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)

  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    return " bg-clip-text text-transparent bg-gradient-to-l from-gradientTo to-gradientFrom"
  }
  const executeScroll1 = () => {
    myRef1.current.scrollIntoView({ behavior: "smooth", block: "center" })
    return " bg-clip-text text-transparent bg-gradient-to-l from-gradientTo to-gradientFrom"
  }
  const executeScroll2 = () => {
    myRef2.current.scrollIntoView({ behavior: "smooth", block: "center" })
    return " bg-clip-text text-transparent bg-gradient-to-l from-gradientTo to-gradientFrom"
  }

  return (
    <Page>
      <div className="bg-gridsColor rounded-b-3xl lg:rounded-none w-screen-lg lg:m-auto clip-path-mypolygon lg:clip-path-none">
        <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-10 pt-20 pb-10 lg:py-14 max-w-screen-lg p-4 lg:m-auto">
          <div className="bg-mainColor rounded-[2.5rem] p-8 flex flex-col justify-center lg:justify-start drop-shadow-md">
            <h3 ref={myRef} className={`font-semibold pb-6 lg:pb-10 lg:pt-3 + ${props.test[0].bool ? executeScroll() : ""}`}>
              Ideate
            </h3>
            <p className="lg:pb-10">I am here to help you consider the product's architecture, design system, tech stack, and features..</p>
          </div>

          <div className="bg-mainColor rounded-[2.5rem] p-8 flex flex-col justify-center lg:justify-start drop-shadow-md">
            <h3 ref={myRef1} className={`font-semibold pb-6 lg:pb-10 lg:pt-3 + ${props.test[1].bool ? executeScroll1() : ""}`}>
              Prototype
            </h3>
            <p className="lg:pb-10">Get your MVP ready and share it with your earliest adopters to gather feedback.</p>
          </div>

          <div className="bg-mainColor rounded-[2.5rem] p-8 flex flex-col justify-center lg:justify-start drop-shadow-md">
            <h3 ref={myRef2} className={`font-semibold pb-6 lg:pb-10 lg:pt-3 + ${props.test[2].bool ? executeScroll2() : ""}`}>
              Build & Deploy
            </h3>
            <p className="lg:pb-10">I will work to enhance your product and elevate it to the next level, then distribute the final version to the intended audience.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomeServices
