import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/homeLayout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }
    ],
  },
]);

export default router;
