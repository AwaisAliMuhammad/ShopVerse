import { Copyright, Headset, Package, Shield, Truck } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import visaPayment from '../assets/visaPayment.png'
import masterPayment from '../assets/masterPayment.png'
import applePay from '../assets/applePay.png'
import googlePay from '../assets/googlePay.png'
import easypaisaPay from '../assets/easypaisaPay.png'
import facebookLogo from '../assets/facebookLogo.png'
import instagramLogo from '../assets/instagramLogo.png'
import xLogo from '../assets/xLogo.png'
import linkedinLogo from '../assets/linkedinLogo.png'
import toast from 'react-hot-toast'

const Footer = () => {

    const quickLinks = [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Products',
            path:'/products'
        },
        {
            name:'Categories',
            path:'/categories'
        },
        {
            name:'Deals',
            path:'/deals'
        },
        {
            name:'New Arrivals',
            path:'/newarrivals'
        },
        {
            name:'Best Sellers',
            path:'/bestsellers'
        }
    ]
    const customerServiceLinks = [
        {
            name:'Contact Us',
            path:'/contactus'
        },
        {
            name:'FAQs',
            path:'/faq'
        },
        {
            name:'Returns & Refunds',
            path:'/returnsrefunds'
        },
        {
            name:'Shipping Policy',
            path:'/shippingpolicy'
        },
        {
            name:'Track Your Order',
            path:'/trackyourorder'
        }
    ]
    const companyLinks = [
        {
            name:'About Us',
            path:'/aboutus'
        },
        {
            name:'Careers',
            path:'/careers'
        },
        {
            name:'Privacy Policy',
            path:'/privacypolicy'
        },
        {
            name:'Terms & Conditions',
            path:'/termsconditions'
        },
        {
            name:'Our Story',
            path:'/ourstory'
        }
    ]

    const socialLinks = [
        {
            image:facebookLogo,
            alt:'Facebook'
        },
        {
            image:instagramLogo,
            alt:'Instagram'
        },
        {
            image:xLogo,
            alt:'X'
        },
        {
            image:linkedinLogo,
            alt:'LinkedIn'
        }
    ]
    const featureCards = [
        {
            icon:<Shield size={24} />,
            title:'Secure Payments',
            detail:'100% secure & trusted'
        },
        {
            icon:<Truck size={24} />,
            title:'Fast Delivery',
            detail:'Get your order quickly'
        },
        {
            icon:<Package size={24} />,
            title:'Easy Returns',
            detail:'Hassle free returns'
        },
        {
            icon:<Headset size={24} />,
            title:'24/7 Support',
            detail:`We're here to help`
        }
    ]
    const paymentIcons = [
        {
            icon:visaPayment,
            alt:'Visa'
        },
        {
            icon:masterPayment,
            alt:'Master'
        },
        {
            icon:applePay,
            alt:'Apple'
        },
        {
            icon:googlePay,
            alt:'Google'
        },
        {
            icon:easypaisaPay,
            alt:'EasyPaisa'
        }
    ]

    const [email, setEmail] = useState('')

    const formSubmitHandler=(e)=>{
        e.preventDefault()
        toast.success('Subscribed Successfully!')
        setEmail('')
    }

  return (
    <footer className='px-5 mb-6'>
        <div className='bg-[#f0ecf9] w-full rounded-lg px-6 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14 gap-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <span className='font-bold text-3xl transition-colors duration-200'>Shop</span>
                        <span className='font-bold text-3xl text-blue-700 transition-colors duration-200'>Verse</span>
                    </div>
                    <p className='text-sm text-gray-600 max-w-65'>Your one-stop destination for trendy products at the best prices. Quality you love, service you trust</p>
                    <div className='flex justify-start gap-3 p-1'>
                        {socialLinks.map((social)=>(
                            <Link key={social.alt} className='w-10 h-10 cursor-pointer active:scale-95 hover:scale-105 transition duration-200 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden'>
                                <img src={social.image} alt={social.alt} className='w-8 h-8 object-contain'/>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:gap-7 mt-3 md:mt-0'>
                    <div>
                        <h1 className='font-medium text-lg'>Quick Links</h1>
                    </div>
                    <div className='flex flex-col text-gray-600 text-[14px] gap-3'>
                        {quickLinks.map((qLink)=>(
                            <Link key={qLink.path} to={qLink.path} className='hover:text-blue-600 transition duration-200 hover:underline'>{qLink.name}</Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:gap-7 mt-3 md:mt-0'>
                    <div>
                        <h1 className='font-medium text-lg'>Customer Service</h1>
                    </div>
                    <div className='flex flex-col text-gray-600 text-[14px] gap-3'>
                        {customerServiceLinks.map((csLinks)=>(
                            <Link key={csLinks.path} to={csLinks.path} className='hover:text-blue-600 transition duration-200 hover:underline'>{csLinks.name}</Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:gap-7 mt-3 md:mt-0'>
                    <div>
                        <h1 className='font-medium text-lg'>Company</h1>
                    </div>
                    <div className='flex flex-col text-gray-600 text-[14px] gap-3'>
                        {companyLinks.map((cLinks)=>(
                            <Link key={cLinks.path} to={cLinks.path} className='hover:text-blue-600 transition duration-200 hover:underline'>{cLinks.name}</Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:gap-7 mt-3 md:mt-0'>
                    <div>
                        <h1 className='font-medium text-lg'>Newsletter</h1>
                    </div>
                    <div>
                        <p className='text-sm text-gray-600'>Subscribe to get updates on new arrivals, special offers and more.</p>
                    </div>
                    <form onSubmit={formSubmitHandler} className='relative'>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' className='border border-gray-300 outline-none hover:shadow-lg text-sm rounded-lg w-full h-12 px-4 bg-white' />
                        <button type='submit' className='absolute right-0 text-white text-sm bg-blue-600 rounded-lg h-12 w-26 cursor-pointer active:scale-95 hover:scale-105 transition duration-200'>Subscribe</button>
                    </form>
                </div>
            </div>
            <hr className='mt-12 text-gray-300 opacity-50' />
            <div className='justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {featureCards.map((feature)=>(
                    <div key={feature.title} className='py-8 px-6 flex items-center gap-5 '>
                        <div className='bg-[#e4dbfa] text-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center'>
                            {feature.icon}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-medium'>{feature.title}</h1>
                            <p className='text-gray-600 text-sm'>{feature.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className='text-gray-300 opacity-50' />
            <div className='mt-8 text-sm flex justify-center items-center gap-1'>
                <Copyright size={12}/> 2026 <h5 className='font-medium'> Shop<span className='text-blue-700'>Verse.</span></h5> All rights reserved.
            </div>
            <div className='w-full flex flex-wrap items-center justify-center gap-4 mt-4'>
                {paymentIcons.map((payment)=>(
                    <div key={payment.alt} className='w-20 h-10 rounded bg-white flex items-center justify-center overflow-hidden'>
                        <img src={payment.icon} alt={payment.alt} className='w-full h-full object-contain'  />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer