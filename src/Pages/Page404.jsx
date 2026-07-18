import { SearchX } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 transition-all duration-300">
        <h1 className="text-7xl md:text-8xl font-bold text-blue-600">404</h1>
        <h2 className="flex items-center gap-2 text-3xl font-semibold">
            <SearchX size={30} className='text-blue-600'/>
            Oops! Page Not Found
        </h2>
        <p className="text-gray-500 text-center max-w-md">
        The page you are looking for doesn't exist or may have been moved.
        </p> 

    <Link to="/" className="bg-blue-600 text-white px-8 py-3 active:scale-95 hover:scale-105 rounded-lg hover:bg-blue-700 transition">
        Continue Shopping
    </Link>
</div>
  )
}

export default Page404