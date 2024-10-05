import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const provider = new GoogleAuthProvider()


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLoginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const userLogout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, user=>{
            setLoading(false)
            setUser(user)
        })
        return ()=>{
            unSubscribe()
        }
    },[])




    const info = {
      user,
      createUser,
      userLogin,
      userLoginWithGoogle,
      userLogout,
      loading
    };
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }  
        </AuthContext.Provider >
    );
};

export default AuthProvider;