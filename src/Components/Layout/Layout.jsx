import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Dashdoard/Navbar/Navbar";
import Footer from "../Dashdoard/Footer/Footer";
import Newletter from "../Newsletter/Newletter";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Newletter />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
