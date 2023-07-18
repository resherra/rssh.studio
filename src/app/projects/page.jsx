import projects from "./../../../public/assets/projects.json"
import ProjectCard from "@/components/modules/ProjectCard"

export const metadata = {
  title: "Projects",
}

const ProjectPage = () => {
  return (
    <div className="font-mono">
      <h3 className="font-sans text-3xl pb-10">Projects</h3>
      <div className="max-w-screen-lg m-auto  flex flex-col gap-10 lg:flex-row justify-between ">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
