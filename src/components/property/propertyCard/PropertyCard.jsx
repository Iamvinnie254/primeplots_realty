import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const { id, title, location, price, size, type, image, status } = property;

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-yellow-800 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
          {type}
        </span>
        {status && (
          <span className="absolute top-3 right-3 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <FaCheckCircle className="text-yellow-800" />
            {status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
          {title}
        </h3>

        <p className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
          <FaMapMarkerAlt className="text-yellow-800 flex-shrink-0" />
          {location}
        </p>

        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-bold text-yellow-800">
            KES {Number(price).toLocaleString()}
          </p>
          <p className="flex items-center gap-1.5 text-gray-700 text-sm">
            <FaRulerCombined className="text-gray-500" />
            {size}
          </p>
        </div>

        <Link
          to={`/properties/${id}`}
          className="group/btn w-full inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-yellow-800 hover:bg-yellow-800 hover:text-white text-gray-900 font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors duration-300"
        >
          View Details
          <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
