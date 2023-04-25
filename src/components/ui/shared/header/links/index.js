import Link from "next/link"

export default function Links() {
  return (
    <ul className={`flex gap-4 items-baseline`}>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/about`}>About</Link>
      </li>
      <li>
        <Link href={`/blog`}>Blog</Link>
      </li>
    </ul>
  )
}
