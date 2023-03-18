export default function Home() {
  return (
    <main className={`min-h-[32rem] flex justify-center items-center leading-[12rem]`}>
      <div className={`flex flex-col text-3xl lg:text-5xl gap-12 selection:text-mainColor selection:bg-textColor`}>
        <h2>Hello, i'm Redouan Ch. Front-end developer and UI designer.</h2>
        <h2>
          I help Independents, startups founders to <span className={`bg-textColor text-mainColor lg:bg-inherit lg:text-textColor`}>Ideate. Prototype. Build.</span> User-friendly experiences and ship it Faster.
        </h2>
      </div>
    </main>
  )
}
