import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
const googleProvider =new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)


    // singUP
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    // singIN

    const singIN =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    // singOUt
    const singOut =()=>{
        setLoading(true)
        return signOut(auth)
    }


      // google
    const singINwithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

 useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('user in the auth state change',unSubscribe)

        })
        return()=>{
            unSubscribe
        }
    },[])

const authInfo={
    loading,
    user,
    createUser,
    singIN,
    singOut,
    singINwithGoogle
}

    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;