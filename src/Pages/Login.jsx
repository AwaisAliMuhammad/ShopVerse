import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageTransition from '../Components/PageTransition'
import Navbar from '../Components/Navbar'
import { Eye, EyeOff } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../Features/AuthorizationSlice'
import toast from 'react-hot-toast'
import Footer from '../Components/Footer'

const Login = () => {

  const [loginData, setLoginData] = useState({email:'', password:'',fullName:'',email:''})
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registeredUsers = useSelector((store)=>store.registered.users)
  
  const loginSubmitHandler=(e)=>{
    e.preventDefault()
    if(loginData.password.length<8){
      toast.error('Password must be atleast 8 characters.')
      return
    }
    
    const foundUser = registeredUsers.find((user)=>user.email === loginData.email)

    if(!foundUser){
      toast.error('Email not exists!')
      return
    }
    if(foundUser.password !== loginData.password){
      toast.error('Password is incorrect!')
      return
    }

    dispatch(loginUser(foundUser))
    toast.success('Welcome Back!')
    setLoginData({email:'', password:''})
    navigate('/')  
  }

  return (
    <PageTransition>
      <Navbar/>
      <div className='bg-gray-50 min-h-screen grid justify-center items-center'>
        <div className='md:w-md sm:w-sm sm:px-4 bg-white rounded-2xl shadow-md'>
          <div className='flex flex-col gap-2 items-center justify-center mt-8'>
            <h1 className='font-bold text-4xl'>Welcome Back</h1>
            <p className='text-gray-500'>Sign in to continue shopping.</p>
          </div>  
            <form onSubmit={loginSubmitHandler} className='p-8 flex flex-col gap-6'>
              <input value={loginData.email} autoComplete='email' onChange={(e)=>setLoginData({...loginData, email:e.target.value})} required type="email" placeholder='Email Address' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' />
              <div className='relative'>
                <input value={loginData.password} autoComplete='current-password' onChange={(e)=>setLoginData({...loginData, password:e.target.value})} required type={showPassword ? 'text':'password'} placeholder='Password' className='w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition' />
                <button type='button' onClick={()=>setShowPassword(!showPassword)} className={`absolute right-4 top-3 ${showPassword ? 'text-blue-600':'text-gray-500 active:scale-95 hover:scale-105'} cursor-pointer`}>{showPassword ? <Eye/> : <EyeOff/>}</button>
              </div>
              <button type='submit' className='w-full h-12 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition active:scale-95 cursor-pointer'>Login</button>
            </form>
            <div className='flex items-center justify-center mb-6'>
              <p className='text-gray-600'>Don't have an account? <Link to={`/register`} className='font-semibold text-blue-600'>Register</Link></p>
            </div>
        </div>
      </div>
      <Footer/>
    </PageTransition>
  )
}

export default Login