import { Body, Container, Head, Hr, Html, Img, Preview, Tailwind, Text, Link } from "@react-email/components"

export function Email() {
  return (
    <Html>
      <Head />
      <Preview>I help Independents and founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.</Preview>
      <Tailwind>
        <Body className="bg-white text-black font-sans">
          <Container className="my-0 mx-auto pt-5 pb-12">
            <Link href="https://chred.me">
              <Img src="https://chred.me/assets/images/blackLogo.png" width="64" alt="Chred" />
            </Link>
            <Hr className="mt-5 mb-10 border border-[#cccccc]" />
            <Text className="text-sm leading-6">Hi There!</Text>
            <Text className="text-sm leading-6">A heartfelt thank you for subscribing to my blog updates! I&apos;m excited to have you on this journey with me.</Text>
            <Text className="text-sm leading-6 pb-5">Looking forward to sharing and connecting with you!</Text>
            <Text className="text-sm leading-6">Best,</Text>
            <Text className="text-sm leading-6 font-semibold">Redouan Ch.</Text>
            <Hr className="my-5 border border-[#cccccc]" />
            <Text className="text-xs text-[#8898aa] font-semibold">© Chred 2023</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Email
