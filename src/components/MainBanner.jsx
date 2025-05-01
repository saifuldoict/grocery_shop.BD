import React from 'react'
import { assets } from '../assets/assets'

const MainBanner = () => {
  return (
    <div className='relative'>
        <img src={assets.banner_img} alt='banner' className='w-full hidden md:block'/>
        <img src={assets.bg1} alt='banner' className='w-full md:hidden' />
    </div>
  )
}

export default MainBanner