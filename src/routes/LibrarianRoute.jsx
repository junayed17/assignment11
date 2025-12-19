import React from "react";
import useAuthHook from "../customHook/useAuthHook";
import useRole from "../customHook/useRole";
import Loader from "../components/Loader";
import { useNavigate } from "react-router";

const LibrarianRoute = ({ children }) => {
  const { data, isFetching } = useRole();
  const navigate = useNavigate();

  if (isFetching) {
    return <Loader />;
  }

  if (data.role != "Librarian") {
    navigate("/forbidden");
  }
  console.log(data.role);
  return children;
};

export default LibrarianRoute;
