import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/cta-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          data-aos="fade-up"
        >
          Ready To Own A Piece Of The Future?
        </h2>
        <p
          className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Speak with one of our investment consultants today and find the
          perfect plot to grow your wealth.
        </p>
        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Book A Consultation
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition-colors duration-300"
          >
            <FaPhoneAlt />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
