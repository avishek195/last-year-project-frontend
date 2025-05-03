import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/Slices/authSlice";
import { LayoutDashboardIcon } from "lucide-react";

const Header = () => {
  const auth = useSelector((state) => state.auth.auth);
  // console.log("auth", auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{ bgcolor: "white", color: "text.primary" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Section: Home */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              sx={{ textTransform: "none" }}
            >
              Home
            </Button>
          </Box>

          {/* Right Section: Auth Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {auth ? (
              <>
                {auth?.role === "admin" ? (
                  <Button
                    component={Link}
                    to="/admin-dashboard"
                    startIcon={<LayoutDashboardIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    Admin Dashboard
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to="/dashboard"
                    startIcon={<LayoutDashboardIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    Dashboard
                  </Button>
                )}

                <Button
                  onClick={handleLogout}
                  startIcon={<LogoutIcon />}
                  sx={{ textTransform: "none" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  startIcon={<LoginIcon />}
                  sx={{ textTransform: "none" }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  startIcon={<PersonAddIcon />}
                  sx={{ textTransform: "none" }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Spacer to offset fixed AppBar height */}
      <Toolbar />
    </>
  );
};

export default Header;
