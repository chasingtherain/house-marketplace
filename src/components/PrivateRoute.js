import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { UseAuthStatus } from '../hooks/UseAuthStatus'
import Spinner from './Spinner'

function PrivateRoute() {
    const {loggedIn, checkingStatus} = UseAuthStatus()

    if(checkingStatus){
        return <Spinner/>
    }

    return loggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
}

export default PrivateRoute