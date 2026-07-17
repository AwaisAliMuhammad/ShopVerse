import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToWishlist, removeFromWishlist } from '../Features/WishlistSlice'
import { addToCart } from '../Features/CartSlice'
import toast from 'react-hot-toast'

const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const wishlistItems = useSelector((store)=>store.wishlist.items)
  
  const isWishlisted = wishlistItems.find((item)=>item.id === product.id)

  const wishlistHandler=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id))
      toast.success('Removed from wishlist')
    } else {
      dispatch(addToWishlist(product))
      toast.success('Added to wishlist ❤️')
    }
  }
  const cartHandler=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(product))
    toast.success('Added to cart successfully!')
  }

  
  return (
    <div className='px-2'>
       <NavLink to={`/products/${product.id}`}>
       <div className='w-full max-w-sm mx-auto min-h-85 rounded-xl md:mb-4  border bg-white border-gray-200 hover:shadow-xl shadow-md hover:-translate-y-2 transition duration-300'>
            <button onClick={wishlistHandler} className={`transition-all duration-300 hover:scale-120 hover:text-red-500 cursor-pointer p-2`}><Heart fill={isWishlisted ?'red':'none'} color={isWishlisted ? 'red':'currentColor'}  /></button>
            <div className="h-48 flex items-center justify-center">
                <img src={product.image} className='w-40 h-40 object-contain flex items-center justify-center' alt={product.title} />
            </div>
            <div className='px-5 flex flex-col grow gap-1 mt-4'>
                <h1 className='font-semibold line-clamp-2 min-h-12'>{product.title}</h1>
                <h2 className='text-yellow-500 font-medium'>{product.rating}</h2>
            </div>
            <div className='flex justify-between px-5 mb-2 mt-4 items-center'>
                <h3 className='font-bold text-lg md:text-xl'>${Number(product.price).toFixed(2)}</h3>
                <button onClick={cartHandler} className='rounded border border-gray-300 flex items-center justify-center w-8 h-8 cursor-pointer shadow hover:shadow-lg hover:shadow-gray-400 hover:bg-black hover:text-white transition active:scale-95 hover:-rotate-8 duration-300'><ShoppingCart size={20} /></button>
            </div>
        </div>
       </NavLink>
    </div>
  )
}

export default ProductCard