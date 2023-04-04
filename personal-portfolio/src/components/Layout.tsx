import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>SLM Portfolio</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}