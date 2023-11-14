export default function Home() {
  return (
    <main className="relative pb-8 md:flex items-start -mx-px">
      <div className={`flex font-sans md:w-11/12 lg:w-5/6 z-10 relative translate-x-2 lg:translate-x-4 dark:translate-x-0 duration-150 ease-linear`}>
        <div className={`flex flex-col text-3xl md:text-4xl lg:text-5xl gap-16 z-10`}>
          <h1 className={`leading-snug`}>Hello, i&apos;m Redouan Ch. Front-end developer and UI designer.</h1>
          <h1 className={`leading-snug font-medium`}>
            I help Independents and founders to <span>Ideate. Prototype. Build. </span>User-friendly experience and ship it Faster.
          </h1>
        </div>
      </div>
    </main>
  )
}
