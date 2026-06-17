import React from "react";
import FAQHeroImg from "../../assets/faq/faq-hero.png";

const FAQHero = () => {
  return (
    <section className="relative bg-black py-20 sm:py-28">
      <div className="absolute inset-0">
        <img
          src={FAQHeroImg}
          alt="Client and consultant discussing land investment questions"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          data-aos="fade-up"
          className="inline-block bg-yellow-800/90 text-white text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5"
        >
          Frequently Asked Questions
        </span>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Answers To Your Land Investment Questions
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto"
        >
          Can't find what you're looking for? Reach out and our team will answer
          personally.
        </p>
      </div>
    </section>
  );
};

export default FAQHero;
