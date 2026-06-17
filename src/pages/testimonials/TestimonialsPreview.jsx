import React from "react";
import { FaQuoteLeft, FaStar, FaArrowRight } from "react-icons/fa";
import testimonialsData from "../../data/testimonials.json";
import { Link } from "react-router-dom";
const TestimonialsPreview = () => {
  const preview = testimonialsData.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Trusted By Investors Like You
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((t, i) => (
            <div
              key={t.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-stone-50 border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <FaQuoteLeft className="text-yellow-800 text-2xl mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-grow">
                {t.review}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <div
                    className="flex text-yellow-600 text-xs"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to={"testimonials"}
            className="group inline-flex items-center gap-2 text-yellow-800 font-semibold hover:text-yellow-700 transition-colors duration-300"
          >
            View All Testimonials
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
