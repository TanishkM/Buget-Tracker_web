import React,{useContext} from 'react'
import {Navigate,Outlet} from 'react-router-dom'
import cntx from '../context/cntx'

export default function PrivateRoute( ) {
    const a=useContext(cntx)
  return (
    a.currentUser?<Outlet/>:<Navigate to='/start'/>
  )
}
