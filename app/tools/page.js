export default function tools() {
  return (
    <div className={`min-h-[32rem] text-lg flex py-24`}>
      <div className="flex flex-col gap-10">
        <h5 className="text-stone-400 text-2xl">The tools and technologies I use on a daily basis for my work:</h5>
        <div className="flex flex-col gap-3">
          <p className="text-stone-400 text-2xl">Design</p>
          <p>Adobe Illustrator / XD</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-stone-400 text-2xl">Code</p>
          <p>Html / Css / Sass / Tailwindcss / JavaScript / Reactjs / Nextjs</p>
          <p className="text-stone-400">when im building some APIs:</p>
          <p>Expressjs, MongoDB</p>
          <p className="text-stone-400">
            currently i'm exploring: <span className="text-white">TypeScript, Prisma..</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-stone-400 text-2xl">Version control and deployment:</p>
          <p>Git / Vercel / Netlify</p>
        </div>
      </div>
    </div>
  )
}
