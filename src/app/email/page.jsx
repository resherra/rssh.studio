"use client"

import { Html } from "@react-email/html"
import { Button } from "@react-email/button"
import { Tailwind } from "@react-email/tailwind"
import { Container } from "@react-email/container"

export function Email() {
  return (
    <Tailwind>
      <Html lang="en">
        <Container>
          <Button href="https://chred.me">Click helo</Button>
        </Container>
      </Html>
    </Tailwind>
  )
}

export default Email
