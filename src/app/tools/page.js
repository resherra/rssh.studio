export default function tools() {
  return (
    <div className={`font-mono flex`}>
      <div className="flex flex-col gap-10">
        <h5 className=" font-sans text-2xl">Tools and technologies i work with on a daily basis:</h5>
        <div className="flex flex-col gap-3">
          <p className="font-sans text-xl font-medium">Design</p>
          <p>Adobe Illustrator, Adobe XD</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className=" font-sans text-xl font-medium">Code</p>
          <p>Html, Css, Sass, Tailwindcss, JavaScript, Reactjs, Nextjs</p>
          <p>Webpack, Vite</p>
          <p>
            when im building some APIs: <span>Expressjs, MongoDB</span>{" "}
          </p>

          <p>
            currently i&apos;m exploring: <span>TypeScript, Prisma..</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className=" font-sans text-xl font-medium">Version control and deployment</p>
          <p>Git, Vercel, Netlify</p>
        </div>
      </div>
    </div>
  )
}
