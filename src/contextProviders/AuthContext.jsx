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
  const [loading, setLoading] = useState(true);

  function handleSignUpWithEmail(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function handleUpdateProfile(userData) {
    setLoading(true);
    return updateProfile(auth.currentUser, userData);
  }

  function handleLogOut() {
    setLoading(true);
    return signOut(auth);
  }

  function handleSignInWithEmailPass(email, pass) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  }
  const authData = {
    handleSignUpWithEmail,
    handleUpdateProfile,
    user,
    setUser,
    handleLogOut,
    handleSignInWithEmailPass,
    loading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContextData value={authData}>{children}</AuthContextData>;
};

export default AuthContext;
