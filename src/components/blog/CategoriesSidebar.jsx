import React from "react";
import { FaFolder, FaLayerGroup } from "react-icons/fa";

const CategoriesSidebar = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <aside data-aos="fade-up" className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
        <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
          <FaLayerGroup className="text-yellow-800" />
          Categories
        </h3>
        <ul className="space-y-1.5">
          <li>
            <button
              type="button"
              onClick={() => onCategoryChange("")}
              aria-pressed={activeCategory === ""}
              className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors duration-300 ${
                activeCategory === ""
                  ? "bg-yellow-800 text-white"
                  : "text-gray-700 hover:bg-stone-50"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaFolder className="text-xs" />
                All Articles
              </span>
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => onCategoryChange(cat)}
                aria-pressed={activeCategory === cat}
                className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors duration-300 ${
                  activeCategory === cat
                    ? "bg-yellow-800 text-white"
                    : "text-gray-700 hover:bg-stone-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FaFolder className="text-xs" />
                  {cat}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-yellow-800 rounded-xl p-6 text-center">
        <h4 className="text-white font-bold mb-2">Need Personal Advice?</h4>
        <p className="text-yellow-100 text-sm mb-4">
          Talk to one of our consultants about your investment goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center w-full bg-white text-yellow-800 font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </aside>
  );
};

export default CategoriesSidebar;