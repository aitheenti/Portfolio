import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation/Navigation'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NK portfolio</title>
        <link rel="icon" href="/NK.svg" />
      </Head>
      <Navigation />

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          My profile
        </p>
      </main>

      <Footer />
    </div>
  )
}
