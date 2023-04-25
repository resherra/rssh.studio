// "use client"

// import { useTheme } from "next-themes"

export default function Home() {
  // const { resolvedTheme, setTheme } = useTheme()
  return (
    <main className={`flex items-center font-sans`}>
      <div className={`flex flex-col text-3xl lg:text-5xl gap-12`}>
        <h1 className={`leading-tight`}>Hello, i&apos;m Redouan Ch. Front-end developer and UI designer.</h1>
        <h1 className={`leading-snug font-medium`}>
          I help Independents, founders to <span className={`bg-secColor text-textColor`}>Ideate. Prototype. Build. </span>User-friendly experiences and ship it Faster.
        </h1>
        {/* <h1>{resolvedTheme === "dark" ? "Dark" : "Light"}</h1> */}
      </div>
    </main>
  )
}
