import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "../services/firebase/index";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider =({ children }) =>{

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);   

    const login = async (email, password) => {
       const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const logout = () =>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unsubcribe()
        }
    }, [])
    return(
        <AuthContext.Provider value={{
             singUp,
             login,
             logout,
             loginWithGoogle,
             loading,
             user
              }}>
            { children }
        </AuthContext.Provider>
    )
}