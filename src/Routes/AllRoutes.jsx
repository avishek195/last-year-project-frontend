import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../Components/Loader/Loader.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
// import Roombooking from "../Pages/RoomBooking/Roombooking.jsx";
import AdminLogin from "../Pages/Login/AdminLogin.jsx";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard.jsx";
import { isAdmin } from "../Redux/Slices/authSlice.js";
import AdminRoute from "./AdminRoute.jsx";
import Protect from "./Protect.jsx";
import ProfilePage from "../Pages/Dashboard/Student/ProfilePage.jsx";
import MyRoomPage from "../Pages/Dashboard/Student/MyRoomPage.jsx";
import ComplainePage from "../Pages/Dashboard/Student/ComplainePage.jsx";
import StudentsPage from "../Pages/Dashboard/Admin/StudentsPage.jsx";
import RoomsPage from "../Pages/Dashboard/Admin/RoomsPage.jsx";
import ComplainesPage from "../Pages/Dashboard/Admin/ComplainesPage.jsx";
import DashboardFront from "../Pages/Dashboard/Student/DasboardFront.jsx";
import AdminDashboardFront from "../Pages/Dashboard/Admin/AdminDashboardFront.jsx";

const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const About = lazy(() => import("../Pages/About/About.jsx"));
const Error = lazy(() => import("../Pages/Error/Error.jsx"));
const SignUp = lazy(() => import("../Pages/SignUp/Signup.jsx"));
const Login = lazy(() => import("../Pages/Login/Login.jsx"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard.jsx"));

function AllRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Protect>
                <Home />
              </Protect>
            }
          />
          {/* <Route path="profile" element={<ProfilePage />} />
            <Route path="myroom" element={<MyRoomPage />} />
            <Route path="complaine" element={<ComplainePage />} />
          </Route> */}
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<DashboardFront />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="myroom" element={<MyRoomPage />} />
            <Route path="complaine" element={<ComplainePage />} />
          </Route>
          <Route
            path="/admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          >
            <Route path="" element={<AdminDashboardFront />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="rooms" element={<RoomsPage />} />
            <Route path="complaines" element={<ComplainesPage />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default AllRoutes;
