import React from "react";
import {
  FaFileContract,
  FaUserTie,
  FaMapMarkedAlt,
  FaHandHoldingUsd,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaFileContract />,
    title: "Verified Title Deeds",
    desc: "Every plot we list undergoes strict legal verification, so you invest with full confidence and zero ambiguity.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Consultancy",
    desc: "Our seasoned real estate advisors guide you through every decision, from site visits to closing the deal.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Prime Locations",
    desc: "We curate plots in high-growth corridors poised for rapid appreciation and infrastructural development.",
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "Flexible Payment Plans",
    desc: "Own land sooner with installment options tailored to your budget and financial goals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Why PrimePlot Realty
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Built On Trust, Driven By Results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-amber-50 border border-gray-200 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-800 text-white text-xl mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
