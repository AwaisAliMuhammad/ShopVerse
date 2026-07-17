import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import ProductCategories from '../Components/ProductCategories'
import FeaturedProducts from '../Components/FeaturedProducts'
import PageTransition from '../Components/PageTransition'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <PageTransition>
          <HeroSection />
          <ProductCategories />
          <FeaturedProducts />
          <Footer/>
        </PageTransition>
    </div>
  )
}

export default Home