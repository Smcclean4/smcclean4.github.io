import { Layout } from "@/components/Layout"
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center flex-col">
        <Image className="my-10 mx-auto p-3 lg:p-0" src="/SLM-LOGO-ICON-WHITE.png" alt={""} height="200" width="200" placeholder="blur" blurDataURL="/SLM-LOGO-ICON-WHITE.png" />
        <p className="text-md animate-typing overflow-hidden border-r-2 whitespace-nowrap my-0 mx-auto tracking-widest lg:text-2xl sm:text-lg">Software Developer. Innovator. Creator.</p>
      </div>
    </Layout>
  )
}
