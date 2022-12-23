import React from "react"
import Page from "./Page"

function Blog() {
  return (
    <Page title="Blog">
      <div className="h-[34rem] max-w-screen-lg m-4 lg:m-auto">
        <div className="h-full flex flex-col justify-center gap-4 text-center">
          <h3>
            There's no blog post yet!
            <br />
            Subscribe to lazych.me to stay updated :)
          </h3>

          <form action="https://send.pageclip.co/QhZBmilHTVObQ07fe7oc1QfxGXGVSvTI" className="pageclip-form" method="post">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-fit rounded-[2.5rem] p-[0.1rem] bg-gradient-to-r from-gradientFrom to-gradientTo">
                <input type="email" autoComplete="off" name="email" placeholder="youremail@example.com" className="border py-1 w-[14rem] pl-5 bg-mainColor rounded-[2.5rem] border-none focus:outline-none text-xs" />
              </div>
              <div className="w-fit rounded-[2.5rem] p-[0.1rem] bg-gradient-to-r from-gradientFrom to-gradientTo">
                <button type="submit" className="pageclip-form__submit border py-1 p-5 bg-mainColor rounded-[2.5rem] border-none hover:bg-gradient-to-r from-gradientFrom to-gradientTo text-xs hover:text-mainColor">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default Blog
