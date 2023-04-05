import { Layout } from "@/components/Layout"
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Image className="my-10 mr-4" src="/SLM-LOGO-ICON-WHITE.png" alt={""} height="200" width="200" />
      <p className="text-2xl animate-pulse">Welcome to the Origin.</p>
    </Layout>
  )
}
