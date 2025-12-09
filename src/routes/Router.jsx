import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/homeLayout/HomeLayout';

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>
  }
])

export default router;