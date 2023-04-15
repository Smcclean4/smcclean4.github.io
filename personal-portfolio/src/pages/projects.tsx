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
        <div className="flex flex-row items-end">
          <span className="text-8xl sm:text-9xl font-serif text-gray-800 opacity-70"><i>1.</i></span>
          <div>
            <p className={loading ? "text-2xl sm:text-3xl font-mono animate-extension1 mb-2" : "text-2xl sm:text-3xl font-mono mb-2"}>This is <a href="/projects/foodlux"><b className="underline"><i>Foodlux</i></b></a>.</p>
            <p className="text-md sm:text-lg text-gray-500"><i>Full-Stack (MERN) food service web application.</i></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default projects