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
import LogOutBtn from '../../components/LogOutBtn';
import { HiOutlineViewGrid } from 'react-icons/hi';

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
        <nav className="navbar w-full bg-base-100 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-between fixed top-0 left-0 z-20">
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

            <div>
              {" "}
              <Logo />
            </div>
          </div>
          <div className="navbar-end gap-3">
            <ThemeToggle />
            {user ? (
              <LogOutBtn />
            ) : (
              <Link
                to="/login"
                className="relative inline-block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
                <span className="relative text-sm heading">Login</span>
              </Link>
            )}
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4 bg-base-200 min-h-[90vh] mx-2 mt-10">
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
          <ul className={`menu w-full grow pt-16 space-y-5`}>
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
                <span className="is-drawer-close:hidden">{/* <Logo /> */}</span>
              </button>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="over View"
              >
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full  text-4xl font-bold"
                >
                  <HiOutlineViewGrid />
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  over View
                </span>
              </NavLink>
            </li>
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











