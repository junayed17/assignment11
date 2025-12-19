import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/homeLayout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/login/SignUp";
import Books from "../pages/Books/Books";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/dashboard/Profile";
import Error404 from "../components/Error404";
import Dashboard from "../layouts/dashboard/Dashboard";
import AddBook from "../pages/dashboard/AddBook";
import MyBooks from "../pages/dashboard/MyBooks";
import BookDetails from "../pages/Books/BookDetails";
import MyOrders from "../pages/dashboard/MyOrders";
import OrdersOnMyBook from "../pages/dashboard/OrdersOnMyBook";
import AllPost from "../pages/dashboard/AllPost";
import AllUser from "../pages/dashboard/AllUser";
import Forbidden from "../components/Forbidden";
import Payment from "../pages/dashboard/Payment";
import PaymentCancel from "../pages/dashboard/PaymentCancel";
import PaymentSucess from "../pages/dashboard/PaymentSucess";
import AdminRoute from "./AdminRoute";
import LibrarianRoute from "./LibrarianRoute";

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
        path: "/books",
        element: (
          <PrivateRoute>
            <Books />
          </PrivateRoute>
        ),
      },
      {
        path: "/book/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addBook",
        element: <AddBook />,
        loader: () => fetch("/warehouses.json"),
      },
      {
        path: "/dashboard/myBooks",
        element: <MyBooks />,
        loader: () => fetch("/warehouses.json"),
      },
      {
        path: "/dashboard/myProfile",
        element: <Profile />,
      },
      {
        path: "/dashboard/orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard/payment-success",
        element: <PaymentSucess />,
      },
      {
        path: "/dashboard/payment-cancelled",
        element: <PaymentCancel />,
      },
      {
        path: "/dashboard/ordersonmybook",
        element: (
          <LibrarianRoute>
            <OrdersOnMyBook />
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/allPost",
        element: (
          <AdminRoute>
            <AllPost />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/forbidden",
    element: <Forbidden />,
  },
]);

export default router;
