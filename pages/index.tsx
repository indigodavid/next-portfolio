import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>David Vera&apos;s Next Portfolio</title>
        <meta name="description" content="Software Developer portfolio using React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-2xl text-blue-500">Portfolio</div>
    </div>
  )
}
