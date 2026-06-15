import React, { useState } from "react";
import {
  FaClock,
  FaSearchLocation,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" sticky top-0 z-50">
      {/* top bar */}
      <div className=" bg-yellow-800 w-full hidden lg:block">
        <div className="top-bar flex justify-between items-center px-9 py-2 text-white text-sm max-width-6xl mx-auto">
          <p className="flex gap-2 items-center">
            {" "}
            <FaSearchLocation /> Utalii House, 2nd Floor, Moi Avenue, Nairobi,
            Kenya <br />
            <FaClock /> Mon - Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM
          </p>

          <p className="flex gap-2 items-center">
            {" "}
            <FaPhoneAlt /> Call us on: 123-456-7890
          </p>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar bg-white/90 shadow-md px-9 py-4 ">
        <div className="logo flex justify-between items-center max-w-7xl mx-auto">
          {/* LOGO */}
          <div>
            <Link to={"/"} className="text-2xl font-bold text-yellow-800">
              PrimePlots Realty
            </Link>
          </div>
          {/* desktop navigation */}
          <div className="hidden lg:block">
            <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
              <li>
                <Link to={"/properties"} className="hover:text-yellow-800">
                  Properties
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:text-yellow-800">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/testimonials"} className="hover:text-yellow-800">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to={"/investment-guide"}
                  className="hover:text-yellow-800"
                >
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="hover:text-yellow-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/faq"} className="hover:text-yellow-800">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* contact button */}
          <div className="hidden lg:block">
            <Link
              to={"/contact"}
              className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-700"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button  */}
          <div>
            <div className="lg:hidden">
              {showMenu ? (
                <FaTimes
                  size={30}
                  onClick={toggleMenu}
                  className="cursor-pointer"
                />
              ) : (
                <FaBars
                  size={30}
                  onClick={toggleMenu}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
