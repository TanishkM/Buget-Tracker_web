import React, { useEffect, useContext, useState } from 'react'
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
  console.log(datas);

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
          <h4 className='mt-3'>Transactions</h4>
          {loading?<div class="spinner-border text-primary" role="status">
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
