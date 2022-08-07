import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { useContext,useRef,useState } from 'react'
import cntx from '../context/cntx'
const Login = () => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const a=useContext(cntx)
    const emailRef = useRef()
    const passRef = useRef()
    const style1 = useSpring({
        from: { marginTop: 500 },
        to: { marginTop: 0 },
        config: { duration: 500 }
    })

    const handleLogin=async()=>{
        try
        {
            setLoading(true)
            await a.login(emailRef.current.value,passRef.current.value)
            navigate('/')
        }
            
        catch(err){
            alert(err.message)
        }
        setLoading(false)
    }
    return (
        <animated.div style={style1}>
            <div className=''>
                <div className="shadow-lg card container" style={{ width: "23rem", marginTop: "23vh" }}>
                    <div className="card-body">
                        <h3 className="card-title text-center">Login</h3>
                        <div className="form-floating mb-3 mt-5">
                            <input ref={emailRef} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input ref={passRef} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button disabled={loading} onClick={handleLogin} className="btn btn-primary d-block w-100 mt-4 btn-lg" type="button">Sign In</button>
                        <Link className="link-primary text-center d-block mt-2" to="/sign_up">Create a New Account?</Link>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}

export default Login
