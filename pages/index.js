import Head from 'next/head'
import Image from 'next/image'
import Carousel from './components/Home/Carousel'
import Features from './components/Home/Features'
import DealOfTheDay from './components/DealOfTheDay'

export default function Home() {
  return (
    <>
      <Head>
      <title>Wolmart - Marketplace HTML5 Template</title>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        
        <meta name="keywords" content="Marketplace ecommerce responsive HTML5 Template" />
        <meta name="description" content="Wolmart is powerful marketplace & ecommerce responsive Html5 Template." />
        <meta name="author" content="D-THEMES" />
      </Head>
        <Carousel/>
      <div className="container">
        <Features/>
        <DealOfTheDay/>
        <h2>Hi Howdy</h2>
      </div>
    </>
  )
}
