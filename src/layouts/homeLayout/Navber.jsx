import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "../../components/Logo";
import ThemeToggle from "../../components/ThemeToggle";
import useAuthHook from "../../customHook/useAuthHook";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import useAxiosSecure from "../../customHook/useAxiosSecure";

const Navber = () => {
  const { user, handleLogOut } = useAuthHook();




  function handleSignOut() {
    handleLogOut().then(()=>{
      toast.success("Logout Sucessfull")
    })
  }

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className=" font-medium text-[#00a8ff] bodyFont hover:text-blue-500 duration-300 text-lg"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="text-lg font-medium bodyFont text-[#00a8ff] hover:text-blue-500 duration-300"
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium bodyFont text-[#00a8ff] hover:text-blue-500 duration-300">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium bodyFont text-[#00a8ff] hover:text-blue-500 duration-300">
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="text-lg font-medium bodyFont text-[#00a8ff] hover:text-blue-500 duration-300"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-[0_4px_12px_rgba(0,0,0,0.25)]   max-w-[1440px] mx-2 lg:mx-auto rounded-3xl px-2 my-4 ">
      <div className="navbar">
        <div className=" navbar-start ">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p className="">
            <Logo />
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className=" flex items-center justify-end sm:navbar-end">
          {user ? (
            <div
              className="relative mr-2 h-15 w-15 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-sky-400 to-red-500 shadow-md hover:scale-105 transition duration-300 tooltip tooltip-bottom hidden sm:block"
              data-tip={`${user.displayName}`}
            >
              <img
                className="h-full w-full rounded-full object-cover"
                src={user.photoURL}
                alt="user"
              />
            </div>
          ) : (
            ""
          )}

          <Link
            to={user ? "/" : "/login"}
            onClick={user ? handleSignOut : ""}
            class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fill-opacity=".1"
                  fill-rule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span class="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fill-opacity=".1"
                  fill-rule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
            <span class="relative text-base font-semibold">
              {user ? "LogOut" : "login"}
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navber;
