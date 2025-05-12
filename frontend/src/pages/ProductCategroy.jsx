import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategroy = () => {
  const {products} = useAppContext()
  const {category}= useParams()

  const searchCategory = categories.find((item)=>item.path.toLocaleLowerCase()===category)
  const filterProducts = products.filter((product)=>product.category.toLocaleLowerCase()===category) 
  return (
    <div className='mt-16'>
      {
        searchCategory && (
          <div className='flex flex-col'>
            <p className='text-2xl font-medium'>{searchCategory.text}</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
          </div> 
      )}                   
      {
        filterProducts.length > 0 ?
        (<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 mt-6'> 
          {
            filterProducts.map((prodcut)=>(
              
                <ProductCard key={prodcut._id} product={prodcut}/>
              
            ))
          }
        </div>)
        :
        (<div className='flex items-center justify-center'>
          <p className='text-2xl font-medium text-primary'>Product not found</p>
        </div>)
      }

    </div>
  )
}

export default ProductCategroy