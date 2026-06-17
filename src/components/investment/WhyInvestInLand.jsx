import React from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaCoins,
  FaInfinity,
  FaUserShield,
  FaSeedling,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaChartLine />,
    title: "Consistent Appreciation",
    desc: "Land in growth corridors has historically appreciated steadily, often outperforming savings accounts and fixed deposits over the same period.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Tangible, Secure Asset",
    desc: "Unlike stocks or crypto, land is a finite, physical asset you can visit, fence, and physically secure against loss.",
  },
  {
    icon: <FaCoins />,
    title: "Lower Entry Point",
    desc: "Compared to developed property, raw land offers a lower cost of entry with strong long-term upside as infrastructure catches up.",
  },
  {
    icon: <FaInfinity />,
    title: "Finite Supply",
    desc: "Land cannot be manufactured. As population and infrastructure grow, demand for well-located plots only increases.",
  },
  {
    icon: <FaUserShield />,
    title: "Generational Wealth",
    desc: "A verified title deed can be passed down directly, making land one of the cleanest vehicles for intergenerational wealth transfer.",
  },
  {
    icon: <FaSeedling />,
    title: "Multiple Use Cases",
    desc: "Hold for appreciation, build to rent, farm, or develop commercially — land adapts to your strategy as it evolves.",
  },
];

const WhyInvestInLand = () => {
  return (
    <section id="why-invest" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            The Case For Land
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Why Land Remains One of The Smartest Investments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
              className="bg-stone-50 border border-gray-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-800 text-white text-xl mb-4">
                {reason.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
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

export default WhyInvestInLand;
