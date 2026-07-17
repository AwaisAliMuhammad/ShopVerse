import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../Features/CartSlice'
import { Minus, Plus, Trash } from 'lucide-react'
import OrderSummary from './OrderSummary'
import toast from 'react-hot-toast'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()

    const removeItem=(id)=>{
        dispatch(removeFromCart(id))
        toast.success('Item removed successfully')
    }
    const increaseItemQuantity=(id)=>{
      dispatch(increaseQuantity(id))
    }
    const decreaseItemQuantity=(id)=>{
      dispatch(decreaseQuantity(id))
    }

  return (
    <div>
      <Navbar/>
      <PageTransition>
      <div className='flex flex-col gap-10 bg-gray-50 py-5 items-center justify-center px-4 md:px-6'>
        <div>
          {cartItems.length > 0 ?
          <h1 className='font-bold text-3xl md:text-4xl'>Your Cart</h1>:''
          }
        </div>
        {cartItems.map((elem)=>(
          <div key={elem.id} className='flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-4xl w-full p-6 gap-5'>
            <div className='w-24 h-24 shadow md:w-30 md:h-30 bg-gray-100 rounded flex items-center justify-center shrink-0'>
              <img src={elem.image} className='w-22 h-22 md:w-24 md:h-24 object-contain' alt={elem.title} />
            </div>
            <div className='flex-1 md:px-8 text-center md:text-left'>
              <h1 className='text-lg font-medium line-clamp-2'>{elem.title}</h1>
              <h2 className='text-lg font-semibold text-blue-600'>${Number(elem.price).toFixed(2)}</h2>
            </div>
            <div className='flex gap-3 w-full md:w-36 items-center justify-center'>
              <button onClick={()=>decreaseItemQuantity(elem.id)} className='cursor-pointer shadow hover:shadow-lg transition-transform duration-300 text-3xl bg-gray-200 w-8 h-8 flex items-center justify-center rounded active:scale-95 hover:scale-105'><Minus/></button>
              <h3 className='text-xl w-6 text-center'>{elem.quantity}</h3>
              <button onClick={()=>increaseItemQuantity(elem.id)} className='cursor-pointer shadow hover:shadow-lg transition-transform duration-300 text-3xl bg-gray-200 w-8 h-8 flex items-center justify-center rounded active:scale-95 hover:scale-105'><Plus/></button>
            </div>
            <div className='w-full md:w-12 flex justify-center md:justify-end'>
              <button onClick={()=>removeItem(elem.id)} className='text-red-500 hover:text-red-700 hover:scale-105 transition cursor-pointer'><Trash /></button>
            </div>
          </div>
        ))}
        <OrderSummary />
      </div>
    </PageTransition>
    <Footer/>
    </div>
  )
}

export default Cart