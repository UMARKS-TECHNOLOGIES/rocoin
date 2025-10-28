import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import OurFeatures from './components/OurFeatures'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background overflow-hidden'>
        <Navbar />
        <HeroSection />
        <AboutUs />
        <HowItWorks />
        <OurFeatures />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home