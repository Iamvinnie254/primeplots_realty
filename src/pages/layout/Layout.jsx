import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import ScrollProgress from "../../components/common/ScrollProgress";
import FloatingWhatsApp from "../../components/common/FloatingWhatsApp";
import BackToTop from "../../components/common/BackToTop";

const Layout = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
};

export default Layout;
