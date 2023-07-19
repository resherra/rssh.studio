import Image from "next/image"
import { HiOutlineExternalLink } from "react-icons/hi"
import { AiFillGithub } from "react-icons/ai"

export default function ProjectCard({ project }) {
  return (
    <div>
      <Image className="rounded-t-xl" src={project.img} alt={project.name} placeholder="blur" />
      <div className="flex flex-col h-56 p-4 bg-white/5 hover:bg-white/10 rounded-b-xl justify-between">
        <div className="flex items-center justify-between">
          <div className="font-sans text-xl">{project.name}</div>
          <div className="flex items-center gap-4">
            <a href={`${project.live}`} target="_blank">
              <HiOutlineExternalLink />
            </a>
            <a href={`${project.github}`} target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="text-sm">{project.desc}</div>
        <div className="text-mainGray/70 text-sm ">Tools: {project.tools.join(", ")}</div>
      </div>
    </div>
  )
}
