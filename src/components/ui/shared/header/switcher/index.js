import { useTheme } from "next-themes"

export default function Switcher() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={`text-sm text-zinc-600`}>
        {resolvedTheme === "dark" ? "/Dark" : "/Light"}
      </button>
    </div>
  )
}
