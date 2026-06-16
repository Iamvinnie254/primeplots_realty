import React from "react";
import Office_Team from "../../../assets/staff_photos/office_and_team_working.png";

const CompanyStory = () => {
  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          data-aos="fade-right"
          className="relative rounded-2xl overflow-hidden h-80 sm:h-96 lg:h-full"
        >
          <img
            src={Office_Team}
            alt="PrimePlot Realty office and team at work"
            className="w-full h-full object-cover"
          />
        </div>

        <div data-aos="fade-left">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-5">
            From A Small Office To A Trusted Name In Land
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              PrimePlot Realty began in 2013 with a single mission: make land
              ownership simple, transparent, and accessible to every Kenyan,
              regardless of their starting point.
            </p>
            <p>
              What started as a two-person team verifying title deeds for
              friends and family has grown into a full-service real estate
              consultancy serving over a thousand clients across the country's
              fastest-growing regions.
            </p>
            <p>
              Today, we combine legal expertise, market research, and genuine
              care for our clients' financial futures to deliver land investment
              opportunities people can trust completely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
