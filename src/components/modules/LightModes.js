"use client"

import { useState } from "react"

export default function LightModes() {
  const [dark, setDark] = useState(false)

  const switchHandler = () => {
    setDark(!dark)
  }

  return (
    <button onClick={switchHandler} className={`text-zinc-300`}>
      {!dark ? `/Dark` : `/Light`}
    </button>
  )
}
