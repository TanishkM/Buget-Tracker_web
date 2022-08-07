import React, { useEffect, useContext } from 'react'
import cntx from '../context/cntx'
import { useSpring, animated } from 'react-spring'
import { useNavigate, Link } from 'react-router-dom'
const Edit = () => {
    useEffect(() => {
        if (a.currentUser == null)
            navigate('/start')
    })
    const style1 = useSpring({
        from: { marginTop: 500 },
        to: { marginTop: 0 },
        config: { duration: 400 }
    })
    const a = useContext(cntx)
    const navigate = useNavigate()
    return (
        <animated.div style={style1}>

        <div className='container d-flex justify-content-center' style={{ marginTop: "12vh" }}>
            <div className="card shadow-lg" style={{ width: "25rem" }}>
                <div className="card-body">
                    <h3 className="card-title text-center">Update</h3>
                    <div className='d-flex justify-content-center '>
                        <div className="input-group input-group-lg w-50 mb-4 mt-3 ">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">₹</span>
                            </div>
                            <input   style={{ fontSize: "25px" }} type="text" placeholder="0" className="form-control text-center" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                    <div className="input-group-lg mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" style={{ height: "200px" }} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea" >Description</label>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Link to="/" className="btn btn-primary">Save</Link>
                        <Link to="/" className="btn btn-primary">Back</Link>

                    </div>
                </div>
            </div>
        </div>
        </animated.div>
    )
}

export default Edit
