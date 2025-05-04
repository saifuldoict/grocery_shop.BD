import React from 'react'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import MainBanner from '../components/MainBanner'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <BestSellers/>
      <BottomBanner/>
      <NewsLetter/>
      
    </div>
  )
}

export default Home