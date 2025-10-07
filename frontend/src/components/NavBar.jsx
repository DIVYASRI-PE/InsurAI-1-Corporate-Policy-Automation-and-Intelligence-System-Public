import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-primary text-white shadow-md px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="InsurAI Logo" className="w-10 h-10" />
        <h1 className="text-xl font-semibold tracking-wide">InsurAI</h1>
      </div>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/policies" className="hover:text-yellow-300">Policies</Link>
        </li>
        <li>
          <Link to="/claims" className="hover:text-yellow-300">Claims</Link>
        </li>
        <li>
          <Link to="/chatbot" className="hover:text-yellow-300">Chatbot</Link>
        </li>
      </ul>

      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-white text-primary px-4 py-2 rounded-md hover:bg-gray-100 font-semibold transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-yellow-400 text-primary px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
