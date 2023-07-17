import Image from "next/image"
import chred from "./../../../public/assets/images/chred.png"

export const metadata = {
  title: "Projects",
}

export default function ProjectPage() {
  return (
    <>
      <h3 className="pb-10">Projects</h3>
      <div className="flex flex-col w-80 p-4 bg-white/10 rounded-xl gap-10 ">
        <Image className="w-full rounded-xl" src={chred} alt="Personal Logo" />
        <div>
          <div className="pb-5">Chred.me</div>
          <div className="pb-8">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div className="text-gray-500 text-sm ">Tools: Nextjs, Tailwindcss, formspree</div>
        </div>
      </div>
    </>
  )
}
