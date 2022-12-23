import React from "react"

function Container(props) {
  return (
    <div className="bg-mainColor">
      <div className="text-textColor text-xs lg:text-sm">{props.children}</div>
    </div>
  )
}

export default Container
