import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const OfficeLocation = ({
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.1!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OSczOC44IkU!5e0!3m2!1sen!2ske!4v0",
}) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
    >
      <div className="flex items-center gap-2 px-5 sm:px-6 py-4 border-b border-gray-200">
        <FaMapMarkedAlt className="text-yellow-800" />
        <h3 className="font-bold text-gray-900">Our Office Location</h3>
      </div>
      <div className="h-80 sm:h-96">
        <iframe
          title="PrimePlot Realty office location map"
          src={mapSrc}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default OfficeLocation;
