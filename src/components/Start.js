import React from 'react'
import {Link} from 'react-router-dom'
import { useSpring,animated } from 'react-spring'
import { useContext } from 'react'
import cntx from '../context/cntx'
const Start = () => {
    const a=useContext(cntx)

    const style1=useSpring({
        from:{marginTop:500},
        to:{marginTop:0},
        config:{duration:500}
    })
    return (
        <animated.div style={style1}>
        <div>
            <div className=''>
            <div className="shadow-lg card container" style={{ width: "23rem",marginTop:"23vh" }}>
                <div className="card-body">
                    <h3 className="card-title text-center">Expenses Tracker</h3>
                    <Link to="/login" className="btn btn-info text-light d-block w-100 mt-4 btn-lg" type="button">Sign In</Link>
                    <Link to="/sign_up" className="btn btn-primary text-light d-block w-100 mt-2 btn-lg" type="button">Sign Up</Link>
                </div>
            </div>
        </div>
        </div>
        </animated.div>
    )
}

export default Start
