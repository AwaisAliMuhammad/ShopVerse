import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {

    const authorization = useSelector((store)=>store.authorization)
  
    if (authorization.isLoggedIn) {
        return <Navigate to='/'/>        
    } else {
        return <Outlet/>
    }

}

export default PublicRoute