import React from "react";
import {
  FaTrophy,
  FaCertificate,
  FaGlobeAfrica,
  FaThumbsUp,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Best Land Consultancy 2024",
    desc: "Recognized at the Kenya Real Estate Excellence Awards.",
  },
  {
    icon: <FaCertificate />,
    title: "Licensed & Accredited",
    desc: "Fully registered with the Estate Agents Registration Board.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Regional Expansion",
    desc: "Now operating across 5 counties with plans for further growth.",
  },
  {
    icon: <FaThumbsUp />,
    title: "98% Client Satisfaction",
    desc: "Consistently rated highly by clients in post-purchase surveys.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-yellow-800 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-100 font-semibold uppercase text-sm tracking-wide">
            Recognized Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Milestones We're Proud Of
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white/10 border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm"
            >
              <div className="text-2xl text-white mb-3 flex justify-center">
                {a.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{a.title}</h3>
              <p className="text-yellow-100 text-sm leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
