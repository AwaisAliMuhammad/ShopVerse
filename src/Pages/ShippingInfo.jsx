import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setShippingAllData } from '../Features/ShippingSlice'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ShippingInfo = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [shippingData, setShippingData] = useState({
        email:'',
        mobile:'',
        firstName:'',
        lastName:'',
        country:'',
        city:'',
        address:'',
        address2:'',
        postalCode:'',
        deliveryInstructions:''
    })
    const formSubmitHandler =(e)=>{
        e.preventDefault()
        dispatch(setShippingAllData(shippingData))
        navigate('/payment')
    }

  return (
    <PageTransition>
        <Navbar/>
        <div className='min-h-screen bg-gray-50 px-4 md:px-6 py-8 md:py-10'>
            <div className="text-center mb-12">
                <h1 className='text-3xl md:text-4xl font-bold'>Shipping Information</h1>
                <p className="text-gray-500 mt-2">Please enter your delivery details below.</p>
            </div>
            <form onSubmit={formSubmitHandler} className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-5 md:p-8 space-y-8'>
                <div className='space-y-4'>
                    <h1 className='text-xl md:text-2xl font-semibold md:font-bold'>Contact Information</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input autoComplete='email' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.email} onChange={(e)=>setShippingData({...shippingData, email: e.target.value})} type="email" required placeholder='Email' />
                        <input autoComplete='tel' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.mobile} onChange={(e)=>setShippingData({...shippingData, mobile: e.target.value})} type="tel" inputMode='tel' required placeholder='Mobile Number' />
                    </div>
                </div>
                <hr className="border-gray-200" />
                <div className='space-y-4'>
                    <h1 className='text-xl md:text-2xl font-semibold md:font-bold'>Delivery Address</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input autoComplete='given-name'  className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.firstName} onChange={(e)=>setShippingData({...shippingData, firstName: e.target.value})} type="text" required placeholder='First Name' />
                        <input autoComplete='family-name' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.lastName} onChange={(e)=>setShippingData({...shippingData, lastName: e.target.value})} type="text" required placeholder='Last Name' />
                        <input autoComplete='country-name' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.country} onChange={(e)=>setShippingData({...shippingData, country: e.target.value})} type="text" required placeholder='Country' />
                        <input className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.city} onChange={(e)=>setShippingData({...shippingData, city: e.target.value})} type="text" required placeholder='City' />
                    </div>
                    <div className='space-y-4 mt-4'>
                        <input autoComplete='address-level1' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.address} onChange={(e)=>setShippingData({...shippingData, address: e.target.value})} type="text" required placeholder='Address' />
                        <input autoComplete='street-address' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.address2} onChange={(e)=>setShippingData({...shippingData, address2: e.target.value})} type="text" placeholder='Street Address (Optional)' />
                        <input autoComplete='postal-code' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition' value={shippingData.postalCode} onChange={(e)=>setShippingData({...shippingData, postalCode: e.target.value})} type="text" inputMode='numeric' placeholder='Postal Code (Optional)' />
                    </div>
                </div>
                <hr className="border-gray-200" />
                <div className='space-y-4'>
                    <h1 className='text-xl md:text-2xl font-semibold md:font-bold'>Additional Information</h1>
                    <textarea className='w-full border border-gray-300 rounded-lg px-4 py-3 min-h-28 md:min-h-32 resize-none outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500' value={shippingData.deliveryInstructions} onChange={(e)=>setShippingData({...shippingData, deliveryInstructions: e.target.value})} placeholder='Delivery Instructions (Optional)'></textarea>
                </div>
                <button className='w-full bg-blue-600 text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 active:scale-95 hover:scale-105 cursor-pointer hover:shadow-lg' type='submit'>Proceed to Payment</button>
            </form>
        </div>
        <Footer/>
    </PageTransition>
  )
}

export default ShippingInfo