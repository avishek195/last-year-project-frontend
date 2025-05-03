import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isStudent } from "../Redux/Slices/authSlice";

const ProtectedRoute = ({ children }) => {
  // Replace this with your real auth check:
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));
  const student = isStudent();
  const location = useLocation();

  if (!isAuthenticated || !student) {
    // Redirect to login, preserving the location they were
    // trying to go so you can send them back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
