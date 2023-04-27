import { useTheme } from "next-themes"

export default function Switcher() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={`text-xs text-mainGray ${resolvedTheme !== "dark" ? "bg-black rounded-xl px-2 py-1 text-mainColor" : "bg-mainColor rounded-xl px-2 py-1 text-black "}`}>
        {resolvedTheme === "dark" ? "/Dark" : "/Light"}
      </button>
    </div>
  )
}
