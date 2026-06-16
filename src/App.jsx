import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Page_404 from "./pages/404/Page_404";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import FAQ from "./pages/faq/FAQ";
import Properties from "./pages/properties/Properties";
import Testimonials from "./pages/testimonials/Testimonials";
import Investment_Guide from "./pages/investment_guide/Investment_Guide";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/investment-guide" element={<Investment_Guide />} />
            <Route path="*" element={<Page_404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
