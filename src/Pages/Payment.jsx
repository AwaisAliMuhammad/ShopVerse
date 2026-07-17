import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../Features/CartSlice'
import { placeOrder } from '../Features/OrderSlice'
import { BanknoteCheck, CreditCard } from 'lucide-react'
import toast from 'react-hot-toast'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Payment = () => {

    const [paymentMethod, setPaymentMethod] = useState('card')
    const dispatch = useDispatch()
    const shipping = useSelector((store)=>store.shipping)
    const cartItems = useSelector((store)=>store.cart)
    const authorization = useSelector((store)=>store.authorization)
    const navigate = useNavigate()
    
    const subTotal = cartItems.items.reduce((total,item)=>total + item.price * item.quantity,0)
    const tax = subTotal * 0.05
    const shippingFee = cartItems.items.length > 0 ? 10 : 0
    const totalAmount = subTotal + tax + shippingFee
    const [paymentData, setPaymentData] = useState({
      cardNumber:'',
      cardHolderName:'',
      expiryDate:'',
      cvv:''
    })

    const orderData = {
      id: Date.now(),
      userEmail:authorization.user.email,
      items: cartItems.items,
      shipping,
      paymentMethod,
      paymentData: paymentMethod === 'card' ? paymentData:null,
      totalAmount,
      orderDate: new Date().toLocaleString()
    }

    const paymentSubmitHandler=(e)=>{
      e.preventDefault()
      dispatch(placeOrder(orderData))
      toast.success('Order placed successfully')
      dispatch(clearCart())
      navigate('/ordersuccess')
    }
    const expiryDateHandler=(e)=>{
      const value = e.target.value.replace('/','')
      const firstPart = value.slice(0,2)
      const secondPart = value.slice(2,4)
      const formattedValue = firstPart + '/' + secondPart
      if(firstPart.length === 2){
        if(firstPart > 12 || firstPart === '00') return
      }
      if(value.length > 2){
        setPaymentData({...paymentData,expiryDate: formattedValue})
      }
      else{
        setPaymentData({...paymentData,expiryDate: value})
      }
    }
    const cardNumberHandler=(e)=>{
      const value = e.target.value.replaceAll(' ','')
      const firstPart = value.slice(0,4)
      const secondPart = value.slice(4,8)
      const thirdPart = value.slice(8,12)
      const fourthPart = value.slice(12,16)
      const formattedValue = (firstPart + ' ' + secondPart + ' ' + thirdPart + ' ' + fourthPart).trim()
      if(value.length>4){
        setPaymentData({...paymentData, cardNumber:formattedValue})
      }
      else{
        setPaymentData({...paymentData, cardNumber:value})
      }
    }

    useEffect(()=>{
      if(shipping.email===''){
        navigate('/shipping')
      }
      if(cartItems.items.length === 0){
        navigate('/cart')
      }
    },[shipping.email, navigate])

  return (
    <PageTransition>
    <Navbar/>
    <div className='text-center bg-gray-50 min-h-screen py-8 md:py-4'>
      <div className='flex items-center justify-center py-3'>
        <form onSubmit={paymentSubmitHandler} className='w-full lg:w-140 mx-4 sm:mx-6 space-y-1 mb-5 max-w-lg gap-5 flex flex-col rounded-xl border border-gray-200 shadow bg-white p-5 sm:p-6'>
          <h2 className='text-xl md:text-2xl font-bold'>Payment Details</h2>
          <label className={`flex items-center gap-3 shadow border rounded-lg p-4 ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50':'border-gray-100 bg-white'} cursor-pointer outline-none hover:border-blue-500 transition`}>
            <input value='card' checked={paymentMethod === 'card'} onChange={(e)=>setPaymentMethod(e.target.value)} type="radio" name='paymentMethod' /><CreditCard/> Card Payment
          </label>
        {paymentMethod === 'card' &&(
          <div>
            <div className='flex flex-col gap-4'>
              <input className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200' required value={paymentData.cardNumber} onChange={cardNumberHandler} type="text" inputMode='numeric' maxLength={19} placeholder='1234 5678 9012 3456' />
              <input className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200' required value={paymentData.cardHolderName} onChange={(e)=>setPaymentData({...paymentData, cardHolderName:e.target.value})} type="text" placeholder='Card Holder Name' /> 
            </div>
            <div className='md:flex md:gap-5 md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
              <input className='w-1/2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200' required value={paymentData.cvv} onChange={(e)=>setPaymentData({...paymentData, cvv: e.target.value})} type="text" inputMode='numeric' maxLength={3} placeholder='CVV' />
              <input className='w-1/2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200' required value={paymentData.expiryDate} onChange={expiryDateHandler} type="text" maxLength={5} placeholder='MM/YY' />
            </div>
          </div>
      )}

        <label className={`flex items-center gap-3 rounded-lg p-4 text-sm sm:text-base ${paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50':'border-gray-100 bg-white'} cursor-pointer border border-gray-100 shadow bg-blue-50 hover:border-blue-500 transition`}>
          <input value='cod' checked={paymentMethod === 'cod'} onChange={(e)=>setPaymentMethod(e.target.value)} type="radio" name='paymentMethod' /><BanknoteCheck /> Cash on Delivery
        </label>
        {paymentMethod === 'cod' &&(
          <h1 className='bg-green-50 border border-green-300 rounded-lg p-4 text-green-700'>🚚 You will pay when your order is delivered.</h1>
      )}
        <div className="flex justify-between items-center font-semibold border-t border-gray-300 pt-3 text-base sm:text-lg">
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
          <button className='w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 active:scale-95 hover:scale-105 cursor-pointer hover:shadow-lg' type='submit'>Place Order</button>
          <p className="text-xs text-gray-500 text-center">
            🔒 Your payment information is securely processed.
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </PageTransition>
  )
}

export default Payment