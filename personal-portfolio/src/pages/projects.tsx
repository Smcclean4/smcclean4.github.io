import { Layout } from "@/components/Layout"
import { useEffect, useState } from "react"

const projects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <Layout>
      <div className={loading ? "w-3/4 lg:w-2/4 h-3/4 flex flex-col animate-fadingRev" : "w-3/4 lg:w-2/4 h-3/4 flex flex-col"}>
        <p className={loading ? "text-2xl sm:text-3xl font-mono animate-extension1" : "text-2xl sm:text-3xl font-mono"}><span className="text-8xl sm:text-9xl font-serif text-gray-800 opacity-70"><i>1.</i></span> This is <a href="/projects/foodlux"><b className="underline"><i>Foodlux.</i></b></a></p>
      </div>
    </Layout>
  )
}

export default projects