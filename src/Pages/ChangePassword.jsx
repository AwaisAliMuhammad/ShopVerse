import React, { useState } from 'react'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Eye, EyeOff } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { changePassword } from '../Features/RegiseredUserSlice'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const authorized = useSelector((store)=>store.authorization.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formSubmitHandler=(e)=>{
    e.preventDefault()
    if(authorized.password !== oldPassword){
      toast.error('Old Password Incorrect!')
      return
    }
    if(newPassword.length<8 || confirmPassword.length<8){
      toast.error('Password must be at least 8 characters long.')
      return
    }
    if(newPassword !== confirmPassword){
      toast.error('Password do not match!')
      return
    }
    dispatch(changePassword({email: authorized.email, newPassword}))
    toast.success('Password changed successfully!')
    setOldPassword('')
    setNewPassword('')
    setConfirmPassword('')
    navigate('/profile')
  }

  return (
    <PageTransition>
        <Navbar/>
          <div className='bg-gray-50 min-h-screen grid justify-center items-center'>
            <div className='w-md bg-white rounded-2xl shadow-md'>
              <div className='flex flex-col gap-2 items-center justify-center mt-8'>
                <h1 className='font-bold text-4xl'>Change Password</h1>
                <p className='text-gray-500'>Change your password on regular basis.</p>
              </div>  
              <form onSubmit={formSubmitHandler} className='p-8 flex flex-col gap-6'>
                <div className='relative'>
                  <input value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} required type={showOldPassword?'text':'password'} placeholder='Old Password' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' />
                  <button type='button' onClick={()=>setShowOldPassword(!showOldPassword)} className={`absolute right-4 top-3 ${showOldPassword===true ? 'text-blue-600':'text-gray-500 active:scale-95 hover:scale-105'} cursor-pointer`}>{showOldPassword===true ? <Eye/> : <EyeOff/>}</button>
                </div>
                <div className='relative'>
                  <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value.trim())} required type={showNewPassword?'text':'password'} placeholder='New Password' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' />
                  <button type='button' onClick={()=>setShowNewPassword(!showNewPassword)} className={`absolute right-4 top-3 ${showNewPassword===true ? 'text-blue-600':'text-gray-500 active:scale-95 hover:scale-105'} cursor-pointer`}>{showNewPassword===true ? <Eye/> : <EyeOff/>}</button>
                </div>
                <div className='relative'>
                  <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value.trim())} required type={showConfirmPassword?'text':'password'} placeholder='Confirm Password' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' />
                  <button type='button' onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className={`absolute right-4 top-3 ${showConfirmPassword===true ? 'text-blue-600':'text-gray-500 active:scale-95 hover:scale-105'} cursor-pointer`}>{showConfirmPassword===true ? <Eye/> : <EyeOff/>}</button>
                </div>
                <button type='submit' className='w-full h-12 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition active:scale-95 cursor-pointer'>Change Password</button>
              </form>
              <div className='flex items-center justify-center mb-6'>
              </div>
            </div>
          </div>
        <Footer/>
    </PageTransition>
  )
}

export default ChangePassword