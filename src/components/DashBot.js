import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Adds from './Adds'
const DashBot = ({ datas, getTransactions, loading }) => {
  const style1 = useSpring({
    from: { marginTop: 500 },
    to: { marginTop: 0 },
    config: { duration: 500 }
  })
  return (
    <animated.div style={style1}>
      <div>
        <div className='container bottom shadow-lg'>
          <div className='mt-3 d-flex justify-content-between'>
            <h4 className='mt-1 d-inline '>Transactions</h4>
            <div className='addbtn'>
              <Link to="/add">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
              </Link>
            </div>
          </div>
          <div className='scroll'>

            {loading ? <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> : ""}
            {datas.length === 0 && !loading ? "No Transactions to display" :
              (datas).map((data) => {
                return (<Adds data={data} key={data.id} getTransactions={getTransactions} />
                )
              })
            }
          </div>
        </div>
      </div>
    </animated.div>
  )
}
export default DashBot
