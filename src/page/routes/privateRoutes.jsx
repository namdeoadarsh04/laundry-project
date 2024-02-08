import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    let auth = localStorage.getItem("user")

  return (
    <>
    {auth?children:<Navigate to={"/login"}/>}
    </>
  )
}

export default PrivateRoute;