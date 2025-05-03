import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { studentLogIn } from "../../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";
const Login = () => {
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
    await dispatch(
      studentLogIn({
        email: loginData.email,
        password: loginData.password,
      })
    ); // Dispatching the login action
    navigate("/"); // change path as needed
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
            Welcome Back
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
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-600 hover:underline font-medium"
            >
              Sign Up
            </a>
          </p>
        </motion.div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
