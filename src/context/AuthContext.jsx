import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState();

  function handleSignUpWithEmail(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function handleUpdateProfile(userData) {
    return updateProfile(auth.currentUser, userData);
  }

  function handleLogOut() {
    return signOut(auth)
  }


  function handleSignInWithEmailPass(email,pass) {
   return signInWithEmailAndPassword(auth,email,pass)
  }
  const authData = {
    handleSignUpWithEmail,
    handleUpdateProfile,
    user,
    setUser,
    handleLogOut,
    handleSignInWithEmailPass,
  };

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser || null);
     });

     return () => unsubscribe();
   }, []);

  return <AuthContextData value={authData}>{children}</AuthContextData>;
};

export default AuthContext;
