import Link from "next/link"

export default function Links() {
  return (
    <ul className={`flex gap-4 md:gap-10 items-baseline`}>
      <li className={`pr-8 md:pr-12 hover:text-textColor`}>
        <Link href={`/`}>Home</Link>
      </li>
      <li className={`hover:text-textColor`}>
        <Link href={`/about`}>About</Link>
      </li>
      <li className={`hover:text-textColor`}>
        <Link href={`/blog`}>Blog</Link>
      </li>
    </ul>
  )
}
