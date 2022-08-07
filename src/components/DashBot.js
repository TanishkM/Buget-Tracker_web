import React from 'react'
import { useSpring, animated } from 'react-spring'
const DashBot = () => {
  const style1 = useSpring({
    from: { marginTop: 500 },
    to: { marginTop: 0 },
    config: { duration: 500 }
  })
  return (
    <animated.div style={style1}>
      <div>
        <div className='container bottom shadow-lg'></div>
      </div>
    </animated.div>

  )
}

export default DashBot
