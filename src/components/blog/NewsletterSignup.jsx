import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      data-aos="fade-up"
      className="bg-amber-50 border border-gray-200 rounded-2xl p-8 sm:p-10 text-center"
    >
      {submitted ? (
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-yellow-800 text-3xl mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            You're Subscribed!
          </h3>
          <p className="text-gray-700 text-sm">
            Look out for our next investment insights in your inbox.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Never Miss A Market Insight
          </h3>
          <p className="text-gray-700 text-sm mb-6 max-w-md mx-auto">
            Join our newsletter for fresh articles on land investment, legal
            guides, and market trends.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="blog-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="blog-newsletter"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow min-w-0 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
            />
            <button
              type="submit"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-300"
            >
              <FaPaperPlane className="text-xs" />
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewsletterSignup;
