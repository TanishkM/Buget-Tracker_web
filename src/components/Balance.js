import React from 'react'
import { useSpring, animated } from 'react-spring'

const Balance = () => {
  const style1 = useSpring({
    from: { marginRight: 300},
    to: { marginRight:0 },
    config: { duration: 200 }
  })
  return (
        <animated.div style={style1}>
    <div>
      <div className='container d-flex align-items-center justify-content-center text-light text-center bal'>
        <h3 className='d-inline ' style={{ fontSize: "4em" }}>₹ 1,42,000</h3>
      </div>
    </div>
    </animated.div>
    
  )
}

export default Balance
