import React from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaCoins,
  FaArrowRight,
} from "react-icons/fa";
const Investment_Guide_Img = "/assets/plot_photos/investment_guide_photo.png";

const benefits = [
  {
    icon: <FaChartLine />,
    title: "Consistent Appreciation",
    desc: "Land in high-growth corridors steadily appreciates, often outperforming traditional savings instruments.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Tangible, Secure Asset",
    desc: "Unlike volatile markets, land is a finite, physical asset you can see, visit, and pass on to generations.",
  },
  {
    icon: <FaCoins />,
    title: "Low Entry, High Reward",
    desc: "Start building wealth with flexible plans and entry points lower than most real estate alternatives.",
  },
];

const InvestmentBenefits = () => {
  return (
    <section className="bg-amber-50 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          data-aos="fade-right"
          className="relative rounded-2xl overflow-hidden h-80 sm:h-96 lg:h-full"
        >
          <img
            src={Investment_Guide_Img}
            alt="Wide open investment land plot at sunset"
            className="w-full h-full object-cover"
          />
        </div>

        <div data-aos="fade-left">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Investment Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Why Land Remains The Smartest Investment
          </h2>

          <div className="space-y-5 mb-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-lg bg-yellow-800 text-white">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/investment-guide"
            className="group inline-flex items-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Read The Full Guide
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
