import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        data-aos="fade-up"
        className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 text-center"
      >
        <FaCheckCircle className="text-yellow-800 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-gray-700 text-sm">
          Thank you for reaching out. One of our consultants will get back to
          you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      data-aos="fade-up"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-5"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-1">
        Send Us A Message
      </h3>
      <p className="text-gray-500 text-sm mb-5">
        Fill out the form and our team will respond shortly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800 ${
              errors.name ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-xs">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800 ${
              errors.email ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-xs">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254 700 000 000"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="interest"
            className="text-sm font-medium text-gray-700"
          >
            I'm Interested In
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800"
          >
            <option value="">Select an option</option>
            <option value="residential">Residential Plot</option>
            <option value="commercial">Commercial Plot</option>
            <option value="investment">Investment Plot</option>
            <option value="consultancy">General Consultancy</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us what you're looking for..."
          className={`border rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-800/40 focus:border-yellow-800 ${
            errors.message ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-red-600 text-xs">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-300"
      >
        <FaPaperPlane className="text-sm" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
