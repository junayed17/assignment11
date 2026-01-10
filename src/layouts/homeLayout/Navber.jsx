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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // লজিক ফিক্স: কালারগুলো এখন কন্ডিশনাল হবে
  const getLinkStyle = ({ isActive }) => {
    return `text-sm font-bold transition-all duration-300 px-3 py-1 heading tracking-wider ${
      isActive 
        ? "text-blue-600 dark:text-blue-400 underline underline-offset-4 decoration-2" 
        : "text-slate-500 dark:text-slate-400 hover:text-blue-500"
    }`;
  };

  const linksData = [
    { to: "/", name: "Home" },
    { to: "/books", name: "Books" },
    { to: "/coverage", name: "Coverage" },
    { to: "/Aboutus", name: "About" },
  ];

  const links = (
    <>
      {linksData.map((link, index) => (
        <li key={index}>
          <NavLink to={link.to} className={getLinkStyle}>
            {link.name.toUpperCase()}
          </NavLink>
        </li>
      ))}
      {user && (
        <li>
          <NavLink to="/dashboard" className={getLinkStyle}>
            DASHBOARD
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`max-w-[1440px] fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out px
      ${isScrolled ? "top-0 w-full" : "top-4 w-full"}`}
    >
      <div
        className={`navbar bg-base-100/80 backdrop-blur-md transition-all duration-500 border border-base-300/50
        ${isScrolled 
          ? "rounded-none shadow-md py-2" 
          : "rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3 px-6"}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-52 p-4 shadow-2xl border border-base-300">
              {links}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <ThemeToggle />
          {user ? (
            <LogOutBtn />
          ) : (
            <Link
              to="/login"
              className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 dark:bg-blue-600 rounded-xl group transition-all duration-300 active:scale-95 shadow-lg"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative text-sm heading">Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;