import React from "react";
import { FaFilter, FaRedo } from "react-icons/fa";

const PropertyFilters = ({ filters, onFilterChange, onReset }) => {
  const handleChange = (e) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div
      data-aos="fade-up"
      className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="flex items-center gap-2 font-bold text-gray-900">
          <FaFilter className="text-yellow-800" />
          Filter Properties
        </h3>
        <button
          onClick={onReset}
          type="button"
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-yellow-800 transition-colors duration-300"
        >
          <FaRedo className="text-xs" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="filter-type"
            className="text-sm font-medium text-gray-700"
          >
            Property Type
          </label>
          <select
            id="filter-type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          >
            <option value="">All Types</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Investment">Investment</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="filter-location"
            className="text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            id="filter-location"
            name="location"
            type="text"
            value={filters.location}
            onChange={handleChange}
            placeholder="e.g. Kajiado"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="filter-budget"
            className="text-sm font-medium text-gray-700"
          >
            Budget Range
          </label>
          <select
            id="filter-budget"
            name="budget"
            value={filters.budget}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          >
            <option value="">Any Budget</option>
            <option value="0-1000000">Under 1M</option>
            <option value="1000000-5000000">1M - 5M</option>
            <option value="5000000-10000000">5M - 10M</option>
            <option value="10000000+">10M+</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="filter-sort"
            className="text-sm font-medium text-gray-700"
          >
            Sort By
          </label>
          <select
            id="filter-sort"
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
