import React from "react";
import FAQHero from "../../components/faq/FAQHero";
import FAQAccordion from "../../components/faq/FAQAccordion";

const FAQ = () => {
  return (
    <div>
      <FAQHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FAQ;
