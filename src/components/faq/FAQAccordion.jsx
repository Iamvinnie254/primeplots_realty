import React, { useState, useMemo } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import faqData from "../../data/faq.json";

const FAQAccordion = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  const categories = useMemo(
    () => ["All", ...new Set(faqData.map((f) => f.category))],
    [],
  );

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") return faqData;
    return faqData.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Category filter chips */}
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center gap-2.5 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`text-sm px-4 py-2 rounded-full border transition-colors duration-300 ${
              activeCategory === cat
                ? "bg-yellow-800 text-white border-yellow-800"
                : "bg-white text-gray-700 border-gray-200 hover:border-yellow-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, i) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              data-aos="fade-up"
              data-aos-delay={(i % 5) * 80}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleOpen(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
              >
                <span className="flex items-center gap-3 font-semibold text-gray-900 text-sm sm:text-base">
                  <FaQuestionCircle className="text-yellow-800 flex-shrink-0" />
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-yellow-800" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
                style={{ display: "grid" }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-500 text-sm py-10">
            No questions found in this category yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;
