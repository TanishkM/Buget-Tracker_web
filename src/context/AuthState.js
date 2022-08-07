import React, { useEffect, useState } from "react";
import cntx from './cntx'
import { auth ,db} from '../fire'
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const AuthState = (props) => {
    ///////// Authentication
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => { setCurrentUser(user) 
            setLoading(false)
        })
        
        return unsub
    }, [])

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setCurrentUser(null)
        return signOut(auth)
    }

    ///////  Database
    const transactionRef=collection(db,"transactions")
    
    const addTransaction=(newTransaction)=>{
        return addDoc(transactionRef,newTransaction)
    }
    const updateTransaction=(id,updatedTransaction)=>{
        const TransactionDoc= doc(db,"transactions",id)
        return updateDoc(TransactionDoc,updatedTransaction)
    }
    const deleteTransaction=(id)=>{
        const TransactionDoc= doc(db,"transactions",id)
        return deleteDoc(TransactionDoc)
    }
    const getAllTransactions=()=>{
        return getDocs(transactionRef)
    }

    const getTransaction=(id)=>{
        const TransactionDoc= doc(db,"transactions",id)
        return getDoc(TransactionDoc)

    }
    const value = {
        /// Authentication
        currentUser,
        signup,
        login,
        logout,
        /// Database
        addTransaction,
        updateTransaction,
        deleteTransaction,
        getAllTransactions,
        getTransaction
    }





    return (
        <cntx.Provider value={value}>
            {!loading && props.children}
        </cntx.Provider>
    )
}

export default AuthState