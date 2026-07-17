import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { Link } from 'react-router-dom'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { HeartOff } from 'lucide-react'

const Wishlist = () => {

    const wishlistItems = useSelector((store)=>store.wishlist.items)

  return (
    <div>
      <Navbar/>
      <PageTransition>
      <div className='min-h-screen bg-gray-50 px-4 py-10'>
        {
            wishlistItems.length > 0 ?
            <div>
              <h1 className="text-4xl font-bold text-center mb-10 tracking-tight">My Wishlist ({wishlistItems.length})</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistItems.map((product)=>(
                  <ProductCard key={product.id} product={product}/>  
                ))}
              </div>
            </div>
              :
            <div className='w-full min-h-[70vh] flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold flex items-center gap-2'><HeartOff size={40} className='text-gray-400'/> Your wishlist is empty</h1>
                <p className='text-gray-500 mt-2'>Save products you love and they'll appear here.</p>
                <Link to='/' className='mt-5 bg-blue-600 text-white hover:bg-blue-700 w-34 font-semibold h-12 items-center justify-center flex rounded-lg scale-95 hover:scale-105 transition-transform duration-300'>Go to Home</Link>
            </div>
        }
      </div>
    </PageTransition>
    <Footer/>
    </div>
  )
}

export default Wishlist