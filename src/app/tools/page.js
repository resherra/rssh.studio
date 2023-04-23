export default function tools() {
  return (
    <div className={`min-h-[32rem] font-mono flex py-24 text-textColor`}>
      <div className="flex flex-col gap-10">
        <h5 className="text-zinc-300 font-sans text-2xl">The tools and technologies i work with on a daily basis:</h5>
        <div className="flex flex-col gap-3">
          <p className="text-zinc-300 font-sans text-xl">Design</p>
          <p>Adobe Illustrator / Adobe XD</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-zinc-300 font-sans text-xl">Code</p>
          <p>Html / Css / Sass / Tailwindcss / JavaScript / Reactjs / Nextjs</p>
          <p className="text-zinc-300 ">
            when im building some APIs: <span className="text-white ">Expressjs, MongoDB</span>{" "}
          </p>
          <p className="text-zinc-300">
            currently i&apos;m exploring: <span className="text-white">TypeScript, Prisma..</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-zinc-300 font-sans text-xl">Version control and deployment</p>
          <p>Git / Vercel / Netlify</p>
        </div>
      </div>
    </div>
  )
}
