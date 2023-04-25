import { useTheme } from "next-themes"

export default function ModeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleSwitch = () => {
    return setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div>
      <button onClick={handleSwitch} className={`bg-black text-pink-200 dark:bg-pink-200 dark:text-black text-sm rounded-md p-1 mb-4`}>
        Switch theme
      </button>
      <div>the theme now is: {resolvedTheme === "dark" ? "/dark" : "/light"}</div>
    </div>
  )
}
