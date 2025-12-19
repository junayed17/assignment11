import React, { useEffect } from "react";
import useRole from "../customHook/useRole";

import { useNavigate } from "react-router";
import Loader from "../components/Loader";

const AdminRoute = ({ children }) => {
  const { data, isFetching } = useRole();
  const navigate = useNavigate();

  console.log(data);
  


  useEffect(() => {
    if (data && data?.role !== "Admin") {
      navigate("/forbidden");
    }
  }, [data, isFetching, navigate]);


  if (!data) {
    return <Loader />;
  }


  return children;
};

export default AdminRoute;
