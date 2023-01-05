import React from 'react'

import Hero from '../components/Hero';
import Text from '../components/Text';
import AboutUs from '../components/AboutUs';
import Stats from '../components/Stats';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';


const Home = () => {
  return (
    <div>      
      <Hero />
      <Text />
      <AboutUs />
      <Features />
      <Newsletter />
      <Stats />
      <FAQ />
    </div>
  )
}

export default Home
