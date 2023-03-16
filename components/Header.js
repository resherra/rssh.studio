import Link from "next/link"

export default function Header() {
  return (
    <nav class="fixed w-full top-0 left-0">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link href={`/`} className={`flex items-center`}>
          <img src="./logo.svg" alt="Redouan Ch. Logo" />
        </Link>
        <div class="flex flex-row justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul>
            <li>
              <Link href={`/about`}>About</Link>
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
