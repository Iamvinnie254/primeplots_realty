import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const infoItems = [
  {
    icon: <FaPhoneAlt />,
    label: "Call Us",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: <FaEnvelope />,
    label: "Email Us",
    value: "info@primeplotsrealty.com",
    href: "mailto:info@primeplotsrealty.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Visit Us",
    value: "Westlands Business Park, Nairobi, Kenya",
    href: null,
  },
  {
    icon: <FaClock />,
    label: "Working Hours",
    value: "Mon – Fri: 8:00 AM – 5:00 PM, Sat: 9:00 AM – 1:00 PM",
    href: null,
  },
];

const ContactInfo = () => {
  return (
    <div data-aos="fade-up" className="space-y-5">
      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
        {infoItems.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-yellow-800 text-white">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-700 text-sm hover:text-yellow-800 transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-700 text-sm">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/254702387039"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-300"
      >
        <FaWhatsapp className="text-lg" />
        Chat With Us On WhatsApp
      </a>
    </div>
  );
};

export default ContactInfo;
