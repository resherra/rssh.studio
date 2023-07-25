import ProjectCard from "../../components/modules/ProjectCard"
import projects from "../../../public/assets/projects"

export const metadata = {
  title: "Projects",
}

const ProjectPage = () => {
  return (
    <div className="font-mono">
      <h3 className="font-sans text-3xl pb-10">Projects</h3>
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg m-auto grid grid-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
