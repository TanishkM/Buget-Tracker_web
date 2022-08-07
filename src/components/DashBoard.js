import React, { useContext, useEffect } from 'react'
import cntx from '../context/cntx'
import { useNavigate,Link } from 'react-router-dom'
import Balance from './Balance'
import DashBot from './DashBot'
const DashBoard = () => {
  useEffect(() => {
    if (a.currentUser == null)
      navigate('/start')
  })
  const a = useContext(cntx)
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await a.logout()
      navigate('/start')
    }
    catch (err) {
      alert(err.message)
    }
  }
  return (
    <div className=''>
       <div className='arrows container d-flex justify-content-between'>
        <Link to="/">
          <svg  style={{filter:"invert(100)"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" /></svg>
        </Link>
        <Link to="/">
          <svg style={{filter:"invert(100)"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" /></svg>
        </Link>

        </div>
      <div className='container bk'>
        <div className='d-flex justify-content-between'>
          <h5 className='text-light d-inline'>{a.currentUser ? a.currentUser.email : "nouser"}</h5>
          <button onClick={handleLogout} type="button" className="btn btn-info text-light border border-primary ">Logout</button>
        </div>
        <Balance />
      </div>
      <DashBot />
    </div>
  )
}

export default DashBoard
