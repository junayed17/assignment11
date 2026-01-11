import React from "react";
import Footer from "./Footer";
import Navber from "./Navber";
import ThemeToggle from "../../components/ThemeToggle";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="mx-[2px]">
      <header>
        <Navber />
      </header>
      <main className="max-w-[1440px] mx-auto min-h-[70vh]">
        <div className="mx-2">
          <Outlet />
        </div>
      </main>
      <footer className="max-w-[1440px] lg:mx-auto align-bottom">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
