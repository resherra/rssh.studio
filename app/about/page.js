import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-[32rem] text-lg flex py-24">
      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p>Greetings! my name is Redouan Cherrat, a self-taught JavaScript developer and designer, obssesed with minimalist and typographic design.</p>
            <p>Currently working as a freelancer. i specialize in front-end development. I&apos;m always eager to learn new things. my goal is to create clean, intuitive, and user-friendly web experiences that both look great and function seamlessly.</p>
          </div>
          <div>
            <Link className="text-stone-400" href={`/tools`}>
              ./tools i use
            </Link>
          </div>
        </div>
        <div>
          <p>Reach me out via:</p>
          <a className="text-stone-400" href="mailto:redouancherrat@gmail.com">
            redouancherrat@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
