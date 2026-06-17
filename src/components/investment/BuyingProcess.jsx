import React from "react";
import {
  FaSearch,
  FaMapMarkedAlt,
  FaFileContract,
  FaHandshake,
  FaCertificate,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Browse & Shortlist",
    desc: "Explore verified listings by location, type, and budget, and shortlist plots that match your goals.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Site Visit",
    desc: "Visit the actual plot with our consultant to confirm boundaries, access, and surroundings firsthand.",
  },
  {
    icon: <FaFileContract />,
    title: "Due Diligence",
    desc: "Our legal team conducts a registry search and confirms the title is genuine and free of disputes.",
  },
  {
    icon: <FaHandshake />,
    title: "Agreement & Payment",
    desc: "Sign the sale agreement and complete payment in full or via an agreed installment plan.",
  },
  {
    icon: <FaCertificate />,
    title: "Title Transfer",
    desc: "We process the official transfer at the Lands Registry until the title deed is registered in your name.",
  },
];

const BuyingProcess = () => {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Our Simple 5-Step Buying Process
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          <div className="absolute top-7 left-0 right-0 h-0.5 bg-gray-200" />
          {steps.map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative flex flex-col items-center text-center px-2"
            >
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-800 text-white text-xl mb-4 ring-4 ring-stone-50">
                {step.icon}
              </div>
              <span className="text-xs font-semibold text-yellow-800 mb-1">
                Step {i + 1}
              </span>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">
                {step.title}
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-800 text-white text-lg">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-grow bg-gray-200 mt-2" />
                )}
              </div>
              <div className="pb-2">
                <span className="text-xs font-semibold text-yellow-800">
                  Step {i + 1}
                </span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyingProcess;
