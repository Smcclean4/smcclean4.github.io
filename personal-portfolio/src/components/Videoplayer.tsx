import React from 'react';
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type UrlType = {
  url: string
}

export const Videoplayer = ({ url }: UrlType) => {
  return (
    <ReactPlayer controls className="m-6" width="100%" style={{ maxWidth: "675px" }} url={`${url}`} />
  );
}
