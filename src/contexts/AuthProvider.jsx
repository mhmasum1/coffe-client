import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {


    const createaUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createaUser
    }

    return (
        <AuthContext value={userInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;