import React, { createContext } from 'react';
import { useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }




    const info = {
      user,
      createUser,
      userLogin,
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