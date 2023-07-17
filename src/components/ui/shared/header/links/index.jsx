import Link from "next/link"

export default function Links({ isHeader = false }) {
  return (
    <ul className={`flex gap-8 md:gap-12 lg:gap-14`}>
      <li className={!isHeader && `pr-8 md:pr-12`}>
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
