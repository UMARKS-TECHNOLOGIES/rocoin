import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import OurFeatures from './components/OurFeatures'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
        }
      }
    }}
      initial="hidden"
      animate="show"
      className='min-h-screen bg-background overflow-hidden font-poppins'>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <HowItWorks />
      <OurFeatures />
      <Testimonials />
      <Footer />
    </motion.div>
  )
}

export default Home