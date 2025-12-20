import React from "react";
import Footer from "./Footer";
import Navber from "./Navber";
import ThemeToggle from "../../components/ThemeToggle";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="bg-base-200 mx-2">
      <header>
        <Navber />
      </header>
      <main className="max-w-[1440px] mx-2 lg:mx-auto min-h-[70vh]">
        <Outlet />
      </main>
      <footer className="max-w-[1440px] mx-2 lg:mx-auto align-bottom">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
