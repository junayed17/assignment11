import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/homeLayout/RootLayout';
import HomePage from '../pages/HomePage';

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      }
    ]

  }
])

export default router;