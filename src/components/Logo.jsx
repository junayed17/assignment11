import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2 transition-all duration-300"
    >
      {/* লোগো আইকন - সব সময় দেখাবে */}
      <div className="relative flex items-center justify-center">
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain 
                     transition-all duration-500 ease-in-out
                     group-hover:scale-110 group-hover:rotate-6"
          src="https://i.ibb.co.com/dswhbjqV/logo-removebg-preview-1.png"
          alt="BookCourier"
        />
        <div className="absolute inset-0 bg-sky-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {/* ব্র্যান্ডের নাম - স্মল স্ক্রিনে হিডেন থাকবে, বড় স্ক্রিনে (lg) দেখাবে */}
      <div className="hidden lg:flex flex-col">
       <h2 className="text-3xl font-black heading text-blue-600 tracking-tighter italic">
              Book<span className="text-base-content">Courier</span>
            </h2>
        {/* এনিমেটেড আন্ডারলাইন */}
        <div className="h-[2px] w-0 bg-gradient-to-r from-blue-600 to-transparent group-hover:w-full transition-all duration-500" />
      </div>
    </Link>
  );
};

export default Logo;
