import React from 'react'
import { useSpring, animated } from 'react-spring'

const Balance = ({ datas, loading }) => {
  const style1 = useSpring({
    from: { marginRight: 300 },
    to: { marginRight: 0 },
    config: { duration: 200 }
  })
  // const datas = [
  //   {
  //     title: "firstsecond",
  //     category: "s",
  //     description: "some description",
  //     transaction: 10
  //   },
  //   {
  //     title: "thirdfourth",
  //     category: "s",
  //     description: "some other description",
  //     transaction: -10000000
  //   }
  // ]
  const amt = datas.map(t => t.transaction)
  const total = amt.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <animated.div style={style1}>
      <div>
        <div className='container d-flex flex-column align-items-center justify-content-center text-light text-center bal'>
          <h3>Your Balance</h3>
          {loading?<div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>:
          <h3 className='d-inline total'>₹ {total}</h3>}
        </div>
      </div>
    </animated.div>
  )
}

export default Balance
