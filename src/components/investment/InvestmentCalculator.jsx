import React, { useState, useMemo } from "react";
import { FaCalculator, FaArrowRight } from "react-icons/fa";

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState(2000000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  const { futureValue, totalGain, gainPercent } = useMemo(() => {
    const fv = principal * Math.pow(1 + rate / 100, years);
    const gain = fv - principal;
    const gainPct = (gain / principal) * 100;
    return {
      futureValue: Math.round(fv),
      totalGain: Math.round(gain),
      gainPercent: gainPct.toFixed(0),
    };
  }, [principal, years, rate]);

  return (
    <section id="calculator" className="bg-amber-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Plan Your Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Investment Return Calculator
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-7">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="principal" className="text-sm font-medium text-gray-700">
                    Purchase Price (KES)
                  </label>
                  <span className="text-sm font-bold text-yellow-800">
                    {Number(principal).toLocaleString()}
                  </span>
                </div>
                <input
                  id="principal"
                  type="range"
                  min="500000"
                  max="20000000"
                  step="100000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-gray-200 accent-yellow-800"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="years" className="text-sm font-medium text-gray-700">
                    Holding Period (Years)
                  </label>
                  <span className="text-sm font-bold text-yellow-800">
                    {years}
                  </span>
                </div>
                <input
                  id="years"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-gray-200 accent-yellow-800"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="rate" className="text-sm font-medium text-gray-700">
                    Expected Annual Appreciation (%)
                  </label>
                  <span className="text-sm font-bold text-yellow-800">
                    {rate}%
                  </span>
                </div>
                <input
                  id="rate"
                  type="range"
                  min="3"
                  max="25"
                  step="1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-gray-200 accent-yellow-800"
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-stone-50 border border-gray-200 rounded-xl p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-5">
                <FaCalculator className="text-yellow-800" />
                <h3 className="font-bold text-gray-900 text-sm">
                  Projected Outcome
                </h3>
              </div>

              <div className="mb-5">
                <p className="text-gray-500 text-xs mb-1">
                  Estimated Future Value
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-800">
                  KES {futureValue.toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Total Gain</p>
                  <p className="text-gray-900 font-bold">
                    KES {totalGain.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Growth</p>
                  <p className="text-gray-900 font-bold">+{gainPercent}%</p>
                </div>
              </div>

              <a
                href="/properties"
                className="group inline-flex items-center justify-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors duration-300"
              >
                Find A Matching Plot
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-6 text-center">
            This is an illustrative estimate only and does not constitute
            financial advice or a guaranteed return.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;