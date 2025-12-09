import React from "react";
import Footer from "./Footer";
import Navber from "./Navber";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navber />
      </header>
      <main>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
