import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="text-center flex items-center justify-center flex-col">
      <img
        className="
          w-18 sm:w-23 sm:h-18
          hover:p-2 
          rounded-full 
           duration-300
        "
        src="https://i.ibb.co.com/dswhbjqV/logo-removebg-preview-1.png"
        alt="BookCourier Logo"
        title="BookCourier"
      />
      <h1
        className="heading text-4xl hidden lg:block font-bold 
bg-gradient-to-r from-blue-500 via-sky-400 to-red-500 
bg-clip-text text-transparent"
      >
        BookCourier
      </h1>
    </Link>
  );
};

export default Logo;
