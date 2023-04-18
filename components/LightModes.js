"use client"

import { useState } from "react"

export default function LightModes() {
  const [dark, setDark] = useState(false)

  const switchHandler = () => {
    setDark(!dark)
  }

  return (
    <button onClick={switchHandler} className={`text-mainGray`}>
      {!dark ? `/Dark` : `/Light`}
    </button>
  )
}
