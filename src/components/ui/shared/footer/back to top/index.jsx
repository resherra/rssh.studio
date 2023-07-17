"use client"

export default function BackToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return <button onClick={handleClick}>Back to top ↑</button>
}
