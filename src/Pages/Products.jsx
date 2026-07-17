import React from 'react'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import { useParams, useSearchParams } from 'react-router-dom'
import FeatureProducts from '../Data/FeatureProducts'
import ProductCard from '../Components/ProductCard'
import Footer from '../Components/Footer'

const Products = () => {
  
  const {categoryName} =useParams()
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const filteredProducts = FeatureProducts.filter((product) => {
    const matchesCategory = categoryName
      ? product.category === categoryName
      : true
  
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      <Navbar/>
      <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className='text-center mb-10'>
        <h1 className="text-4xl font-bold mb-2 capitalize">
          {categoryName ? `${categoryName} Products` : filteredProducts.length>0 ? `All Products (${filteredProducts.length})`:''}
        </h1>
          <p className="text-gray-500 mt-2">
            {filteredProducts.length > 0 ? 'Explore our complete collection of premium products.':''}
          </p>
        </div>
        {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>) : 
  (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold">
        😔 No Products Found
      </h2>
      <p className="text-gray-500 mt-2">
        Try another search or category.
      </p>
    </div>
)}
      </div>
    </PageTransition>
    <Footer/>
  </div>
  )
}

export default Products