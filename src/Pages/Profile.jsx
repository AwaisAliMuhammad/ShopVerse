import React, { useRef } from 'react'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ArrowRight, Camera, Cog, MapPin, ShieldCheck, UserRound } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateProfilePhoto } from '../Features/AuthorizationSlice'

const Profile = () => {

    const profileCard = [
        {
            name:'Personal Information',
            icon:<UserRound color='blue'/>,
            color:'bg-blue-100',
        },
        {
            name:'Shipping Address',
            icon:<MapPin color='green'/>,
            color:'bg-green-100'
        },
        {
            name:'Account Settings',
            icon:<Cog color='purple'/>,
            color:'bg-purple-100'
        }
    ]

    const dispatch = useDispatch()
    const authorized = useSelector((store)=>store.authorization)
    const shippingDetail = useSelector((store)=>store.shipping)
    const fileInputRef = useRef(null)

    const imageHandler=(e)=>{
        const file = e.target.files[0]
        if(!file){
            return
        }
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend =()=>{
            const users = JSON.parse(localStorage.getItem("registerUsers")) || []
            const updatedUsers = users.map((user)=>{
                if(user.email === authorized.user.email){
                    return {...user, profilePhoto: reader.result}
                }
                return user
            })
            dispatch(updateProfilePhoto(reader.result))
            localStorage.setItem('registerUsers',JSON.stringify(updatedUsers))
        }
        e.target.value=''
    }

  return (
    <PageTransition>
        <Navbar/>
        <div className='bg-slate-50 py-10'>
        <div className=' max-w-7xl px-6 mx-auto'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl md:text-3xl font-semibold'>Welcome, {authorized.user.fullName} 👋</h1>
                <p className='text-sm md:text-base text-gray-500'>Manage your account information.</p>
            </div>
            <div className='flex flex-col lg:flex-row w-full mt-10 gap-5'>
                <div className='rounded-lg bg-white w-full md:w-1/4 md:h-80 shadow flex flex-col gap-3 p-8 justify-between items-center'>
                    <h1 className='w-32 h-32 rounded-full bg-blue-100 flex justify-center items-center shadow-lg border-4 border-white shadow-gray-200'>
                    {authorized.user.profilePhoto ? 
                        <img src={authorized.user.profilePhoto} loading='lazy' alt='Profile' className='w-32 h-32 rounded-full object-cover'/>
                        :
                        <UserRound size={60} color='blue' />
                    }
                    </h1>
                    <div className='text-center'>
                        <h2 className='text-xl font-medium'>{authorized.user.fullName}</h2>
                        <h3 className='text-gray-600 text-sm'>{authorized.user.email}</h3>
                    </div>
                    <button onClick={()=>fileInputRef.current.click()} className='text-white outline-none bg-blue-600 hover:bg-blue-700 w-40 h-10 font-semibold flex gap-2 items-center justify-center rounded-lg cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200'><Camera size={21}/>Upload Photo</button>
                    <input type='file'className='hidden' accept='image/*' ref={fileInputRef} onChange={imageHandler}/>
                </div>
                <div className='rounded-lg flex-1 flex flex-col gap-6'>
                    {profileCard.map((profile)=>(
                    <div key={profile.name} className='rounded-lg bg-white w-full min-h-52 p-6 shadow'>
                        <div className='flex items-center gap-4'>
                            <h1 className={`flex items-center justify-center w-10 h-10 rounded-full ${profile.color}`}>{profile.icon}</h1>
                            <h2 className='font-semibold'>{profile.name}</h2>
                        </div>
                        {profile.name === 'Personal Information' && (
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-5 px-2 md:px-6 lg:px-10 sm:gap-5'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-sm text-gray-500'>Full Name</h1>
                                    <h2 className='text-lg font-semibold'>{authorized.user.fullName}</h2>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-sm text-gray-500'>Email</h1>
                                    <h2 className='text-lg font-semibold'>{authorized.user.email}</h2>   
                                </div>
                            </div>
                        )}
                        {profile.name === 'Shipping Address' && (
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-5 px-2 md:px-6 lg:px-10 sm:gap-5'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-sm text-gray-500'>Address</h1>
                                    <h2 className='text-lg font-semibold'>{shippingDetail.address}</h2>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-sm text-gray-500'>City</h1>
                                    <h2 className='text-lg font-semibold'>{shippingDetail.city}</h2>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-sm text-gray-500'>Country</h1>
                                    <h2 className='text-lg font-semibold'>{shippingDetail.country}</h2>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-sm text-gray-500'>Phone</h1>
                                    <h2 className='text-lg font-semibold'>{shippingDetail.mobile}</h2>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-sm text-gray-500'>Postal Code</h1>
                                    {shippingDetail.postalCode !== '' && (
                                        <h2 className='text-lg font-semibold'>{shippingDetail.postalCode}</h2>
                                    )}
                                    {shippingDetail.postalCode === '' && (
                                        <h2 className='font-semibold text-lg'>Not Provided</h2>
                                    )}
                                </div>
                            </div>
                        )

                        }
                        {profile.name === 'Account Settings' && (
                            <div className='mt-5 px-6 lg:px-10 sm:gap-5 grid grid-cols-1'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-medium'>Password</h1>
                                    <h2 className='text-xl tracking-widest'>••••••••</h2>
                                </div>
                                <div className='flex flex-col gap-2 '>
                                    <h1 className='text-gray-600 text-sm font-medium'>Account Status</h1>
                                    <div className='flex items-center gap-2'>
                                        <h1 className='flex justify-center items-center text-green-700 text-xs w-12 h-5 rounded-3xl font-semibold bg-green-100'>Active</h1>
                                        <h2 className='text-sm font-medium'>Verified</h2>
                                    </div>
                                    <hr className='mt-6 mb-6 text-gray-300' />
                                    <div className='flex flex-col md:flex-row gap-4 p-3 md:p-4 justify-between md:items-center rounded-2xl bg-gray-100 w-full'>
                                        <div>
                                            <div className='flex gap-2'>
                                                <h2 className='text-green-700 flex items-center'><ShieldCheck size={18}/></h2>
                                                <h1 className='font-bold text-lg'>Change Password</h1>
                                            </div>
                                            <p className='text-sm text-gray-500'>Update your password regularly for better security.</p>
                                        </div>
                                        <div>
                                            <Link to={'/changepassword'} className='flex gap-2 active:scale-95 hover:scale-105 hover:text-blue-600 items-center justify-center w-26 h-8 shadow text-sm rounded-2xl text-gray-600 border-gray-300 font-medium border'><ArrowRight size={18}/>Change</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </PageTransition>
  )
}

export default Profile