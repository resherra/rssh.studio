import Link from "next/link"

export default function Links(props) {
  return (
    <ul className={`flex gap-4 md:gap-10 items-baseline`}>
      <li className={!props.isHeader === "true" && `pr-8 md:pr-12`}>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/about`}>About</Link>
      </li>

      {!props.isHeader && (
        <li>
          <Link href={`/blog`}>Blog</Link>
        </li>
      )}
    </ul>
  )
}
