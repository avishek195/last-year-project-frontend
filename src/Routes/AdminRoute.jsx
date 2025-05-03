import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdmin } from "../Redux/Slices/authSlice";

const AdminRoute = ({ children }) => {
  // Replace this with your real auth check:
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));
  const Admin = isAdmin();
  // console.log(isAuthenticated, Admin);

  const location = useLocation();

  if (!isAuthenticated || !Admin) {
    // Redirect to login, preserving the location they were
    // trying to go so you can send them back after login
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default AdminRoute;
