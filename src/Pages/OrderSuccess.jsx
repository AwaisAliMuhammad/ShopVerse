import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetOrder } from '../Features/OrderSlice'
import jsPDF from 'jspdf'
import { Check } from 'lucide-react'
import PageTransition from '../Components/PageTransition'

const OrderSuccess = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {orderPlaced, orders} = useSelector((store)=>store.order)
    const latestOrder = orders.at(-1)

    const returnHomeHandler=()=>{
      dispatch(resetOrder())
      navigate('/')
    }

    useEffect(()=>{
      if(!orderPlaced){
        navigate('/')
      }
    },[navigate,orderPlaced])

    if(!latestOrder) return null

    const downloadReceipt=()=>{
      
      const doc = new jsPDF()
      const PAGE_HEIGHT = 270
      const START_Y = 20

      doc.setFontSize(16)
      doc.text('Order Receipt',20,20)

      doc.setFontSize(10)
      doc.text(`Order ID: ${latestOrder.id}`,20,35)
      doc.text(`Order Date: ${latestOrder.orderDate}`,20,45)

      doc.setFontSize(16)
      doc.text('Customer Information',20,65)

      doc.setFontSize(10)
      doc.text(`Full Name: ${latestOrder.shipping.firstName} ${latestOrder.shipping.lastName}`,20,80)
      doc.text(`Email: ${latestOrder.shipping.email}`,20,90)
      doc.text(`Phone: ${latestOrder.shipping.mobile}`,20,100)

      doc.setFontSize(16)
      doc.text('Shipping Address',20,120)

      doc.setFontSize(10)
      doc.text(`Country: ${latestOrder.shipping.country}`,20,135)
      doc.text(`City: ${latestOrder.shipping.city}`,20,145)
      doc.text(`Address: ${latestOrder.shipping.address}`,20,155)

      doc.setFontSize(16)
      doc.text('Payment Method',20,175)

      doc.setFontSize(10)
      doc.text(`${latestOrder.paymentMethod==='cod'?'Cash on Delivery':'Debit / Credit Card'}`,20,190)

      doc.setFontSize(16)
      doc.text('Products',20,210)

      doc.setFontSize(10)

      let y = 225
      latestOrder.items.forEach((item) => {
        doc.text(`Title: ${item.title}`, 20, y)
        y += 10

        doc.text(`Quantity: ${item.quantity}`, 20, y)
        y += 10

        doc.text(`Price: $${Number(item.price).toFixed(2)}`, 20, y)
        y += 10

        doc.text(`Subtotal: $${(item.price * item.quantity).toFixed(2)}`,20, y)
        y += 15

        if(y > PAGE_HEIGHT){
          doc.addPage()
          y= START_Y
        }
      })

      if(y > PAGE_HEIGHT){
        doc.addPage()
        y= START_Y
      }

      y += 10
      doc.text(`Grand Total $${Number(latestOrder.totalAmount).toFixed(2)}`,20,y)
      y += 15
      doc.text('Thank you for shopping with us!',20,y)
      y += 10
      doc.text('Visit Again',20,y)
      
      doc.save(`Order-${latestOrder.id}.pdf`)
    }

  return (
    <PageTransition>
      <div className='min-h-screen bg-gray-50 py-10 px-4'>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-18 h-18 mb-2 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <span><Check color='green' size={50}/></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Order Placed Successfully!</h1>
            <p className="text-gray-500 mt-3">
              Thank you for shopping with us.
              Your order has been received and is being processed.
            </p>
          </div>
          <div className="border rounded-xl p-6 space-y-3">
            <div className="flex justify-between">
              <span className='text-gray-500'>Order ID</span>
              <span className='font-medium'>{latestOrder.id}</span>
            </div>
            <div className="flex justify-between">
              <span className='text-gray-500'>Order Date</span>
              <span className='font-medium'>{latestOrder.orderDate}</span>
            </div>
            <div className="flex justify-between">
              <span className='text-gray-500'>Payment</span>
              <span className='font-medium'>{latestOrder.paymentMethod==='cod'?'Cash on Delivery':'Credit / Debit Card'}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Total</span>
              <span className='text-xl font-bold text-green-600'>${latestOrder.totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <div className='border rounded-xl p-6 mt-6 space-y-3'>
            <h2 className="text-xl font-bold mb-4">Customer Information</h2>
            <div className='flex justify-between'>
              <span>Name</span>
              <span>{latestOrder.shipping.firstName} {latestOrder.shipping.lastName}</span>
            </div>
            <div className='flex justify-between'>
              <span>Email</span>
              <span>{latestOrder.shipping.email}</span>
            </div>
            <div className='flex justify-between'>
              <span>Phone</span>
              <span>{latestOrder.shipping.mobile}</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Products Ordered</h2>  
          {latestOrder.items.map((item)=>(
            <div key={item.id} className='border rounded-xl p-4 flex gap-4 mt-6'>
              <div>
                <img className='w-24 h-24 object-contain rounded-lg bg-gray-100 p-2' src={item.image} alt={item.title} />
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="font-medium">${Number(item.price).toFixed(2)}</p>
                <p className="font-semibold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={downloadReceipt} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-lg transition active:scale-95 outline-none hover:scale-102 cursor-pointer">Download Receipt</button>
            <button onClick={returnHomeHandler} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold rounded-lg transition active:scale-95 outline-none hover:scale-102 cursor-pointer">Continue Shopping</button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
  
export default OrderSuccess