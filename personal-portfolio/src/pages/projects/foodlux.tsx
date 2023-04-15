import { Layout } from "@/components/Layout"
import { useState, useEffect } from "react";
import { Videoplayer } from "@/components/Videoplayer";

const foodlux = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row w-full h-full lg:bg-gradient-to-br from-black from-50% to-white to-50%">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center pt-10">
          <p className="text-5xl mb-10 font-mono underline">Foodlux</p>
          <p className="w-3/4 text-2xl font-extralight">An example food servicing website where you can order food, browse menus,and  order food using your preferred payment method. You'll receive order information after putting in your checkout information, and you can track the status of your order from the comfort of your own home.</p>
          <ul className="my-10 flex flex-row flex-wrap w-3/4 justify-center">
            <a target="_blank" href="https://www.mui.com"><img className="m-3 h-15 animate-pulse" src="https://img.icons8.com/color/48/000000/material-ui.png" /></a>
            <a target="_blank" href="https://www.typescriptlang.org"><img className="m-3 h-15 animate-pulse" src="https://img.icons8.com/color/48/000000/typescript.png" /></a>
            <a target="_blank" href="https://www.react.dev"><img className="m-3 h-15 animate-pulse" src="https://img.icons8.com/color/48/000000/react-native.png" /></a>
            <a target="_blank" href="https://www.expressjs.com"><img className="m-3 h-15 animate-pulse" src="https://img.icons8.com/color/48/000000/express.png" /></a>
            <a target="_blank" href="https://www.mongodb.com"><img className="m-3 h-15 animate-pulse" src="https://img.icons8.com/color/48/000000/mongodb.png" /></a>
            <a target="_blank" href="https://www.nodejs.org"><img className="m-3 h-15 animate-pulse" src="https://img.icons8.com/color/48/000000/nodejs.png" /></a>
          </ul>
        </div>
        <div className={loading ? "animate-slide text-black w-full lg:w-1/2 h-full flex flex-col items-center justify-end lg:bg-inherit bg-white" : "text-black w-full lg:w-1/2 h-full flex flex-col items-center justify-end lg:bg-inherit bg-white"}>
          <Videoplayer url="https://mccleansid.wistia.com/medias/euvwununbc" />
          <p className="font-mono text-md md:text-xl my-4 px-6 text-center">You can find this project live <a href="" className="underline">here</a>. And the source code <a target="_blank" href="https://www.github.com/smcclean4/foodlux" className="underline">here</a>.</p>
        </div>
      </div>
    </Layout>
  )
}

export default foodlux