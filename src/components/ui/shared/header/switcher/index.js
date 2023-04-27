import { useTheme } from "next-themes"

export default function Switcher() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={`text-xs rounded-xl px-2 py-1 ${resolvedTheme !== "dark" ? "bg-black text-mainColor" : "bg-mainColor text-black "}`}>
        {resolvedTheme === "dark" ? "/Dark" : "/Light"}
      </button>
    </div>
  )
}
