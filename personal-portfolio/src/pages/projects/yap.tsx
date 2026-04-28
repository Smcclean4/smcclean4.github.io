import { Layout } from "@/components/Layout"
import React, { useState, useEffect } from "react";
import { Videoplayer } from "@/components/Videoplayer";
import { Loading } from "@/tools/Loading";
import { Suspense } from "react";
import Image from "next/image";

const Yap = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <Layout>
      <div className="flex text-center flex-col lg:flex-row w-full h-full lg:bg-gradient-to-br from-black from-50% to-white to-50%">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center pt-10 text-white">
          <p className="text-5xl mb-10 font-mono underline">Yap</p>
          <p className="w-3/4 text-2xl font-extralight">Explore a seamless chat experience with Yap, where you can connect with friends, share updates, and stay in the loop in real time. Explore a dynamic global feed, engage in conversations, and see who’s online instantly. Send messages effortlessly and enjoy a smooth, responsive interface designed to keep you connected anytime, anywhere.</p>
          <ul className="my-10 flex flex-row flex-wrap w-3/4 justify-center">
            <a target="_blank" href="https://www.tailwindcss.com"><Image className="m-3 animate-pulse" width="50" height="50" src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt={""} /></a>
            <a target="_blank" href="https://www.typescriptlang.org"><Image className="m-3 h-15 animate-pulse" width="50" height="50" src="https://img.icons8.com/color/48/000000/typescript.png" alt={""} /></a>
            <a target="_blank" href="https://www.nextjs.org"><Image className="m-3 h-15 animate-pulse" width="50" height="50" src="https://img.icons8.com/color/48/000000/nextjs.png" alt={""} /></a>
            <a target="_blank" href="https://www.trpc.io"><Image className="m-3 h-15 animate-pulse" width="50" height="50" src="https://trpc.io/img/logo.svg" alt={""} /></a>
            <a target="_blank" href="https://www.prisma.io"><Image className="m-3 h-15 animate-pulse" width="50" height="50" src="https://img.icons8.com/color/48/000000/prisma-orm.png" alt={""} /></a>
          </ul>
        </div>
        <div className="text-black w-full lg:w-1/2 h-full flex flex-col items-center justify-end lg:bg-inherit bg-white">
          <div className={loading ? "animate-slide h-full w-full flex items-end justify-center" : "h-full w-full flex items-end justify-center"}>
            <Suspense fallback={<Loading />}>
              <Videoplayer url="https://mccleansid.wistia.com/medias/y1bawnaewz" />
            </Suspense>
          </div>
          <p className="font-mono text-md md:text-xl my-4 px-6 text-center">You can find this project live <a target="_blank" href="https://yapchat.site" className="underline">here</a>. And the source code <a target="_blank" href="https://www.github.com/smcclean4/yap" className="underline">here</a>.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Yap