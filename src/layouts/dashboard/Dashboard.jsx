import React, { useState } from 'react';
import Logo from '../../components/Logo';
import { TiThMenuOutline } from 'react-icons/ti';
import { ImCancelCircle } from 'react-icons/im';
import useAuthHook from '../../customHook/useAuthHook';
import ThemeToggle from '../../components/ThemeToggle';
import { IoLibrarySharp, IoMenu } from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router';
import { MdLibraryAdd, MdLibraryBooks } from 'react-icons/md';
import { FaUserLarge } from 'react-icons/fa6';
import "./dashboard.css"
import { FaClipboardList, FaShoppingCart, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  const {user}=useAuthHook()
  const [clicked,setClicked]=useState(false)

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
        <div className="flex min-h-full flex-col items-start bg-base-100 shadow-[0_4px_12px_rgba(0,0,0,0.25)] is-drawer-close:w-20 is-drawer-open:w-64">
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
                  <IoLibrarySharp/>
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  My books
                </span>
              </NavLink>
            </li>
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
            <li>
              <NavLink
                to="/dashboard/allPost"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All Post">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full  text-4xl font-bold"
                >
                  <MdLibraryBooks/>
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  All Post
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/allUsers"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All Users">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full  text-4xl font-bold"
                >
                  <FaUsers/>
                </label>
                <span className="is-drawer-close:hidden text-lg text-black bodyFont font-bold">
                  All Post
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












/* Frame 2087325578 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// padding: 16px 32px;
// gap: 652px;

// position: absolute;
// width: 1341px;
// height: 72px;
// left: 260px;
// top: 0px;

// background: #FFFFFF;
