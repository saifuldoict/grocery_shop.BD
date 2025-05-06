import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSellers = () => {
  const {products} = useAppContext()
  return (
    <div className='mt-16 '>
        <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
        
        <div className='grid grid-cols-2 sm:grid-cols-2 sm:gap-2 ml-3 pb-2 md:grid-cols-3 gap-4 lg:grid-cols-6  mt-6'>
          {products.filter((product)=>product.inStock).slice(0,5).map((product,index)=>(
            <ProductCard key={(index)} product={product}/>
          ))}
 
        </div>
    </div>
  )
}

export default BestSellers