import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className=' mt-24 flex flex-col-2 items-center bg-green-200 border-1 border-gray-100 mb-20 gap-2 h-[380px] '>
      <div className='w-[50%]'>
          <img src={assets.mixedFruits} alt='banner' className='w-full hidden md:block' />
          <img src={assets.blog_1} alt='banner' className='w-full md:hidden' />
      </div>
      <div className='  w-[50%] sm:p-5 '>
        <div  className=''>
          <h1 className='text-3xl text-center font-semibold text-primary mb-3 md:text-2xl sm: text-sm  '>Why we are the best choice?</h1>
            {features.map((feature, index)=>(
              <div key={index} className='flex flex-center gap-4 mt-2 px-20'>
                <img src={feature.icon} alt={feature.title} className='md:w-16 w-9 text-sm'/>
                <div>
                    <h3 className='text-lg md:text-xl font-semibold text-sm'>{feature.title}</h3>
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