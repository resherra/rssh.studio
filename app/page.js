export default function Home() {
  return (
    <main className={`min-h-[32rem] flex justify-center items-center`}>
      <div className={`flex flex-col text-3xl lg:text-5xl gap-12 selection:text-black selection:bg-[#c7c6c1]`}>
        <h2 className={`leading-tight`}>Hello, i&apos;m Redouan Ch. Front-end developer and UI designer.</h2>
        <h2 className={`leading-snug`}>
          I help Independents, startups founders to <span className={`bg-[#c7c6c1] text-black`}>Ideate. Prototype. Build.</span> User-friendly experiences and ship it Faster.
        </h2>
      </div>
    </main>
  )
}
