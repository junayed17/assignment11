import React from "react";
import useRole from "../../customHook/useRole";
import {
  FaUsers,
  FaBook,
  FaCog,
  FaArrowRight,
  FaRocket,
  FaShapes,
} from "react-icons/fa";

const ROLE_CONFIG = {
  Admin: {
    title: "BookCurier | Admin Dashboard",
    message: "Global system control. Monitor books and manage user privileges.",
    icon: <FaCog />,
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    accent: "text-blue-500",
  },
  Librarian: {
    title: "BookCurier | Librarian Dashboard",
    message: "Collection oversight. Organize post and order.",
    icon: <FaBook />,
    gradient: "from-emerald-400 to-cyan-500",
    shadow: "shadow-emerald-500/20",
    accent: "text-emerald-500",
  },
  User: {
    title: "BookCurier | User Dashboard",
    message:
      "Your personal library space. Explore books and track your reading journey.",
    icon: <FaUsers />,
    gradient: "from-fuchsia-500 to-purple-600",
    shadow: "shadow-purple-500/20",
    accent: "text-purple-500",
  },
};

const DashboardHome = () => {
  const { data } = useRole();
  const role = ROLE_CONFIG[data?.role] ? data.role : "User";
  const { message, icon, gradient, shadow, accent ,title} = ROLE_CONFIG[role];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 transition-colors duration-500 bg-base-50  overflow-hidden">
      <title>{title}</title>
      {/* --- Adaptive Background Blobs --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-gradient-to-r from-blue-400/20 to-purple-400/20  rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl space-y-8">
        {/* --- Header Section --- */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100/50  border border-base-200  backdrop-blur-md shadow-sm">
            <FaRocket className={`text-xs ${accent}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-base-500 ">
              Dashboard Live
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-base-900 ">
            Welcome,{" "}
            <span
              className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              {role}
            </span>
          </h1>
          <p className="text-base-500  text-lg font-medium max-w-lg mx-auto leading-relaxed">
            Everything you need to manage your library experience in one sleek
            place.
          </p>
        </div>

        {/* --- Main Hero Card (Glassmorphism) --- */}
        <div
          className={`relative group p-1 rounded-[2.5rem] bg-gradient-to-br ${gradient} ${shadow} transition-transform duration-500 hover:scale-[1.01]`}
        >
          <div className="bg-base-100  backdrop-blur-xl rounded-[2.4rem] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Feature Icon */}
              <div
                className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center text-4xl md:text-5xl text-base-100 shadow-2xl transform group-hover:rotate-6 transition-transform duration-500`}
              >
                {icon}
                {/* Decorative floating shapes */}
                <FaShapes className="absolute -top-4 -right-4 text-2xl opacity-20 text-base-100" />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-base-800 leading-tight">
                  Ready to dive in?
                </h2>
                <p className="text-base-600  text-lg leading-relaxed">
                  {message}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                  <button
                    className={`px-8 py-3 rounded-2xl bg-gradient-to-r ${gradient} text-base-100 font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2`}
                  >
                    Get Started <FaArrowRight />
                  </button>
                  <button className="px-8 py-3 rounded-2xl bg-base-100 text-base-700  font-bold hover:bg-base-200  transition-all">
                    View Logs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Secondary Status Bar --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-base-200  overflow-hidden"
            >
              <div
                className={`h-full w-1/2 bg-gradient-to-r ${gradient} opacity-50`}
              ></div>
            </div>
          ))}
        </div>

        {/* --- Footer Footer --- */}
        <p className="text-center text-base-400  text-[11px] font-bold uppercase tracking-[0.3em]">
          System Secure &bull; High Performance Mode
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
