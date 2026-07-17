import React from 'react'
import Home from './Pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import ShippingInfo from './Pages/ShippingInfo'
import Payment from './Pages/Payment'
import OrderSuccess from './Pages/OrderSuccess'
import Wishlist from './Pages/Wishlist'
import { AnimatePresence } from 'motion/react'
import Products from './Pages/Products'
import Page404 from './Pages/Page404'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'
import Profile from './Pages/Profile'
import ChangePassword from './Pages/ChangePassword'
import MyOrders from './Pages/MyOrders'
import ProductCategories from './Components/ProductCategories'

const App = () => {

  const location = useLocation()

  return (
    <div>
      <AnimatePresence mode='wait'>
        <Routes  location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetail />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/category/:categoryName' element={<Products />}/>
          <Route path='/categories' element={<ProductCategories/>}/>
          <Route path='*' element={<Page404/>} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/wishlist' element={<Wishlist />}/>

          <Route element={<PublicRoute/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path='/shipping' element={<ShippingInfo />}/>
            <Route path='/payment' element={<Payment />}/>
            <Route path='/ordersuccess' element={<OrderSuccess />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/changepassword' element={<ChangePassword/>}/>
            <Route path='/myorders' element={<MyOrders/>}/>
          </Route>

        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App