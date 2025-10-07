import axios from "axios";

// Set your backend base URL
const API_URL = "http://localhost:8080/api"; // Change if your Spring Boot runs on another port

// ===================== Policies =====================

// Fetch all policies
export const getPolicies = () => {
  return axios.get(`${API_URL}/policies`);
};

// Add new policy (admin)
export const addPolicy = (policyData) => {
  return axios.post(`${API_URL}/policies`, policyData);
};

// ===================== Claims =====================

// File a new claim
export const fileClaim = (formData) => {
  return axios.post(`${API_URL}/claims`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Fetch claims for a user
export const getClaims = (userId) => {
  return axios.get(`${API_URL}/claims/user/${userId}`);
};

// ===================== Payments =====================

// Make payment for a policy
export const makePayment = (paymentData) => {
  return axios.post(`${API_URL}/payments`, paymentData);
};

// Fetch payments for a user
export const getPayments = (userId) => {
  return axios.get(`${API_URL}/payments/user/${userId}`);
};

// ===================== Users =====================

// User registration
export const registerUser = (userData) => {
  return axios.post(`${API_URL}/users/register`, userData);
};

// User login
export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/users/login`, credentials);
};

// Fetch user profile
export const getUserProfile = (userId) => {
  return axios.get(`${API_URL}/users/${userId}`);
};

// ===================== Admin =====================

// Fetch all users (admin)
export const getAllUsers = () => {
  return axios.get(`${API_URL}/users`);
};

// Delete user (admin)
export const deleteUser = (userId) => {
  return axios.delete(`${API_URL}/users/${userId}`);
};
