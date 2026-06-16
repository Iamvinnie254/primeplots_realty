import React from "react";
import {
  FaHandshake,
  FaEye as FaTransparency,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake />,
    title: "Integrity",
    desc: "We do business honestly, even when it's not the easiest path.",
  },
  {
    icon: <FaTransparency />,
    title: "Transparency",
    desc: "No hidden costs, no fine print surprises — what we say is what you get.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centered",
    desc: "Every decision we make starts with what's best for our clients.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "We continuously improve how land is bought, sold, and verified.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="text-center bg-stone-50 border border-gray-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-800 text-white text-xl mb-4 mx-auto">
                {v.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
