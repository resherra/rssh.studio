import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="font-mono flex">
      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p>Greetings! my name Redouan Cherrat, a self-taught JavaScript developer and designer, obssesed with minimalist and typographic design.</p>
            <p>Currently working as a freelancer. i specialize in front-end development. I&apos;m always eager to learn new things. my goal is to create clean, intuitive, and user-friendly web experiences that both look great and function seamlessly.</p>
          </div>
          <div className={`font-semibold`}>
            <Link href={`/tools`}>./tools and technologies i use</Link>
          </div>
        </div>
        <div>
          <p>Reach me out via:</p>
          <a className={`font-semibold`} href="mailto:redouancherrat@gmail.com">
            redouancherrat@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
