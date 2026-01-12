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
import UserDashboard from "./UserDashboard";
import Librarian from "./Librian";

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
  const { message, icon, gradient, shadow, accent, title } = ROLE_CONFIG[role];
console.log(role);


if (!role) {
  return
}

return (
  <div>
    {role === "Librarian" ? <Librarian /> : <UserDashboard />}
  </div>
);
   
};

export default DashboardHome;
