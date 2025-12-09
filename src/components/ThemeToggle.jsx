import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
  const savedTheme = localStorage.getItem("daisyui-theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [savedTheme]);


  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("daisyui-theme", nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle bg-base-200 border-none shadow-md hover:scale-110 transition-all ml-4 text-2xl"
    >
      {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
    </button>
  );
};

export default ThemeToggle;
