import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../services/firebase/index";
import { useUsers } from "../services/firebase/user";

const formatUser = (rawUser) => {
  return {
    email: rawUser.email,
   
  };
};

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { createUser, updateUser } = useUsers();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser, provider) => {
    if (rawUser) {
      const user = formatUser(rawUser, provider);
      const { token, ...userWithoutToken } = user;
      let createdUser;
      if (provider !== "password") {
        createdUser = await createUser(user.uid, userWithoutToken);
      } else {
        createdUser = await createUser(user.uid, userWithoutToken.email);
      }
      setUser(createdUser);
      return user;
    } else {
      setUser(null);
      return false;
    }
  };

  const singUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserData = async (updatedData) => {
    try {
      const updatedUser = await updateUser(user.uid, updatedData);
      setUser(updatedUser);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        singUp,
        login,
        logout,
        loginWithGoogle,
        updateUserData,
        handleUser,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
