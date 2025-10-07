import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

// Auth
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// Dashboards
import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
import ManagerDashboard from "../pages/Dashboard/ManagerDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";

// Policies
import ViewPolicies from "../pages/Policies/ViewPolicies";
import EnrollPolicy from "../pages/Policies/EnrollPolicy";
import PolicyComparison from "../pages/Policies/PolicyComparison";
import PolicyRecommendations from "../pages/Policies/PolicyRecommendations";

// Claims
import SubmitClaim from "../pages/Claims/SubmitClaim";
import ClaimStatus from "../pages/Claims/ClaimStatus";
import ManageClaims from "../pages/Claims/ManageClaims";

// Payments
import PaymentPage from "../pages/Payments/PaymentPage";
import PaymentHistory from "../pages/Payments/PaymentHistory";

// Analytics
import Insights from "../pages/Analytics/Insights";
import FraudDetection from "../pages/Analytics/FraudDetection";
import PredictiveTrends from "../pages/Analytics/PredictiveTrends";

// Documents
import UploadDocuments from "../pages/Documents/UploadDocuments";
import ViewDocuments from "../pages/Documents/ViewDocuments";

// Chatbot
import ChatbotPage from "../pages/Chatbot/ChatbotPage";
import VoiceAssistant from "../pages/Chatbot/VoiceAssistant";

// Notifications, Reports, Settings
import NotificationsPage from "../pages/Notifications/NotificationsPage";
import ReportsPage from "../pages/Reports/ReportsPage";
import SettingsPage from "../pages/Settings/SettingsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
          <Route path="/dashboard/manager" element={<ManagerDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />

          <Route path="/policies/view" element={<ViewPolicies />} />
          <Route path="/policies/enroll" element={<EnrollPolicy />} />
          <Route path="/policies/compare" element={<PolicyComparison />} />
          <Route path="/policies/recommendations" element={<PolicyRecommendations />} />

          <Route path="/claims/submit" element={<SubmitClaim />} />
          <Route path="/claims/status" element={<ClaimStatus />} />
          <Route path="/claims/manage" element={<ManageClaims />} />

          <Route path="/payments" element={<PaymentPage />} />
          <Route path="/payments/history" element={<PaymentHistory />} />

          <Route path="/analytics/insights" element={<Insights />} />
          <Route path="/analytics/fraud" element={<FraudDetection />} />
          <Route path="/analytics/trends" element={<PredictiveTrends />} />

          <Route path="/documents/upload" element={<UploadDocuments />} />
          <Route path="/documents/view" element={<ViewDocuments />} />

          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/chatbot/voice" element={<VoiceAssistant />} />

          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
