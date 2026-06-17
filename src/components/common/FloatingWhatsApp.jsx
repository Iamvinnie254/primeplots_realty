import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const FloatingWhatsApp = ({
  phoneNumber = "254702387039",
  message = "Hi, I'd like to know more about your land plots.",
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-full pl-4 pr-2 py-2 mb-1 animate-fade-in">
          <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
            Chat with us
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 text-white text-2xl shadow-lg transition-colors duration-300"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;