import React from "react";
import PropertyCard from "../propertyCard/PropertyCard";
import { FaSearchMinus } from "react-icons/fa";

const PropertyGrid = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return (
      <div
        data-aos="fade-up"
        className="flex flex-col items-center text-center py-16 bg-white border border-gray-200 rounded-xl"
      >
        <FaSearchMinus className="text-4xl text-gray-300 mb-4" />
        <h3 className="font-bold text-gray-900 mb-1">No Properties Found</h3>
        <p className="text-gray-500 text-sm">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {properties.map((property, i) => (
        <div
          key={property.id}
          data-aos="fade-up"
          data-aos-delay={(i % 3) * 100}
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;
