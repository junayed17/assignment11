import React, { use } from "react";
import { AuthContextData } from "../contextProviders/AuthContext";

const useAuthHook = () => {
  const authData = use(AuthContextData);
  return authData;
};

export default useAuthHook;
