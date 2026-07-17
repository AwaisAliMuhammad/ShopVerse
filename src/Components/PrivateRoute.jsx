import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const authorization = useSelector((store)=>store.authorization)
    
    if(authorization.isLoggedIn){
        return <Outlet/>
    }
    else{
        return <Navigate to='/login'/>
    }
}

export default PrivateRoute