import Link from "next/link"

export default function Links({ isHeader = false }) {
  return (
    <ul className={`flex gap-6 md:gap-12 lg:gap-14`}>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/about`}>About</Link>
      </li>
      <li>
        <Link href={`/projects`}>Projects</Link>
      </li>

      {!isHeader && (
        <li>
          <Link href={`/blog`}>Blog</Link>
        </li>
      )}
    </ul>
  )
}
