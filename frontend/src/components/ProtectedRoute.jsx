import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

/**
 * ProtectedRoute
 * Restricts page access to authenticated users (and optional roles)
 * Usage: <ProtectedRoute roles={['ADMIN']}><AdminDashboard /></ProtectedRoute>
 */
const ProtectedRoute = ({ children, roles }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  return children;
};

export default ProtectedRoute;
