import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Investment Guide", href: "/investment-guide" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              Stay Ahead Of The Market
            </h3>
            <p className="text-gray-400 text-sm">
              Get new listings and investment insights delivered to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full lg:w-auto max-w-md gap-3"
          >
            <label htmlFor="footer-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter"
              type="email"
              required
              placeholder="Enter your email"
              className="flex-grow min-w-0 bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-800/50 focus:border-yellow-800"
            />
            <button
              type="submit"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-300"
            >
              Subscribe
              <FaArrowRight className="text-xs" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-yellow-800 font-extrabold text-2xl tracking-tight">
              ShambaLako
            </span>
            <span className="text-white font-light text-2xl">Ventures</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Helping individuals and families invest in verified, high-growth
            land plots across Kenya — with trust and transparency at every step.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/15 text-gray-300 hover:bg-yellow-800 hover:text-white hover:border-yellow-800 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-yellow-600 text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
            Resources
          </h4>
          <ul className="space-y-2.5">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-yellow-600 text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
            Get In Touch
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-800 mt-0.5 flex-shrink-0" />
              <span className="text-gray-400">
                Westlands, Nairobi, Kenya
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-yellow-800 mt-0.5 flex-shrink-0" />
              <a
                href="tel:+254702387039"
                className="text-gray-400 hover:text-yellow-600 transition-colors duration-300"
              >
                +254 702 387 039
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-yellow-800 mt-0.5 flex-shrink-0" />
              <a
                href="mailto:info@shambalakoventures.com"
                className="text-gray-400 hover:text-yellow-600 transition-colors duration-300"
              >
                info@shambalakoventures.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} ShambaLako Ventures. All rights reserved.</p>
          <p>
            Licensed Real Estate Consultancy — Estate Agents Registration Board,
            Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
