import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../components/Logo";
import ThemeToggle from "../../components/ThemeToggle";
import useAuthHook from "../../customHook/useAuthHook";
import LogOutBtn from "../../components/LogOutBtn";

const Navber = () => {
  const { user } = useAuthHook();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBaseStyle =
    "text-sm font-semibold transition-all duration-300 px-2 py-1 hover:text-blue-500 heading";
  const activeStyle = "text-blue-600 heading";
  const normalStyle = "text-base-400 heading";

  let linksData = [
    { to: "/", name: "Home" },
    { to: "/books", name: "Books" },
    { to: "/coverage", name: "Coverage" },
    { to: "/Aboutus", name: "About" },
  ];

  const links = (
    <>
      {linksData.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `${linkBaseStyle} ${isActive ? activeStyle : normalStyle}`
            }
          >
            {link.name.toUpperCase()}
          </NavLink>
        </li>
      ))}
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBaseStyle} ${isActive ? activeStyle : normalStyle}`
            }
          >
            DASHBOARD
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-50 transition-all duration-500 ease-in-out
      ${
        isScrolled
          ? "top-0 mt-0 shadow-lg  bg-base-100/90 backdrop-blur-xl"
          : "top-4 mt-0 px-2"
      }`}
    >
      <div
        className={`navbar bg-base-100 shadow-[0_4px_12px_rgba(0,0,0,0.25)] rounded-xl transition-all duration-500 
        ${isScrolled ? "rounded-none" : "rounded-3xl"}`}
      >
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn-ghost lg:hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow-xl border border-gray-100"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          <ThemeToggle />
          {user ? (
            <LogOutBtn />
          ) : (
            <Link
              to="/login"
              className="btn btn-neutral rounded-xl px-8 capitalize transition-all hover:bg-orange-600 border-none"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
