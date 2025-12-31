import React from 'react'
import Hero from '../components/Hero'
import LatestProducts from '../components/LatestProducts'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestProducts/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home