import React, { use } from 'react';
import { AuthContextData } from '../context/AuthContext';

const useAuthHook = () => {
  const authData=use(AuthContextData)
  return authData
};

export default useAuthHook;