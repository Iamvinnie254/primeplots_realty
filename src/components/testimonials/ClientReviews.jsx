import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import testimonialsData from "../../data/testimonials.json";

const ClientReviews = () => {
  const reviews = testimonialsData.filter((t) => t.type === "written");

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            What Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Client Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((t, i) => (
            <div
              key={t.id}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
              className="bg-stone-50 border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <FaQuoteLeft className="text-yellow-800 text-2xl mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-grow">
                {t.review}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <div className="flex items-center gap-2">
                    <div
                      className="flex text-yellow-600 text-xs"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
