import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
