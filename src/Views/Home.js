import React from 'react'
import {
  Header,
  Dashboard,
  Web3Name,
  OurProject,
  HowToMint,
  Art,
  FAQ,
  Footer
} from '../Components'
import { ScrollToTopBtn } from '../Components/Gadgets'

export default function Home() {
  return (
    <>
      <div className='home'>
        <Header />
        <Dashboard />
      </div>
      <OurProject />
      <Web3Name />
      <HowToMint />
      <Art />
      <FAQ />
      <Footer />
      <ScrollToTopBtn />
    </>
  )
}
