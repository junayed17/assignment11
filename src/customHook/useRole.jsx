import React from 'react';
import useAuthHook from './useAuthHook';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router';

const useRole = () => {
  const {user}=useAuthHook();
  const axiosSecure=useAxiosSecure();
  const {data,isFetching,error}=useQuery({
    queryKey:["user",user],
    enabled:!!user,
    queryFn:async()=>{
      const result= await axiosSecure(`/role?email=${user.email}`);
      return result.data
    }
  });


  return {isFetching,data};
};

export default useRole;