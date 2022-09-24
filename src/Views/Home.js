import React from 'react'
import { Header, Dashboard, Web3Name, OurProject, HowToMint } from '../Components'

export default function Home() {
  return (
    <>
      <div className='home'>
        <Header />
        <Dashboard />
      </div>
      <Web3Name />
      <OurProject />
      <HowToMint />
    </>
  )
}
