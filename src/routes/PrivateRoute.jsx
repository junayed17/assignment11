import React from "react";
import Loader from "../components/Loader";
import useAuthHook from "../customHook/useAuthHook";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useAuthHook();
  const location =useLocation()
  
  
  if(loading){
    return <Loader/>
  }
  if (!user&&!loading) {
    return <Navigate to="/login" state={location.pathname} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
