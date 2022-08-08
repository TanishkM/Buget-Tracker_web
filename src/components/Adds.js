import React, { useContext } from 'react'
import cntx from '../context/cntx'
import { useNavigate } from 'react-router-dom'
import profits from './assets/profits.png'
import food from './assets/food.png'
import transportation from './assets/transportation.png'
import entertainment from './assets/entertainment.png'
import clothing from './assets/clothing.png'
import subscriptions from './assets/subscriptions.png'
import purchase from './assets/purchase.png'
import bill from './assets/bill.png'
import misc from './assets/misc.png'
import image from './assets/image.png'
const Adds = ({ data, getTransactions }) => {
    const a = useContext(cntx)
    const handleDelete = async () => {
        await a.deleteTransaction(data.id)
        getTransactions()
    }
    const navigate = useNavigate()
    const goToEdit = async() => {
        await a.setTransactionId(data.id)
        navigate('/update')
    }
    let im
    switch (data.category) {
        case '0':
            im = image
            break;
        case '1':
            im = profits
            break;
        case '2':
            im = food
            break;
        case '3':
            im = transportation
            break;
        case '4':
            im = entertainment
            break;
        case '5':
            im = clothing
            break;
        case '6':
            im=subscriptions
            break;
        case '7':
            im=purchase
            break;
        case '8':
            im=bill
            break;
        case '9':
            im=misc
            break;
        default:
            im=misc
    }
    return (
        <div>
            <button type='button' onClick={goToEdit} className='link'>
            </button>
            <div className=' mt-4'>

                <div className='d-flex justify-content-between'>
                    <div>
                        <div className='d-inline px-3 transaction'>
                            {
                                <img className='image' src={im} alt={data.category} />
                            }
                        </div>
                        <div className='d-inline px-3 transaction'>
                            <b>{data.title} </b>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='d-inline  transaction' style={{ color: data.transaction < 0 ? "red" : "#06ad00" }}>
                            <b>₹ {(data.transaction)}</b>
                        </div>
                        <div className='d-inline px-3 delete'>
                            <button onClick={handleDelete} style={{ backgroundColor: "white", border: "none" }}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default Adds
