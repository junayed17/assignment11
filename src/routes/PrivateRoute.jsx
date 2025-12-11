import React from "react";
import Loader from "../components/Loader";
import useAuthHook from "../customHook/useAuthHook";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useAuthHook();
  if(loading){
    console.log("loading");
    
    return <Loader/>
  }
  if (!user) {
     console.log("user");
    return <Loader />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
