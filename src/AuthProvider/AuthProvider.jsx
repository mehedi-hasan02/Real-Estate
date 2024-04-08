import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubscribes = onAuthStateChanged(auth, currUser=>{
            setUsers(currUser);
        })

        return()=>{
            unSubscribes();
        }
    },[])


    const authInfo = {
        users,
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;