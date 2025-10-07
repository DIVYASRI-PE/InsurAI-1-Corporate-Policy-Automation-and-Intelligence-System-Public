import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages (placeholder pages for testing)
import Dashboard from "./pages/Dashboard";
import ViewPolicies from "./pages/ViewPolicies";
import EnrollPolicy from "./pages/EnrollPolicy";
import SubmitClaim from "./pages/SubmitClaim";
import Analytics from "./pages/Analytics";
import Payments from "./pages/Payments";
import Notifications from "./pages/Notifications";
import Documents from "./pages/Documents";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Components
import NavBar from "./components/NavBar";

function App() {
  const isLoggedIn = true; // ✅ temporary for testing all pages

  return (
    <Router>
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-policies" element={<ViewPolicies />} />
        <Route path="/enroll-policy" element={<EnrollPolicy />} />
        <Route path="/submit-claim" element={<SubmitClaim />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
