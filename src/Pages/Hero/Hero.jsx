import React from 'react'
import HeroSection from '../../Components/Hero-Section/HeroSection'
import Testimonial from '../../Components/Testimonial-Section/Testimonial'
import ProductListSection from '../../Components/ProductList-Section/ProductListSection'
import NavBar from '../../Components/NavBar/NavBar'

const Hero = () => {
  return (
    <main>
      <HeroSection/>
      <Testimonial/>
      <ProductListSection/>
    </main>
  )
}

export default Hero
