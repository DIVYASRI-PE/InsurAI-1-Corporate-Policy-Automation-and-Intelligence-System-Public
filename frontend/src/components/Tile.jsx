import React from "react";
import { motion } from "framer-motion";

const Tile = ({ title, value, icon, color = "bg-white" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`${color} shadow-md rounded-2xl p-6 flex items-center justify-between hover:shadow-lg`}
    >
      <div>
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      {icon && <div className="text-3xl text-primary">{icon}</div>}
    </motion.div>
  );
};

export default Tile;
