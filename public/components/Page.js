import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  useEffect(() => {
    document.title = `lazych | ${props.title}`
  }, [])

  return <Container>{props.children}</Container>
}

export default Page
