import Head from 'next/head'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <div>
      <Head>
        <title>SLM Portfolio</title>
        <meta name="description" content="Personal portfolio for SLM." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="https://kit.fontawesome.com/42005de702.js" crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
    </div>
  )
}