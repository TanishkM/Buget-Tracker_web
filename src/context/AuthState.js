import React from "react";
import cntx from './cntx'
import {auth} from '../fire'
import { createUserWithEmailAndPassword } from "firebase/auth";
const AuthState = (props) => {
    const signup=(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)
    }
    const value={
        signup
    }
    return (
        <cntx.Provider value={value}>
            {props.children}
        </cntx.Provider>
    )
}

export default AuthState