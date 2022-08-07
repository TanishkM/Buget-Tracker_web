import React,{ useContext, useEffect } from 'react'
import cntx from '../context/cntx'
import {useNavigate} from 'react-router-dom'
const DashBoard = () => {
  useEffect(()=>{
    if(a.currentUser==null)
    navigate('/start')
  })
  const a=useContext(cntx)
  const navigate=useNavigate()
  const handleLogout=async()=>{
    try{
      await a.logout()
      navigate('/start')  
    }
    catch(err){
      alert(err.message)
    }
  }
  return (
    <div>
      Dashboard here!!!
      <h5>{a.currentUser?a.currentUser.email:"nouser"}</h5>
      <button onClick={handleLogout} type="button" className="btn btn-primary ">Logout</button>
    </div>
  )
}

export default DashBoard
