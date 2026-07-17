import React, { useState } from 'react'
import FeatureProducts from '../Data/FeatureProducts'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Features/CartSlice'
import toast from 'react-hot-toast'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Minus, Plus } from 'lucide-react'

const ProductDetail = () => {

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()    

    const handleAddQuantity =()=>{
      setQuantity((prev)=>prev+1)
    }
    const handleRemoveQuantity =()=>{
      if(quantity > 1){
      setQuantity((prev)=>prev-1)
    }
  }
  
    const {id} = useParams()
    const productID = Number(id)

    const selectedProduct = FeatureProducts.find((item)=>item.id=== productID)

    if (!selectedProduct) {
      return <PageTransition>
              <div className='w-full min-h-screen bg-gray-50 flex flex-col gap-10 items-center justify-center'>
                <h1 className='text-3xl md:text-5xl text-red-600'>Product not found</h1>
                <Link to='/'><button className='text-2xl bg-blue-500 text-white w-full sm:w-40 h-14 rounded'>Home</button></Link>
              </div>
            </PageTransition>
    } 
    const handleAddedToCart=()=>{
      const newProduct = {...selectedProduct,quantity}
      dispatch(addToCart(newProduct))
      toast.success('Added to cart')
      navigate('/cart')
    }
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar/>
      <PageTransition>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 p-6 lg:p-10'>
        <div className='w-full lg:w-2/5 border rounded-xl overflow-hidden flex items-center'>
          <img loading='lazy' src={selectedProduct.image} alt={selectedProduct.title} className='w-full max-h-72 sm:max-h-96 lg:max-h-112.5 object-contain mx-auto transition-transform duration-500 hover:scale-110' />
        </div>
        <div className='w-full lg:w-3/5 justify-center px-2 sm:px-4 lg:px-10 flex flex-col gap-5'>
          <h1 className='text-2xl md:text-3xl font-bold'>{selectedProduct.title}</h1>
          <h2 className='text-yellow-500 font-medium'>{selectedProduct.rating}</h2>
          <h3 className="font-semibold text-lg">Description</h3>
          <p className="text-gray-600 leading-7">{selectedProduct.detail}</p>
          <h3 className='font-bold text-2xl'>${Number(selectedProduct.price).toFixed(2)}</h3>
          <p className="text-green-600 font-medium">✓ In Stock</p>
          <div className='flex gap-3 flex-wrap items-center'>
            <h1 className='text-lg'>Quantity</h1>
            <button onClick={handleRemoveQuantity} className='cursor-pointer shadow hover:shadow-lg transition-transform duration-300 text-3xl bg-gray-200 w-10 h-10 flex items-center justify-center rounded active:scale-95 hover:scale-105'><Minus/></button>
            <h2 className='text-xl font-semibold w-8 text-center'>{quantity}</h2>
            <button onClick={handleAddQuantity} className='cursor-pointer shadow hover:shadow-lg transition-transform duration-300 text-3xl bg-gray-200 w-10 h-10 flex items-center justify-center rounded active:scale-95 hover:scale-105'><Plus/></button>
          </div>
          <button onClick={handleAddedToCart} className='hover:scale-105 mt-5 cursor-pointer shadow transition-transform duration-300 active:scale-90 hover:shadow-xl hover:bg-blue-700 bg-blue-600 w-full lg:w-fit px-8 h-14 rounded-lg items-center justify-center text-white'>Add to Cart</button>
        </div>
      </div>
    </PageTransition>
    <Footer/>
    </div>
  )
}

export default ProductDetail