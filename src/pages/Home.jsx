import React from 'react'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import MainBanner from '../components/MainBanner'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <BestSellers/>
    </div>
  )
}

export default Home