import React, { useEffect, useState } from "react";
import useAuthHook from "./useAuthHook";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { useNavigate } from "react-router";

const useRole = () => {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState();
  // const {data,isFetching,error}=useQuery({
  //   queryKey:["user",user?.email],
  //   enabled:!!user,
  //   queryFn:async()=>{
  //     const result= await axiosSecure(`/role?email=${user?.email}`);
  //     return result.data
  //   }
  // });

  useEffect(() => {
    axiosSecure(`/role?email=${user?.email}`).then((result) =>
      setData(result.data)
    );
  }, [user?.email]);


console.log(data);



  return { data };
  // return {isFetching,data};
};

export default useRole;
