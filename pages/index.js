import Head from 'next/head'
import Image from 'next/image'
import Carousel from './components/Home/Carousel'
import Features from './components/Home/Features'
import DealOfTheDay from './components/Home/DealOfTheDay'
import AdBanner from './components/Home/AdBanner'
import TopWeeklyVendors from './components/Home/TopWeeklyVendors'
import ConsumerElectronics from './components/Home/ConsumerElectronics'
import ThinBanner from './components/Home/ThinBanner'

export default function Home() {
 
  return (
    <>
      <Head>
        <title>E-Commerce</title>
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
        <AdBanner/>
        <TopWeeklyVendors/>
        <ConsumerElectronics/>
        <ThinBanner/>
        <h2>Hi Howdy</h2>
        
      </div>
    </>
  )
}
