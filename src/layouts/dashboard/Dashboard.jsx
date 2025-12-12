import React, { useState } from 'react';
import Logo from '../../components/Logo';
import { TiThMenuOutline } from 'react-icons/ti';
import { ImCancelCircle } from 'react-icons/im';
import useAuthHook from '../../customHook/useAuthHook';
import ThemeToggle from '../../components/ThemeToggle';
import { IoMenu } from 'react-icons/io5';

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
              <div className="relative mr-2 h-15 w-15 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-sky-400 to-red-500 shadow-md hover:scale-105 transition duration-300">
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
        <div className="p-4 bg-base-200 min-h-[90vh]">Page Content</div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-100 shadow-[0_4px_12px_rgba(0,0,0,0.25)] is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className={`menu w-full grow ${clicked ? "pt-0" : "pt-6"}`}>
            <li>
              <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right">
                {/* toggle icon */}
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="w-full btn-ghost text-2xl font-bold"
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
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
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
