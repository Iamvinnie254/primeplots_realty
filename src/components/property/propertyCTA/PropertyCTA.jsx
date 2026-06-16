import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const PropertyCTA = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-yellow-800 rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Can't Decide? Let's Talk.
      </h3>
      <p className="text-yellow-100 max-w-lg mx-auto mb-7">
        Book a free consultation and our advisors will help match you with the
        right plot for your budget and goals.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/contact"
          className="group inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-yellow-800 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Book A Consultation
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="https://wa.me/254702387039"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition-colors duration-300"
        >
          <FaWhatsapp />
          Chat On WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PropertyCTA;
