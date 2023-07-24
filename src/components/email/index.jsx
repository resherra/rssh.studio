import { Html } from "@react-email/html"
import { Button } from "@react-email/button"

export function Email() {
  return (
    <Html lang="en">
      <h1>hello</h1>
      <Button href="https://chred.me">Click me</Button>
    </Html>
  )
}

export default Email
