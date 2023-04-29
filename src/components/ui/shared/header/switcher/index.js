import { useTheme } from "next-themes"

export default function Switcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`text-xs rounded-xl px-2 py-1 bg-white text-black ${theme !== "dark" ? "" : ""}`}>
        {theme === "dark" ? "/Dark" : "/Light"}
      </button>
    </div>
  )
}
