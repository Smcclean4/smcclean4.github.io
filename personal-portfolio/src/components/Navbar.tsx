import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <>
      <div className="p-2 flex flex-row items-center justify-between absolute w-full bg-black border border-white">
        <Link href="/"><Image src="/SLM-LETTER-ICON.png" alt={""} height="40" width="40" /></Link>
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