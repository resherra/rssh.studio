import { Body, Container, Head, Hr, Html, Img, Tailwind, Text, Link } from "@react-email/components"

export function Email() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white text-black font-sans">
          <Container className="my-0 mx-auto pt-5 pb-12">
            <Link href="https://rssh.studio">
              <Img src="https://rssh.studio/assets/images/blackLogo.png" width="64" alt="rssh.studio" />
            </Link>
            <Hr className="mt-5 mb-10 border border-[#cccccc]" />
            <Text className="text-sm leading-6">Hi There!</Text>
            <Text className="text-sm leading-6">A heartfelt thank you for subscribing to my blog updates!</Text>
            <Text className="text-sm leading-6 pb-5">Looking forward to sharing and connecting with you!</Text>
            <Text className="text-sm leading-6">Best,</Text>
            <Text className="text-sm leading-6 font-semibold">Redouan.</Text>
            <Hr className="my-5 border border-[#cccccc]" />
            <Text className="text-xs text-[#8898aa] font-semibold">© rssh.studio 2024</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Email
