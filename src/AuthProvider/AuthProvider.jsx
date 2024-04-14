import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribes = onAuthStateChanged(auth, currUser=>{
            // if(currUser)
            // {
            //     setUsers(currUser);
            //     setLoading(false);
            // }
            setUsers(currUser);
            setLoading(false);
        })  

        return()=>{
            unSubscribes();
        }
    },[])


    const authInfo = {
        users,
        createUser,
        signIn,
        googleLogin,
        githubLogin,
        logOut,
        loading,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;