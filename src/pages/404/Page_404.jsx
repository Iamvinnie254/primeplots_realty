import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaMapMarkedAlt } from "react-icons/fa";

const Page_404 = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white py-16 px-4">
      <div data-aos="fade-up" className="text-center max-w-lg mx-auto">
        <p className="text-yellow-800 font-extrabold text-7xl sm:text-8xl mb-2">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          This Plot Doesn't Exist
        </h1>
        <p className="text-gray-700 mb-8">
          The page you're looking for may have been moved, renamed, or never
          existed. Let's get you back on solid ground.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <FaHome />
            Back To Home
          </Link>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 border-2 border-yellow-800 text-yellow-800 hover:bg-yellow-800 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <FaMapMarkedAlt />
            Browse Properties
          </Link>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow-800 text-sm transition-colors duration-300"
        >
          <FaSearch className="text-xs" />
          Or contact us if you think this is a mistake
        </Link>
      </div>
    </div>
  );
};

export default Page_404;
