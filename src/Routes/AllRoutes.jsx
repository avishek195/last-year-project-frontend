import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../Components/Loader/Loader.jsx";

const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const About = lazy(() => import("../Pages/About/About.jsx"));
const Error = lazy(() => import("../Pages/Error/Error.jsx"));
function AllRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default AllRoutes;
