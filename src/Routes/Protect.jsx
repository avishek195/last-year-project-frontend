import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protect = ({ children }) => {
  // Replace this with your real auth check:
  //   const data = localStorage.getItem("authToken") === null ? null : JSON.parse(localStorage.getItem("authToken"));
  //   console.log(localStorage.getItem("authToken"));

  const isAuthenticated = Boolean(localStorage.getItem("authToken"));

  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, preserving the location they were
    // trying to go so you can send them back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default Protect;
