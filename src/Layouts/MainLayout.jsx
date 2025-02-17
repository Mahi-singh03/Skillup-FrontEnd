import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar.jsx"; // Import your navbar

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* Navbar will be present on all pages inside MainLayout */}
      <Outlet />  {/* This renders the child route */}
    </>
  );
};

export default MainLayout;
