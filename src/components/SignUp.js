import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useSpring,animated } from 'react-spring'
import { useContext,useRef } from 'react'
import cntx from '../context/cntx'

const SignUp = () => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const a=useContext(cntx)
    const emailRef = useRef()
    const passRef = useRef()
    const style1=useSpring({
        from:{marginTop:500},
        to:{marginTop:0},
        config:{duration:500}
    })

    const handleSignUp=async()=>{
        if(emailRef.current.value.trim() === "" || passRef.current.value.trim() === "") {
            setError(true)
            setErrorMessage("Inputs cannot be empty")
        } else if (passRef.current.value.trim().length < 8) {
            setError(true)
            setErrorMessage("Password must be atleast 8 characters long")
        } else {
            setError(false)
            try
            {
                setLoading(true)
                await a.signup(emailRef.current.value,passRef.current.value)
                navigate('/')
            }
            catch(err){
                alert(err.message)
            }
            setLoading(false)
        }
        
    }
    return (
        <animated.div style={style1}>
        <div className=''>
            <div className="shadow-lg card container" style={{ width: "23rem",marginTop:"23vh" }}>
                <div className="card-body">
                    <h3 className="card-title text-center">Sign Up</h3>
                    <div className="form-floating mb-3 mt-5">
                        <input ref={emailRef} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input ref={passRef}type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button disabled={loading} onClick={handleSignUp} className="btn btn-primary d-block w-100 mt-4 btn-lg" type="button">Register</button>
                    {error && 
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red', marginTop: 2}}>
                            <text>{errorMessage}</text>
                        </div>
                    }
                    <Link className="link-primary text-center d-block mt-2" to="/login">Already Have an Account?</Link>
                </div>
            </div>
        </div>
        </animated.div>
    )
}

export default SignUp
