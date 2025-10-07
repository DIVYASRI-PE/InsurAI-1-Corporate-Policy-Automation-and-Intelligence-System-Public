// src/routes.js

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import OTPVerify from './pages/auth/OTPVerify'
import Dashboard from './pages/dashboard/Dashboard'
import ViewPolicies from './pages/policies/ViewPolicies'
import EnrollPolicy from './pages/policies/EnrollPolicy'
import SubmitClaim from './pages/claims/SubmitClaim'
import TrackClaim from './pages/claims/TrackClaim'
import Payments from './pages/payments/Payments'
import Analytics from './pages/analytics/Analytics'
import Documents from './pages/documents/Documents'
import Users from './pages/users/Users'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

export default function AppRoutes() {
return ( <Router> <Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/otp-verify" element={<OTPVerify />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/policies/view" element={<ViewPolicies />} />
<Route path="/policies/enroll" element={<EnrollPolicy />} />
<Route path="/claims/submit" element={<SubmitClaim />} />
<Route path="/claims/track" element={<TrackClaim />} />
<Route path="/payments" element={<Payments />} />
<Route path="/analytics" element={<Analytics />} />
<Route path="/documents" element={<Documents />} />
<Route path="/users" element={<Users />} />
<Route path="/reports" element={<Reports />} />
<Route path="/settings" element={<Settings />} />
<Route path="*" element={<Dashboard />} /> {/* Default route */} </Routes> </Router>
)
}
