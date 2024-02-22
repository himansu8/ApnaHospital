import { Outlet, Navigate } from "react-router-dom";
import React from 'react'

 function Privateroutes() {
    let isToken = localStorage.getItem('token')
  return (
   <>
   {isToken ? <Outlet/> : <Navigate to="/"/>}
   </>
  )
}
export default Privateroutes;