import React from "react";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import OfficeLocation from "../../components/contact/OfficeLocation";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 mb-10">
          <ContactForm />
          <ContactInfo />
        </div>
        <OfficeLocation />
      </div>
    </>
  );
};

export default Contact;
