import React, { useEffect, useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import cntx from '../context/cntx'
import { useSpring, animated } from 'react-spring'
import Adds from './Adds'
const DashBot = () => {
  const [datas, setDatas] = useState([])
  const [loading,setLoading]=useState(false)
  const style1 = useSpring({
    from: { marginTop: 500 },
    to: { marginTop: 0 },
    config: { duration: 500 }
  })
  const a = useContext(cntx)  
  const getTransactions = async () => {
    const data = await a.getAllTransactions()
    setDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    getTransactions();
    // eslint-disable-next-line
  }, [])
  return (
    <animated.div style={style1}>
      <div>
        <div className='container bottom shadow-lg'>
          <div className='mt-3 d-flex justify-content-between'>
          <h4 className='mt-1 d-inline'>Transactions</h4>
          <div className='addbtn'>
          <Link to="/add">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
          </Link>
        </div>
          </div>
          {loading?<div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>:""}
          {datas.length === 0 && !loading ? "No Transaction to display" :
            (datas.reverse()).map((data) => {
              return (<Adds data={data} key={data.id} />
              )
            })
          }
        </div>
      </div>
    </animated.div>
  )
}
export default DashBot
