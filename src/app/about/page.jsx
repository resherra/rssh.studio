import Link from "next/link"
import { HiOutlineDocumentText } from "react-icons/hi"

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div className="font-mono flex ">
      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p>
              Greetings! My name is Redouan, also known as{" "}
              <a href="https://x.com/resherra" target="_blank" aria-label="x.com link" className="underline underline-offset-3">
                resherra
              </a>{" "}
              . A self-taught JavaScript developer and UI designer.
            </p>
            <p>Currently working as a freelancer. i specialize in front-end development. as i&apos;m always eager to learn new things, my focus is creating clean, user-friendly web experiences that both look great and function seamlessly.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className={`font-semibold`}>
              <Link href={`/tools`}>./tools and technologies i use</Link>
            </div>
            <a href="https://docs.google.com/document/d/1SVSt0nE7b71L-2Ah5fPpw2n1af0k-XTjLFvbMbkzAvM/edit?usp=sharing" target="_blank">
              <div className="flex  gap-2">
                <HiOutlineDocumentText />
                Resume
              </div>
            </a>
          </div>
        </div>
        <div>
          <p>Reach me out via:</p>
          <a className={`font-semibold`} href="mailto:redouan@rssh.studio">
            <br />
            redouan@rssh.studio
          </a>
        </div>
      </div>
    </div>
  )
}
