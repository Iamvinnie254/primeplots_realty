import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaHome,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PropertySearch = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    type: "",
    location: "",
    budget: "",
  });

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (filters.type) params.set("type", filters.type);
    if (filters.location) params.set("location", filters.location);
    if (filters.budget) params.set("budget", filters.budget);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 overflow-hidden">
      <form
        ref={containerRef}
        onSubmit={handleSearch}
        className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Property Type */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="type"
            className="text-sm font-medium text-gray-700 flex items-center gap-2"
          >
            <FaHome className="text-yellow-800" />
            Property Type
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          >
            <option value="">All Types</option>
            <option value="residential">Residential Plot</option>
            <option value="commercial">Commercial Plot</option>
            <option value="investment">Investment Plot</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="location"
            className="text-sm font-medium text-gray-700 flex items-center gap-2"
          >
            <FaMapMarkerAlt className="text-yellow-800" />
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={filters.location}
            onChange={handleChange}
            placeholder="e.g. Kitengela, Athi River"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          />
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="budget"
            className="text-sm font-medium text-gray-700 flex items-center gap-2"
          >
            <FaMoneyBillWave className="text-yellow-800" />
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={filters.budget}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          >
            <option value="">Any Budget</option>
            <option value="0-1000000">Under 1M</option>
            <option value="1000000-5000000">1M - 5M</option>
            <option value="5000000-10000000">5M - 10M</option>
            <option value="10000000+">10M+</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-transparent hidden sm:block select-none">
            Search
          </label>
          <button
            type="submit"
            className="w-full bg-yellow-800 hover:bg-yellow-700 text-white font-semibold rounded-lg px-4 py-2.5 text-sm flex items-center justify-center gap-2 transition-colors duration-300"
          >
            <FaSearch />
            Search Plots
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertySearch;
