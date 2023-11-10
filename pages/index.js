import Head from 'next/head'
import AboutMe from 'pages/about'

export default function Home() {
  return (
    <div id='App'>
      <Head>
        <title>NK portfolio</title>
        <link rel="icon" href="/NK.svg" />
      </Head>
      <AboutMe />
    </div>
  )
}
