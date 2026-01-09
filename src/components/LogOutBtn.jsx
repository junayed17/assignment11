import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import useAuthHook from "../customHook/useAuthHook";

const LogOutBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
      const { user, handleLogOut } = useAuthHook();

  const handleSelect = (option) => {
    console.log("Selected:", option);
    setIsOpen(false);
    if (isOpen) {
      document.activeElement.blur();
    }
  };

  function handleSignOut() {
    handleLogOut().then(() => {
      toast.success("Logout Sucessfull");
    });
  }

  return (
    <div className="dropdown dropdown-end z-10">
      {/* বাটন */}
      <label tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <div className="relative h-12 w-12 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-sky-400 to-red-500 shadow-md hover:scale-105 transition duration-300 tooltip tooltip-bottom hidden sm:block">
          <img
            className="h-full w-full rounded-full object-cover"
            src={user.photoURL}
            alt="user"
          />
        </div>
      </label>

      {/* মেনু লিষ্ট */}
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-xl w-52 mt-4 border border-gray-100"
      >
        <li>
          <Link
            to="/dashboard/myProfile"
            className=" is-drawer-close:tooltip is-drawer-close:tooltip-right  "
            data-tip="My Profile"
          >
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="w-full  text-4xl font-bold"
            >
              <FaUserLarge size={18} />
            </label>
            <span className="text-sm font-semibold  is-drawer-close:hidden text-sm text-base-350 bodyFont font-bold heading">
              My Profile
            </span>
          </Link>
        </li>
        <div className="divider my-0"></div>
        <Link
          onClick={handleLogOut}
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
          <span class="relative  font-semibold text-sm heading ">
            Log Out
          </span>
        </Link>
      </ul>
    </div>
  );
};

export default LogOutBtn;
