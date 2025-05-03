import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { studentRegister } from "../../Redux/Slices/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enrollment: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      studentRegister({
        name: formData.name,
        email: formData.email,
        enrollmentNumber: formData.enrollment,
        password: formData.password,
      })
    );
    if (data?.payload) {
      navigate("/login");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 p-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              label="Full Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              type="email"
            />
            <TextField
              label="Enrollment Number"
              variant="outlined"
              name="enrollment"
              value={formData.enrollment}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              value={formData.password}
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
                Sign Up
              </Button>
            </motion.div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:underline font-medium"
            >
              Log In
            </Link>
          </p>
        </motion.div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignUp;
