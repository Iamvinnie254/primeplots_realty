import React from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const requirements = [
  "Original title deed matching the seller's identification",
  "Official Lands Registry search confirming clean ownership",
  "Land rates clearance certificate from the county government",
  "Surveyor's report confirming boundaries match the title",
  "Signed sale agreement drafted by a licensed conveyancing lawyer",
  "Consent to transfer (where applicable, e.g. leasehold land)",
];

const redFlags = [
  "Seller pressuring you to pay before verification is complete",
  "Title deed details that don't match the seller's ID",
  "Price significantly below market rate for the area",
  "Reluctance to allow a registry search or site survey",
];

const LegalRequirements = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Protect Your Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Legal Requirements & Red Flags
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Requirements */}
          <div
            data-aos="fade-right"
            className="bg-amber-50 border border-gray-200 rounded-xl p-6 sm:p-8"
          >
            <h3 className="font-bold text-gray-900 mb-5 text-lg">
              What You Need Before Buying
            </h3>
            <ul className="space-y-3.5">
              {requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-yellow-800 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red flags */}
          <div
            data-aos="fade-left"
            className="bg-stone-50 border border-gray-200 rounded-xl p-6 sm:p-8"
          >
            <h3 className="font-bold text-gray-900 mb-5 text-lg">
              Warning Signs To Watch For
            </h3>
            <ul className="space-y-3.5">
              {redFlags.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalRequirements;
