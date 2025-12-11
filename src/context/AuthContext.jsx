import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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

  const authData = {
    handleSignUpWithEmail,
    handleUpdateProfile,
    user,
    setUser,
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
