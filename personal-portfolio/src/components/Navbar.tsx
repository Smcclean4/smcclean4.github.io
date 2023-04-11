import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <>
      <div className="p-6 flex flex-row items-center justify-between w-full bg-black">
        <Link href="/"><Image src="/SLM-LETTER-ICON.png" alt={""} height="50" width="50" /></Link>
        <ul className="flex">
          <li className="mx-10 underline underline-offset-8">
            <Link href="/about">About</Link>
          </li>
          <li className="mx-10 underline underline-offset-8">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="mx-10 underline underline-offset-8">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}