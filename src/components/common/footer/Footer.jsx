import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">PrimePlot Realty</h2>

            <p>
              Helping investors secure profitable land opportunities across
              Kenya.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg text-black"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
