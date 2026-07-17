import React from 'react'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'
import { Banknote, CreditCard, PackageX } from 'lucide-react'
import { Link } from 'react-router-dom'

const MyOrders = () => {
    const recentOrder = useSelector((store)=>store.order.orders)
    const authorization = useSelector((store)=>store.authorization)
    const myOrders = recentOrder.filter((order)=>order.userEmail === authorization.user.email)

  return (
    <PageTransition>
        <Navbar/>
            <div>
                <div className='bg-slate-50 min-h-screen'>
                {myOrders.length === 0 ?
                    <div className='text-center max-w-7xl mx-auto px-6 py-20 lg:min-h-136 flex flex-col items-center'>
                        <h1 className='text-4xl mb-3 flex items-center gap-2 text-red-600'><PackageX size={34} color='red'/>Oops! No Orders Found</h1>
                        <h2>Browse our products and find something you'll love!</h2>
                        <Link to='/' className='md:w-60 block text-center bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition'>Continue Shopping</Link>
                    </div>:
                    <div className='px-6 py-4'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-medium text-3xl'>My Orders</h1>
                            <p className='text-gray-500 font-medium'>View and track all your orders</p>
                        </div>
                        {myOrders.map((order)=>(
                        <div key={order.id} className='bg-white rounded-lg w-full min-h-54 mt-4 mb-2 shadow px-6 py-8'>
                            <div className='flex sm:flex-col md:flex-row gap-8 justify-between'>
                                <div className='flex flex-col gap-8 w-full'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-2'>
                                            <h1 className='text-xl font-medium'>Order ID:</h1>
                                            <h2 className='text-xl font-medium'>#{order.id}</h2>
                                        </div>
                                        <h1 className='text-gray-500'>{order.orderDate}</h1>
                                    </div>
                                    <h2 className='font-bold flex items-center justify-center text-green-700 bg-green-50 w-26 rounded-2xl h-7 border border-green-300'>Processing</h2>
                                </div>
                                <div className='flex flex-col gap-3 w-full'>
                                    {order.items.map((item)=>(
                                        <div key={item.id} className='flex items-center gap-6 rounded-lg bg-gray-50 shadow md:min-w-100 md:h-22 px-2'>
                                            <img src={item.image} className='w-18 h-18 object-contain shadow bg-gray-100 rounded-lg p-2' alt={item.title} />
                                            <div>
                                                <h1 className='font-medium text-lg truncate'>{item.title}</h1>
                                                <div className='flex gap-4'>
                                                    <h1>Qty: {item.quantity}</h1>x
                                                    <h2>${item.price}.00</h2>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='w-full'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='font-medium text-gray-500'>Payment Method</h1>
                                        {order.paymentMethod === 'cod'?<h1 className='text-lg font-medium flex items-center gap-2'><Banknote/>Cash on Delivery</h1>:<h1 className='text-lg font-medium flex items-center gap-2'><CreditCard/>Payment with Card</h1>}
                                    </div>
                                    <hr className='text-gray-200 mt-5 mb-5'/>
                                    <div className='flex justify-between'>
                                        <h1 className='text-lg font-bold'>Total Amount</h1>
                                        <h2 className='text-lg text-green-700 font-semibold'>${order.totalAmount.toFixed(2)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>}
                <div>
            </div>
        </div>
    </div>
<Footer/>
</PageTransition>
)}

export default MyOrders