import React, { useState } from 'react'
import PageTransition from '../Components/PageTransition'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import toast from 'react-hot-toast'
import { Eye, EyeOff } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Features/RegiseredUserSlice'
import Footer from '../Components/Footer'

const Register = () => {

  const [signupData, setSignupData] = useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:'',
    profilePhoto:''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registeredSelect = useSelector((store)=>store.registered.users)  

  const signupSubmitHandler=(e)=>{
    e.preventDefault()
    
    if(signupData.password.length<8){
      toast.error('Password must be atleast 8 characters.')
      return
    }
    if(signupData.password !== signupData.confirmPassword){
      toast.error('Passwords do not match.')
      return
    }

    const existingUser = registeredSelect.find((user)=>user.email === signupData.email)

    if(existingUser){
      toast.error('Email already exists!')
      return
    }

    dispatch(registerUser(signupData))
    toast.success('Registration successfull!')
    navigate('/login')


    setSignupData({
      fullName:'',
      email:'',
      password:'',
      confirmPassword:'',
      profilePhoto:'' 
    })
  }

  return (
    <PageTransition>
      <Navbar/>
      <div className='bg-gray-50 min-h-screen grid justify-center items-center'>
        <div className='bg-white w-md rounded-2xl shadow-md'>
          <div className='mt-8 flex flex-col justify-center items-center gap-2'>
            <h1 className='font-semibold text-4xl text-center'>Create your account</h1>
            <p className='text-gray-500'>Create your account and enjoy shopping.</p>
          </div>
            <form onSubmit={signupSubmitHandler} className='flex flex-col gap-6 p-8'>
              <input value={signupData.fullName} onChange={(e)=>setSignupData({...signupData, fullName:e.target.value})} type="text" required autoComplete='name' placeholder='Full Name' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' />
              <input value={signupData.email} onChange={(e)=>setSignupData({...signupData, email:e.target.value.replace(/\s/g,'').toLowerCase()})} type="email" required autoComplete='email' placeholder='Email' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'/>
              <div className='relative'>
                <input value={signupData.password} onChange={(e)=>setSignupData({...signupData, password:e.target.value})} type={showPassword===true?'text':'password'} required autoComplete='new-password' placeholder='Password' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'/>
                <button type='button' onClick={()=>setShowPassword(!showPassword)}  className={`absolute right-4 top-3 ${showPassword===true ? 'text-blue-600':'text-gray-500'} cursor-pointer active:scale-95 hover:scale-105`}>{showPassword===true ? <Eye/> : <EyeOff/>}</button>
              </div>
              <div className='relative'>
                <input value={signupData.confirmPassword} onChange={(e)=>setSignupData({...signupData, confirmPassword:e.target.value})} type={showConfirmPassword===true ? 'text':'password'} required autoComplete='new-password' placeholder='Confirm Password' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' />
                <button type='button' onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className={`absolute right-4 top-3 ${showConfirmPassword===true ? 'text-blue-600':'text-gray-500'} cursor-pointer active:scale-95 hover:scale-105`}>{showConfirmPassword===true ? <Eye/> : <EyeOff/>}</button>
              </div>
              <button type='submit' className='w-full h-12 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 active:scale-95 cursor-pointer'>Register</button>
            </form>
            <div className='flex justify-center mb-6'>
              <p className='text-gray-600'>Already have an account? <Link to={'/login'} className='font-semibold text-blue-600'>Login</Link></p>
            </div>
        </div>
    </div>
    <Footer/>
    </PageTransition>
  )
}

export default Register