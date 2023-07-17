import Link from "next/link"

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div className="font-mono flex">
      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p>
              Greetings! my name Redouan Cherrat, also known as{" "}
              <a href="https://twitter.com/lazycherrat" target="_blank" aria-label="Twitter link" className="underline underline-offset-3">
                chred
              </a>{" "}
              . A self-taught JavaScript developer and UI designer, obssesed with minimalist design and typography.
            </p>
            <p>Currently working as a freelancer. i specialize in front-end development. as i&apos;m always eager to learn new things, my focus is creating clean, user-friendly web experiences that both look great and function seamlessly.</p>
          </div>
          <div className={`font-semibold`}>
            <Link href={`/tools`}>./tools and technologies i use</Link>
          </div>
        </div>
        <div>
          <p>Reach me out via:</p>
          <a className={`font-semibold`} href="mailto:redouancherrat@gmail.com">
            <br />
            contact@chred.me
          </a>
        </div>
      </div>
    </div>
  )
}
