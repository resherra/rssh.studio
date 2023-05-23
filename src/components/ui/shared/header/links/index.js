import Link from "next/link"

export default function Links(props) {
  return (
    <ul className={`flex gap-8 md:gap-12 lg:gap-14`}>
      <li className={props.isHeader !== "true" && `pr-8 md:pr-12`}>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/about`}>About</Link>
      </li>

      {props.isHeader !== "true" && (
        <li>
          <Link href={`/blog`}>Blog</Link>
        </li>
      )}
    </ul>
  )
}
