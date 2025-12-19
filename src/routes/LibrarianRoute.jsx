// import React from "react";
// import useAuthHook from "../customHook/useAuthHook";
// import useRole from "../customHook/useRole";
// import Loader from "../components/Loader";
// import { useNavigate } from "react-router";

// const LibrarianRoute = ({ children }) => {
//   const { data, isFetching } = useRole();
//   const navigate = useNavigate();

//   // if (isFetching) {
//   //   return <Loader />;
//   // }

//   console.log(data,isFetching);
  
//   if (data.role != "Librarian") {
//     navigate("/forbidden");
//   }
//   console.log(data.role);
//   return children;
// };

// export default LibrarianRoute;




import React, { useEffect } from "react";
import useRole from "../customHook/useRole";

import { useNavigate } from "react-router";
import Loader from "../components/Loader";

const LibrarianRoute = ({ children }) => {
  const { data, isFetching } = useRole();
  const navigate = useNavigate();

  console.log(data);
  


  useEffect(() => {
    if (data && data?.role !== "Librarian") {
      navigate("/forbidden");
    }
  }, [data, isFetching, navigate]);


  if (!data) {
    return <Loader />;
  }


  return children;
};

export default LibrarianRoute;

