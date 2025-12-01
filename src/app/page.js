import CurrencyConverter from '@/components/currency/CurrencyConverter'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import RatesGrid from '@/components/rates/RatesGrid'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Navbar/>
      <Hero/>
      <CurrencyConverter/>
      <RatesGrid/>
      <Footer/>
    </div>
  )
}

export default page