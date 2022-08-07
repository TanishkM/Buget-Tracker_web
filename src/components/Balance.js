import React,{useState} from 'react'
import { useSpring, animated } from 'react-spring'

const Balance = () => {
  const style1 = useSpring({
    from: { marginRight: 300 },
    to: { marginRight: 0 },
    config: { duration: 200 }
  })
  const [bal,setBal]=useState(0)
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
  const amt=datas.map(t=>t.transaction)
  const total=amt.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <animated.div style={style1}>
      <div>
        <div className='container d-flex align-items-center justify-content-center text-light text-center bal'>
          <h3 className='d-inline ' style={{ fontSize: "4em" }}>₹ {total}</h3>
        </div>
      </div>
    </animated.div>
  )
}

export default Balance
