import chred from "./images/chred.png"
import gitfind from "./images/gitfind.png"
import multiStepsForm from "./images/multiStepsForm.png"

const projects = [
  { name: "rssh.studio", desc: "My personal website.", img: chred, tools: ["Nextjs", "Tailwindcss", "Resend"], live: "https://rssh.studio/", github: "https://github.com/resherra/rssh.studio" },
  { name: "Gitfind", desc: "Search for a GitHub user, view their repositories, and explore detailed information for each one.", img: gitfind, tools: ["React", "React Query", "Tailwindcss"], live: "https://gitfind.rssh.studio/", github: "https://github.com/resherra/gitfind" },
  { name: "Multi steps form", desc: "Multi steps form where you can register, select a plan, add ons and get the final cost.", img: multiStepsForm, tools: ["React", "Tailwindcss"], live: "https://multi-steps-form-w-react.vercel.app/", github: "https://github.com/resherra/multi-steps-form-w-react" },
]

export default projects
