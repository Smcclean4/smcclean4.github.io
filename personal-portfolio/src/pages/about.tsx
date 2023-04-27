import { Layout } from "@/components/Layout"
import Image from 'next/image'

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse h-full w-full text-center lg:flex-row text-white">
        <div className="w-full flex flex-col justify-center items-center lg:w-1/2">
          <div className="my-10">
            <h1 className="text-2xl animate-typing overflow-hidden border-r-2 whitespace-nowrap my-0 mx-auto tracking-widest sm:text-3xl">Hello, my name is Sidney.</h1>
          </div>
          <div className="w-11/12 text-xl font-extralight sm:w-3/4">
            <p className="my-2">I have extensive experience in freelance work for prominent clients, as well as individual clients, where I develop top-notch software solutions that cater to both client requirements and user needs.</p>
            <p className="my-2">
              My extensive range of skills and experience as a developer makes me a versatile fit for various positions. I have honed my proficiency in multiple programming languages, including <i className="underline"><b>JavaScript/TypeScript, PHP, and Python</b></i>, and adeptly employ a variety of frameworks and tools such as <i className="underline"><b>React/Node.js, Laravel, and Django</b></i>. Furthermore, my expertise extends to databases, with proficiency in both <i className="underline"><b>SQL and NoSQL</b></i> databases.
            </p>
            <p className="my-2">
              Alongside my technical expertise, I am a <i className="underline"><b>self-motivated</b></i> individual who <i className="underline"><b>excels in both collaborative and independent work</b></i> settings. My passion for the industry is evident through my constant pursuit of staying <i className="underline"><b>up-to-date with the latest trends</b></i> and emerging technologies. I am always eager to expand my skillset, not just as a developer but also as an individual, <i className="underline"><b>striving for personal and professional growth.</b></i>
            </p>
            <p className="my-2">
              Overall, I believe that my combination of technical expertise, communication skills, and passion for software development make me an excellent fit for any software development position.
            </p>
            <p><b>Looking forward to hearing from you soon.</b></p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-white drop-shadow-2xl lg:w-1/2">
          <Image className="mx-auto" src="/IMG_3532.jpg" alt={""} height="550" width="550" placeholder="blur" blurDataURL="/IMG_3532.jpg" />
        </div>
      </div>
    </Layout>
  )
}

export default About