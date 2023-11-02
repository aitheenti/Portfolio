import Head from 'next/head'
import Navigation from 'pages/Navigation/Navigation'
import Footer from "pages/Footer/Footer";
import AboutMe from 'pages/about'
import ContactForm from './contact';
import Card from '@components/Card';

export default function Home() {
  return (
    <div id='App' className='flex-col space-between'>
      <Head>
        <title>NK portfolio</title>
        <link rel="icon" href="/NK.svg" />
      </Head>

      <Navigation />
      <Card />
      {/* <AboutMe />
      <ContactForm /> */}
      <Footer />
    </div>
  )
}
