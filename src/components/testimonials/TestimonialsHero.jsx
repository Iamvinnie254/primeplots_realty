import React from "react";
const CelebratingClients = "/assets/testimonials/celebrating.jpg";

const TestimonialsHero = () => {
  return (
    <section className="relative bg-black py-20 sm:py-28">
      <div className="absolute inset-0">
        <img
          src= {CelebratingClients}
          alt="Happy clients celebrating their new land plot"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          data-aos="fade-up"
          className="inline-block bg-yellow-800/90 text-white text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5"
        >
          Client Success Stories
        </span>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Real Stories From Real Investors
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto"
        >
          Hear directly from clients who turned land into lasting wealth with
          ShambaLako Ventures.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsHero;
