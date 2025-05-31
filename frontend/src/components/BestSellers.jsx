import React from 'react'
import ProductCard from './ProductCard.jsx'
import { useAppContext } from '../context/AppContext'

const BestSellers = () => {
  const {products} = useAppContext()
  console.log(products)
  return (
    <div className='mt-16 '>
        <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 mt-6  gap-6'>
          {products.filter((product)=>product.inStock).slice(0,6).map((product,index)=>(
            <ProductCard key={(index)} product={product}/>
          ))}
 
        </div>
    </div>
  )
}

export default BestSellers