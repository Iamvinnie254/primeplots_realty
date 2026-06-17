import React from "react";
import { FaChartLine, FaHome, FaCalendarAlt } from "react-icons/fa";
import successStoriesData from "../../data/success-stories.json";

const SuccessStories = () => {
  return (
    <section className="bg-amber-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Beyond The Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Success Stories
          </h2>
        </div>

        <div className="space-y-6">
          {successStoriesData.map((story, i) => (
            <div
              key={story.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <img
                src={story.photo}
                alt={story.name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />

              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {story.title}
                </h3>
                <p className="text-yellow-800 text-sm font-medium mb-3">
                  {story.name}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {story.summary}
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <FaCalendarAlt className="text-yellow-800" />
                    Invested in {story.purchaseYear}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <FaHome className="text-yellow-800" />
                    {story.plotsOwned} Plot{story.plotsOwned > 1 ? "s" : ""}{" "}
                    Owned
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <FaChartLine className="text-yellow-800" />
                    {story.roi} Return
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
