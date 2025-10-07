import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/policies", label: "Policies" },
    { path: "/claims", label: "Claims" },
    { path: "/payments", label: "Payments" },
    { path: "/analytics", label: "Analytics" },
    { path: "/chatbot", label: "Chatbot" },
  ];

  return (
    <motion.aside
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-[60px] left-0 h-full w-64 bg-secondary text-white p-6 shadow-xl flex flex-col"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`p-3 rounded-lg font-medium transition ${
              location.pathname === item.path
                ? "bg-white text-blue-800"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
