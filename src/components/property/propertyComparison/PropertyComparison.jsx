import React, { useState } from "react";
import { FaTimes, FaBalanceScale } from "react-icons/fa";

const PropertyComparison = ({ properties }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const selected = properties.filter((p) => selectedIds.includes(p.id));

  return (
    <div
      data-aos="fade-up"
      className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6"
    >
      <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
        <FaBalanceScale className="text-yellow-800" />
        Compare Properties
        <span className="text-sm text-gray-500 font-normal">
          (select up to 3)
        </span>
      </h3>

      {/* Selector chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {properties.slice(0, 12).map((p) => {
          const isSelected = selectedIds.includes(p.id);
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => toggleSelect(p.id)}
              aria-pressed={isSelected}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                isSelected
                  ? "bg-yellow-800 text-white border-yellow-800"
                  : "bg-stone-50 text-gray-700 border-gray-200 hover:border-yellow-800"
              }`}
            >
              {p.title}
            </button>
          );
        })}
      </div>

      {selected.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-8">
          Select properties above to compare them side by side.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 text-gray-500 font-medium">
                  Feature
                </th>
                {selected.map((p) => (
                  <th key={p.id} className="text-left py-3 pr-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-gray-900">{p.title}</span>
                      <button
                        type="button"
                        onClick={() => toggleSelect(p.id)}
                        aria-label={`Remove ${p.title} from comparison`}
                        className="text-gray-400 hover:text-yellow-800"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Type", key: "type" },
                { label: "Location", key: "location" },
                { label: "Size", key: "size" },
              ].map((row) => (
                <tr key={row.key} className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-500">{row.label}</td>
                  {selected.map((p) => (
                    <td key={p.id} className="py-3 pr-4 text-gray-900">
                      {p[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="py-3 pr-4 text-gray-500">Price</td>
                {selected.map((p) => (
                  <td
                    key={p.id}
                    className="py-3 pr-4 font-bold text-yellow-800"
                  >
                    KES {Number(p.price).toLocaleString()}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PropertyComparison;
