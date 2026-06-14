// MobileNav.jsx
import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNav = ({ showMenu, toggleMenu }) => {
  const navLinks = [
    { to: "/properties", label: "Properties" },
    { to: "/about", label: "About" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/investment-guide", label: "Investment Guide" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          showMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sliding panel */}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            size={26}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-700"
          />
        </div>

        <ul className="flex flex-col gap-6 px-6 pt-20 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={toggleMenu}
                className="hover:text-yellow-800"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-700 inline-block"
            >
              Let's Talk
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
