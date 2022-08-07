import React, { useEffect, useState } from "react";
import cntx from './cntx'
import { auth } from '../fire'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const AuthState = (props) => {
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
    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <cntx.Provider value={value}>
            {!loading && props.children}
        </cntx.Provider>
    )
}

export default AuthState