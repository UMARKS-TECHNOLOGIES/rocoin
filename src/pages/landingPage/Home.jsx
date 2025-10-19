import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'

const Home = () => {
  return (
      <div className='min-h-screen bg-background bg-gradient-to-l from-[#365dd1]/90 to-[#ffffff]'>
        <Navbar />
        <HeroSection />
        <AboutUs />
    </div>
  )
}

export default Home