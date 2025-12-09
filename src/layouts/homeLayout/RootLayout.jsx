import React from "react";
import Footer from "./Footer";
import Navber from "./Navber";
import ThemeToggle from "../../components/ThemeToggle";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navber />
      </header>
      <main className="max-w-[1440px] mx-2 lg:mx-auto">
        <Outlet />
      </main>
      <footer className="max-w-[1440px] mx-2 lg:mx-auto align-bottom">
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
