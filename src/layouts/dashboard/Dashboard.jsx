import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import { TiThMenuOutline } from 'react-icons/ti';
import { ImCancelCircle } from 'react-icons/im';
import useAuthHook from '../../customHook/useAuthHook';
import ThemeToggle from '../../components/ThemeToggle';
import { IoLibrarySharp, IoMenu } from 'react-icons/io5';
import { Link, NavLink, Outlet } from 'react-router';
import { MdLibraryAdd, MdLibraryBooks } from 'react-icons/md';
import { FaHeartPulse, FaUserLarge } from 'react-icons/fa6';
import "./dashboard.css"
import { FaClipboardList, FaHome, FaShoppingCart, FaUsers } from 'react-icons/fa';
import useRole from '../../customHook/useRole';
import Loader from '../../components/Loader';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { user, handleLogOut } = useAuthHook();
  const [clicked,setClicked]=useState(false)
  const [role,setRole]=useState();
  const {data,isFetching}=useRole()

useEffect(() => {
  setRole(data?.role);
}, [data]);
if (isFetching) {
  return <Loader/>
}

  function handleSignOut() {
    handleLogOut().then(() => {
      toast.success("Logout Sucessfull");
    });
  }



  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-100 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right lg:hidden">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="text-2xl font-bold "
                onClick={() => setClicked(!clicked)}
              >
                {/* Sidebar toggle icon */}
                {clicked ? <ImCancelCircle /> : <IoMenu />}
              </label>
            </button>

            <div>{clicked ? "" : <Logo />}</div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              to={user ? "/" : "/login"}
              onClick={user ? handleSignOut : ""}
              class="relative inline-flex items-center justify-center px-3 sm:px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group mr-2"
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
            {user ? (
              <div
                className="relative mr-2 h-15 w-15 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-sky-400 to-red-500 shadow-md hover:scale-105 transition duration-300 tooltip tooltip-bottom"
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
            <ThemeToggle />
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4 bg-base-200 min-h-[90vh]">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-100 shadow-[0_4px_12px_rgba(0,0,0,0.25)] is-drawer-close:w-20 is-drawer-open:w-80">
          {/* Sidebar content here */}
          <ul
            className={`menu w-full grow ${
              clicked ? "pt-0" : "pt-6"
            } space-y-5`}
          >
            <li>
              <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right">
                {/* toggle icon */}
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full btn-ghost text-4xl font-bold"
                  onClick={() => setClicked(!clicked)}
                >
                  {/* Sidebar toggle icon */}
                  {clicked ? <ImCancelCircle /> : <IoMenu />}
                </label>
                <span className="is-drawer-close:hidden">
                  <Logo />
                </span>
              </button>
            </li>
            {/* List item */}
            <li>
              <NavLink
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Home"
              >
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full  text-4xl font-bold"
                >
                  <FaHome />
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  Home
                </span>
              </NavLink>
            </li>

            {role === "Librarian" ? (
              <li>
                <NavLink
                  to="/dashboard/addBook"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add book"
                >
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="open sidebar"
                    className="w-full  text-4xl font-bold"
                  >
                    <MdLibraryAdd />
                  </label>
                  <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                    Add book
                  </span>
                </NavLink>
              </li>
            ) : (
              ""
            )}

            {/* List item */}
            <li>
              <NavLink
                to="/dashboard/orders"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Orders"
              >
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full  text-4xl font-bold"
                >
                  <FaClipboardList />
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  My orders
                </span>
              </NavLink>
            </li>
            {role === "Librarian" ? (
              <li>
                <NavLink
                  to="/dashboard/myBooks"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My books"
                >
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="open sidebar"
                    className="w-full  text-4xl font-bold"
                  >
                    <IoLibrarySharp />
                  </label>
                  <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                    My books
                  </span>
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {role === "Librarian" ? (
              <li>
                <NavLink
                  to="/dashboard/ordersonmybook"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Orders on my Book"
                >
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="open sidebar"
                    className="w-full  text-4xl font-bold"
                  >
                    <FaShoppingCart />
                  </label>
                  <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                    Order on my books
                  </span>
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {role === "Admin" ? (
              <li>
                <NavLink
                  to="/dashboard/allPost"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="All Post"
                >
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="open sidebar"
                    className="w-full  text-4xl font-bold"
                  >
                    <MdLibraryBooks />
                  </label>
                  <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                    All Post
                  </span>
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {role === "Admin" ? (
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="All Users"
                >
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="open sidebar"
                    className="w-full  text-4xl font-bold"
                  >
                    <FaUsers />
                  </label>
                  <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                    All Users
                  </span>
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li>
              <NavLink
                to="/dashboard/myWishList"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Wishlist"
              >
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full  text-4xl font-bold"
                >
                  <FaHeartPulse />
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  My Wishlist
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/myProfile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
              >
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full  text-4xl font-bold"
                >
                  <FaUserLarge />
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  My Profile
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;











