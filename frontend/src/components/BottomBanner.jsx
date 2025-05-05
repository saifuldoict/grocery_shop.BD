import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className=' mt-24 flex flex-col-2 items-center bg-green-200 border-1 border-gray-100 mb-20 gap-2  '>
      <div className='w-[50%]'>
          <img src={assets.mixedFruits} alt='banner' className='w-full hidden md:block' />
          <img src={assets.blog_1} alt='banner' className='w-full md:hidden' />
      </div>
      <div className='  w-[50%]'>
        <div>
          <h1 className='text-2xl text-center md:text-3xl font-semibold text-primary mb-6'>Why we are the best choice?</h1>
            {features.map((feature, index)=>(
              <div key={index} className='flex flex-center gap-4 mt-2'>
                <img src={feature.icon} alt={feature.title} className='md:w-11 w-9'/>
                <div>
                    <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                    <p className='text-gray-500 text-xs md:text-sm font-semibold'>{feature.description}</p> 
                    </div>
              </div>
            ))}
        </div>
      </div>
      </div>

  )
}

export default BottomBanner