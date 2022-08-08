import React, { useEffect, useContext,useRef,useState } from 'react'
import cntx from '../context/cntx'
import { useSpring, animated } from 'react-spring'
import { useNavigate, Link } from 'react-router-dom'
const Edit = () => {
    const [title,setTitle]=useState()
    const [desc,setDesc]=useState()
    const [category,setCategory]=useState('0')
    const [transaction,setTransaction]=useState(0)
    useEffect(() => {
            getTrans()
        // eslint-disable-next-line
    },[])
    const getTrans=async()=>{
        try{
            const t=await a.getTransaction(a.transactionId)
            setTitle(t.data().title)
            setDesc(t.data().description)
            setCategory(t.data().category)
            setTransaction(t.data().transaction)
        }
        catch(err){
            alert(err.message)
        }
    }
    const a = useContext(cntx)
    const style1 = useSpring({
        from: { marginTop: 500 },
        to: { marginTop: 0 },
        config: { duration: 400 }
    })
    const navigate = useNavigate()
    const transactionRef=useRef()
    const titleRef=useRef()
    const handleSubmit=async()=>{
    const e = document.getElementsByTagName("select").inputGroupSelect01;
    const desc = document.getElementsByTagName("textarea").floatingTextarea.value;
    const category = e.options[e.selectedIndex].value;

    const newTransaction={
        title:titleRef.current.value,
        category:category,
        description:desc,
        transaction:parseInt(transactionRef.current.value)
    }
    try{
        await a.updateTransaction(a.transactionId,newTransaction)
        navigate('/')
    }catch(err){
        alert(err.message)
    }
    }
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
                            <input  ref={transactionRef} value={transaction} onChange={e => setTransaction(e.target.value)} style={{ fontSize: "25px" }} type="text" placeholder="0" className="form-control text-center" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                    <div className="input-group-lg mb-3">
                        <select value={category} onChange={e => setCategory(e.target.value) } className="custom-select" id="inputGroupSelect01">
                        <option defaultValue="0">Default</option>
                            <option value="1">Income</option>
                            <option value="2">Food</option>
                            <option value="3">Transportation</option>
                            <option value="4">Entertainment</option>
                            <option value="5">Clothing</option>
                            <option value="6">Subscriptions</option>
                            <option value="7">Purchases</option>
                            <option value="8">Bills</option>
                            <option value="9">Miscellaneous</option>
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input ref={titleRef} value={title} onChange={e => setTitle(e.target.value) } placeholder=' ' type="text" className="form-control" id="floatingPassword"/>
                        <label htmlFor="floatingPassword">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea value={desc} onChange={e => setDesc(e.target.value) } className="form-control" style={{ height: "200px" }} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea" >Description</label>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button onClick={handleSubmit} type="button" className="btn btn-primary">Save</button>
                        <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
        </animated.div>
    )
}

export default Edit
