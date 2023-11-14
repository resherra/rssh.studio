import Link from "next/link"

export default function Links({ isHeader = false }) {
  return (
    <div className={isHeader && `min-w-fit flex items-center gap-2 py-2 px-3 text-xs  focus:outline-none  rounded-full border  bg-white/5 text-textColor border-mainGray hover:bg-white/10`}>
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
    </div>
  )
}
