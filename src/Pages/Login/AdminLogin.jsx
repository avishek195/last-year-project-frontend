import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { adminLogIn, studentLogIn } from "../../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";
import UserLayout from "../../Layouts/UserLayout";
const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Assuming you are using Redux for state management
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      adminLogIn({
        email: loginData.email,
        password: loginData.password,
      })
    ); // Dispatching the login action
    if (data?.payload) {
      navigate("/admin-dashboard"); // Redirect to admin dashboard
    }
  };

  return (
    <UserLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              fullWidth
              type="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              fullWidth
              type="password"
            />
            <motion.div whileHover={{ scale: 1.03 }}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl"
                size="large"
              >
                Log In
              </Button>
            </motion.div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Are you student?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:underline font-medium"
            >
              Student Login
            </Link>
          </p>
        </motion.div>
      </div>
    </UserLayout>
  );
};

export default AdminLogin;
