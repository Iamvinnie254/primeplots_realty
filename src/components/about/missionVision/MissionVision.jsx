import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-amber-50 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          data-aos="fade-up"
          className="bg-white border border-gray-200 rounded-xl p-7 sm:p-8"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-800 text-white text-xl mb-5">
            <FaBullseye />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To simplify land ownership and investment in Kenya by providing
            verified, transparent, and accessible plots backed by expert
            consultancy at every step.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white border border-gray-200 rounded-xl p-7 sm:p-8"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-800 text-white text-xl mb-5">
            <FaEye />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become East Africa's most trusted land investment brand,
            empowering a generation to build lasting generational wealth through
            real estate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
