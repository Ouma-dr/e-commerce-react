import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Links from '../components/Links'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Services from '../components/Services'
import Sliderpage from '../components/Sliderpage'

const Home = () => {
  return (
    <div>
       <Navbar />
       <Links />
       <Sliderpage />
       <Services /> 
       <Categories />
       <Products />
       <Newsletter />
       <Footer />
    </div>
  )
}

export default Home