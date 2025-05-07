import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategroy = () => {
    const {products} = useAppContext()
    const {category} =useParams()

    const searchCategory = categories.find((item)=>item.path.toLocaleLowerCase()===category)
    const filterProducts = products.filter((product)=>product.category.toLocaleLowerCase()===category)
  return (
    <div className='mt-10'>
        {
            searchCategory && (
             <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
             </div>
        )}
        
        {
            filterProducts.length >0 ?(
                <div className='grid grid-cols-2 sm:grid-cols-2 sm:gap-2 ml-3 pb-2 md:grid-cols-3 gap-4 lg:grid-cols-6  mt-6'> 
                    {filterProducts.map((product)=>(
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </div>
            ):
            (<div className='flex items-center justify-center h-[60vh]'> 
                <p className='text-2xl font-medium text-primary'>Product not found</p>
            </div>)
        }
        
    </div>
  )
}

export default ProductCategroy