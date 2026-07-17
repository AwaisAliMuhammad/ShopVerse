import { ChevronDown, Heart, Menu, Package, Power, Search, ShoppingCart, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logoutUser } from '../Features/AuthorizationSlice'

const Navbar = () => {

    const cartBadge = useSelector((store)=>store.cart.items)
    const wishlistBadge = useSelector((store)=>store.wishlist.items)
    const [search, setSearch] = useState('')
    const [showCategories, setShowCategories] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const navigate = useNavigate()
    const authorization = useSelector((store)=>store.authorization)
    const dispatch = useDispatch()

    const linkPages = [
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
        }
    ]

    const categories = [
        "electronics",
        "fashion",
        "watches",
        "shoes",
        'beauty'
      ]

    const profileLinks = [
      {
        name:'My Profile',
        path:'/profile',
        icon:<User fill='grey'/>
      },
      {
        name:'My Orders',
        path:'/myorders',
        icon:<Package />
      },
      {
        name:'Wishlist',
        path:'/wishlist',
        icon:<Heart fill='red'/>
      },
    ]

    const searchHandler=(e)=>{
        e.preventDefault()
        if(!search.trim()){
            return
        }
        navigate(`/products?search=${search}`)
    }
    const logoutHandler=()=>{
      dispatch(logoutUser())
      navigate('/')
    }

  return (
    <nav className='sticky top-0 bg-white shadow-md z-50'>
        <div className='flex justify-between items-center px-4 lg:px-6 max-w-7xl mx-auto h-20'>
            <div>
                <Link to='/'>
                    <span className='font-bold text-2xl transition-colors duration-200'>Shop</span>
                    <span className='font-bold text-2xl text-blue-700 transition-colors duration-200'>Verse</span>
                </Link>
            </div>
            <div className="hidden lg:flex gap-8 text-sm mx-8">
                {linkPages.map((page)=>(
                    page.name === "Categories" ? (
                        <div
                          key={page.name}
                          className="relative"
                          onMouseEnter={() => setShowCategories(true)}
                          onMouseLeave={() => setShowCategories(false)}
                        >
                          <button onClick={()=>setShowCategories((prev)=>!prev)} className='flex items-center gap-1 hover:text-blue-700 transition-colors cursor-pointer'>
                            Categories
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                showCategories ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                      
                          {showCategories && (
                            <div className='absolute top-full left-0 z-50 w-48 bg-white border rounded-lg shadow-lg py-2 transition-all duration-200'>
                              {categories.map((category) => (
                                <Link
                                  key={category}
                                  to={`/category/${category}`}
                                  onClick={()=>setShowCategories(false)}
                                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700"
                                >
                                  {category}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavLink
                          key={page.name}
                          to={page.path}
                          className={({ isActive }) =>
                            isActive
                              ? "text-blue-700 font-semibold"
                              : "transition-colors duration-200 hover:text-blue-700"
                          }
                        >
                          {page.name}
                        </NavLink>
                      )
                ))}
            </div>
            <div className="hidden lg:block w-full max-w-md mx-8">
                <form onSubmit={searchHandler} className='flex w-full border rounded-lg border-gray-300 items-center focus-within:ring-2 focus-within:ring-blue-500 hover:shadow-md transition-colors duration-200 hover:shadow-gray-300'>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='text-sm flex-1 h-8 px-2 outline-none' type="text" placeholder='Search for products...' />
                <button type='submit' className='px-2 cursor-pointer active:scale-90 text-gray-500 transition-colors duration-200 hover:text-blue-600'><Search size={20} /></button>
                </form>
            </div>
            <div className="hidden lg:flex justify-center gap-6 text-sm items-center">
                <Link to='/wishlist' className='flex items-center gap-1 transition-colors duration-200 hover:text-blue-700 cursor-pointer'>
                    <div className='relative'><Heart size={15}/>
                    {wishlistBadge.length === 0 ? null : (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] border-2 border-white font-semibold w-4 h-4 rounded-full flex items-center justify-center'>
                            {wishlistBadge.length}
                        </span>)}
                    </div>
                    Wishlist
                </Link>
                <Link to='/cart' className='flex items-center gap-1 transition-colors duration-200 hover:text-blue-700 cursor-pointer'>
                    <div className='relative'><ShoppingCart size={15}/>
                    {cartBadge.length === 0 ? null : (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] border-2 border-white font-semibold w-4 h-4 rounded-full flex items-center justify-center'>
                            {cartBadge.length}
                        </span>)}
                    </div>
                    Cart
                </Link>
          
              {authorization.isLoggedIn ? (
                <div className='relative'>
                <button onClick={()=>setOpenProfile((prev)=>!prev)} className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 cursor-pointer active:scale-95 hover:scale-105 shadow shadow-gray-400 outline-none hover:shadow-lg'>
                  {
                    authorization.user.profilePhoto ?
                    <img src={authorization.user.profilePhoto} className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 shadow-md hover:scale-105 transition" alt='Profile'/>
                    :
                    <User/>
                  }
                </button>
                {openProfile && (
                  <div className='absolute right-5 top-10 flex flex-col gap-2 w-64 px-2 bg-white border rounded-lg shadow-lg py-2 transition-all duration-200'>
                    <div className='flex flex-col gap-2 items-center'>
                      <div className=" w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {
                        authorization.user.profilePhoto ?
                        <img src={authorization.user.profilePhoto} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md hover:scale-105 transition" alt='Profile'/>
                        :
                        <User size={32}/>
                      }
                      </div>
                      <div>
                        <h1 className='font-semibold text-lg'>{authorization.user.fullName}</h1>
                        <h2>{authorization.user.email}</h2>
                      </div>
                    </div>
                    <hr className='mt-4 mb-4 text-gray-300'/>
                    <div className='flex flex-col gap-4'>
                      {profileLinks.map((profile)=>(
                        <Link onClick={()=>setOpenProfile(false)} key={profile.path} to={profile.path} className='flex items-center gap-1 cursor-pointer transition duration-150 hover:text-blue-600 hover:underline hover:bg-blue-50 rounded-md px-2 py-2'><span>{profile.icon}</span><span className='text-lg'>{profile.name}</span></Link>
                      ))}
                      <hr className='text-gray-300 mt-2 mb-2' />
                      <button onClick={logoutHandler} className='mb-1 cursor-pointer flex items-center justify-center bg-red-500 h-8 text-white w-full rounded active:scale-95 hover:scale-105 gap-2'><Power size={20}/>Logout</button> 
                    </div>
                  </div>
                )}
              </div>
              ):
              <Link to="/login" className="bg-blue-500 w-23 h-8 rounded-lg text-sm text-white flex items-center justify-center hover:bg-blue-700 transition active:scale-95 hover:scale-105">Login</Link>}
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <Link to="/cart" className="relative">
              <ShoppingCart />
                {cartBadge.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {cartBadge.length}
                  </span>)}
              </Link>
              <button onClick={() => setMobileMenu(!mobileMenu)} className="cursor-pointer">
                {mobileMenu ? <X size={28}/> : <Menu size={28}/>}
              </button>
            </div>
        </div>
        {mobileMenu && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-5 gap-5">
          {linkPages.map(page=>(
          <NavLink key={page.name} to={page.path} onClick={()=>setMobileMenu(false)}>
            {page.name}
          </NavLink>))}
        <form onSubmit={searchHandler} className="flex border rounded-lg overflow-hidden">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 p-2 outline-none" placeholder="Search..."/>
            <button type="submit" className="px-3"><Search/></button>
        </form>
        <Link to="/wishlist" onClick={()=>setMobileMenu(false)}>Wishlist</Link>
        {authorization.isLoggedIn ?
          <>
          <Link to="/profile" onClick={()=>setMobileMenu(false)}>My Profile</Link>
            <Link to="/myorders" onClick={()=>setMobileMenu(false)}>My Orders</Link>
              <button onClick={logoutHandler} className="bg-red-500 text-white rounded-lg h-10">Logout</button>
          </>
            :
          <Link to="/login" onClick={()=>setMobileMenu(false)} className="bg-blue-600 text-white rounded-lg h-10 flex items-center justify-center">
            Login
          </Link>
        }
    </div>
</div>)}
</nav>
)}

export default Navbar