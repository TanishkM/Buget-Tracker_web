import React from 'react'
import { useSpring, animated } from 'react-spring'
import Adds from './Adds'
const DashBot = () => {
  const style1 = useSpring({
    from: { marginTop: 500 },
    to: { marginTop: 0 },
    config: { duration: 500 }
  })

  const datas = [
    {
        title: "firstsecond",
        category: "s",
        description: "some description",
        transaction: 10
    },
    {
      title: "thirdfourth",
      category: "s",
      description: "some other description",
      transaction: -100000
  }
]

  return (
    <animated.div style={style1}>
      <div>
        <div className='container bottom shadow-lg'>
        <h4 className='mt-3'>Transactions</h4>
        {datas.length===0? "No Transaction to display":  
            datas.map((data)=>{
                return (<Adds data={data}/>   
                )
            })
              }
        </div>
        
      </div>
    </animated.div>

  )
}

export default DashBot
