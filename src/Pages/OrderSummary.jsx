import { Receipt } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

  const OrderSummary = () => {

    const cartItems = useSelector((store)=>store.cart.items)
    const tax = 5
    
    const totalItems = cartItems.reduce((total,item)=>total + item.quantity, 0)
    const subTotal = cartItems.reduce((total,item)=>total + item.price * item.quantity, 0)
    
    const shippingFee = totalItems>0 ? 10 : 0 

    const calculatedTax = (subTotal * tax)/100
    
    const grandTotal = subTotal + calculatedTax + shippingFee

    return (
      <div>
          {
            cartItems.length > 0 ?
            <div className="w-full lg:w-100 mb-5 max-w-lg rounded-xl border border-gray-200 shadow bg-white p-5 md:p-6">
              <div className='flex items-center justify-center gap-2 mb-6'>
                <Receipt />
                <h1 className='text-xl md:text-2xl font-bold'>Order Summary</h1>
              </div>

              <div className="flex justify-between mb-3">
                <span>Quantity</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between mb-3'>
                <span>Tax ({tax}%)</span>
                <span>${calculatedTax.toFixed(2)}</span>
              </div>
              <div className='flex justify-between mb-3'>
                <span>Shipping</span>
                <span>${shippingFee.toFixed(2)}</span>
              </div>
              <hr className='my-4' />
              <div className='flex justify-between mb-3 font-semibold md:font-bold md:text-lg'>
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
              <Link to='/shipping' className='w-full block text-center bg-blue-600 text-white py-3 rounded-lg active:scale-95 hover:scale-105 mt-6 hover:bg-blue-700 transition'>Proceed to Shipping</Link>
            </div>
            :
            <div className='text-center py-16 px-4 lg:min-h-136'>
              <h1 className='text-3xl md:text-4xl mb-3'>🛒 Your Cart is Empty</h1>
              <h2>Browse our products and find something you'll love!</h2>
              <Link to='/' className='w-full mx-auto block text-center bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition'>Continue Shopping</Link>
            </div>  
          }
      </div>
    )
  }

  export default OrderSummary