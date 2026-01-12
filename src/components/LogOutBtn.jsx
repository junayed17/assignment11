import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import useAuthHook from "../customHook/useAuthHook";
import toast from "react-hot-toast";

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
            className=" is-drawer-close:tooltip is-drawer-close:tooltip-right text-slate-500 dark:text-slate-400 "
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
          onClick={handleSignOut}
          // এখানে 'relative' এবং 'inline-block' যোগ করা হয়েছে
          className="relative inline-block w-full py-4 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
        >
          {/* বাটন এনিমেশন ইফেক্টস */}
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>

          {/* টেক্সট কন্টেইনারে relative z-10 দেওয়া হয়েছে যাতে এটি এনিমেশনের উপরে থাকে */}
          <div className="relative z-10 flex items-center justify-center gap-2">
            <span className="uppercase tracking-[0.2em] text-xs">LogOut</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default LogOutBtn;
