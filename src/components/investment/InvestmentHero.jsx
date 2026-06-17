import React from "react";
import { FaArrowRight, FaCalculator } from "react-icons/fa";

const InvestmentHero = () => {
  return (
    <section className="bg-[#1c1505] py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-[420px] lg:min-h-[460px]">
          {/* Left: copy */}
          <div
            data-aos="fade-right"
            className="py-14 sm:py-16 lg:py-0 flex flex-col justify-center lg:pr-12"
          >
            <span className="inline-block bg-yellow-600/15 text-yellow-600 text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              Investment Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.4rem] font-bold text-white leading-tight mb-4">
              Turn Land Into A Long-Term Wealth Strategy
            </h1>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
              A practical walkthrough of why land works, how to buy safely,
              and what kind of return you can realistically expect.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#why-invest"
                className="group inline-flex items-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Start Reading
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <FaCalculator className="text-sm" />
                Try The Calculator
              </a>
            </div>
          </div>

          {/* Right: stats panel */}
          <div
            data-aos="fade-left"
            className="bg-white/[0.04] border-t lg:border-t-0 lg:border-l border-white/10 py-10 sm:py-12 lg:py-0 px-4 sm:px-8 lg:px-10 flex flex-col justify-center gap-6"
          >
            <div>
              <p className="text-gray-500 text-xs mb-1.5">
                Avg. 5-Year Appreciation
              </p>
              <p className="text-yellow-600 text-3xl font-bold">+62%</p>
            </div>

            <div className="h-px bg-white/10" />

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gray-500 text-xs mb-1.5">Plots Sold</p>
                <p className="text-white text-xl font-bold">850+</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1.5">Years Active</p>
                <p className="text-white text-xl font-bold">12+</p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <p className="text-gray-500 text-xs mb-1.5">Happy Investors</p>
              <p className="text-white text-xl font-bold">1,200+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHero;