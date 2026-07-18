import { Tags } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Deals = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 transition-all duration-300">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-600 flex items-center gap-3">Today's Deals<Tags size={48}/></h1>
        <h2 className="flex items-center gap-2 text-xl md:text-3xl font-semibold">
            No deals are available at the moment.
        </h2>
        <p className="text-gray-500 text-center text-sm max-w-md px-2">
            We're preparing exciting offers for you. Check back later to discover our latest discounts and special promotions.
        </p> 
        <Link to="/" className="bg-blue-600 text-white px-8 py-3 active:scale-95 hover:scale-105 rounded-lg hover:bg-blue-700 transition">
            Continue Shopping
        </Link>
    </div>
  )
}

export default Deals