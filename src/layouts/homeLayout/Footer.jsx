import { NavLink } from "react-router";
import useAuthHook from "../../customHook/useAuthHook";
import { FaXTwitter, FaFacebook, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  const { user } = useAuthHook();
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
    <footer 
      className="relative bg-transparent border-t border-base-300 pt-10 pb-6 mt-16"
      data-aos="fade-up"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-6">
        
        {/* Brand & Socials - One Line on Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <div className="text-left">
                  <div className="hidden lg:flex flex-col">
       <h2 className="text-2xl font-black heading text-blue-600 tracking-tighter italic">
              Book<span className="text-base-content">Courier</span>
            </h2>
      </div>
            <p className="text-xs bodyFont opacity-60">Connecting Stories, Delivering Joy.</p>
          </div>

          {/* Quick Links */}
          <nav className="flex gap-6 text-sm font-bold uppercase tracking-wider">
          <ul className="style-none flex gap-6 text-sm font-bold uppercase tracking-wider">
             {
            links
           }
          </ul>
          </nav>

          {/* Social Icons - Small & Clean */}
          <div className="flex gap-4">
            <a href="https://x.com/" className="text-base-content/60 hover:text-blue-600 transition-transform hover:-translate-y-1"><FaXTwitter size={18} /></a>
            <a href="https://www.youtube.com/watch?v=pyFGIDVaVck" className="text-base-content/60 hover:text-red-600 transition-transform hover:-translate-y-1"><FaYoutube size={20} /></a>
            <a href="https://www.facebook.com/junayed.ahmed.10690203" className="text-base-content/60 hover:text-blue-700 transition-transform hover:-translate-y-1"><FaFacebook size={18} /></a>
          </div>
        </div>

        {/* Contact Info - Compact Row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-medium opacity-70 border-y border-base-300/50 py-4 w-full">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:BookCourier@gmail.com">BookCourier@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-600" />
            <a href="tel:+880123456789">+880 123 456 789</a>
          </div>
          <div className="text-center">123 Street, City, Bangladesh</div>
        </div>

        {/* Copyright - Very Small */}
        <div className="text-[10px] opacity-50 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} - <span className="font-bold">BookCourier Ltd</span>
        </div>
      </div>

      {/* নিচের সেই সিগনেচার গ্রেডিয়েন্ট লাইন */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-400"></div>
    </footer>
  );
};

export default Footer;