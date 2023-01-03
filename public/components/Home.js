import React, { useState } from "react"
import HomeServices from "./HomeServices"
import Page from "./Page"

function Home() {
  const [test, setTest] = useState([
    { id: 1, bool: false },
    { id: 2, bool: false },
    { id: 3, bool: false },
  ])

  function handleClick(e) {
    const mapArround = test.map((item) => {
      if (item.bool) {
        item.bool = false
      }
      if (item.id.toString() === e.target.id) {
        return { ...item, bool: !item.bool }
      }
      return item
    })
    return setTest(mapArround)
  }

  return (
    <Page title="Home">
      <div className="h-[32rem] max-w-screen-lg p-4 lg:m-auto">
        <div className="h-full flex flex-col gap-10 justify-center text-center">
          <p className="content__home--heading">Hello! i'm Redouan, @lazych on the web. Front-end developer and UX/UI designer.</p>
          <p className="patterns">
            I help my clients to
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-gradientTo to-gradientFrom">
              <span id="1" onClick={handleClick} className="font-semibold cursor-pointer select-none">
                {" "}
                Ideate.
              </span>{" "}
              <span id="2" onClick={handleClick} className="font-semibold cursor-pointer select-none">
                Prototype.
              </span>{" "}
              <span id="3" onClick={handleClick} className="font-semibold cursor-pointer select-none">
                Build.{" "}
              </span>
            </span>
            seamless & User-friendly experiences.
          </p>
        </div>
      </div>
      <HomeServices test={test} />
    </Page>
  )
}

export default Home
