import React from 'react'
import FeatureProducts from '../Data/FeatureProducts'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'

const FeaturedProducts = () => {

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || ''

  const filteredProducts = FeatureProducts.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          filteredProducts.length > 0 ?
          filteredProducts.map((product)=>(
            <ProductCard key={product.id} product={product} />          
          )):
          <div className='flex flex-col justify-center items-center w-full py-20'>
            <h1 className='text-3xl font-bold'>😔 No products found</h1>
            <p className='text-gray-500 mt-2'>Try searching with a different keyword.</p>
          </div>
        }
    </div>
  )
}

export default FeaturedProducts