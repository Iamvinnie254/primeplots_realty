import React from "react";
import { FaLinkedin } from "react-icons/fa";
import teamData from "../../../data/team.json";

const TeamSection = () => {
  return (
    <section className="bg-stone-50 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Meet The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            The People Behind ShambaLako Ventures
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, i) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden text-center"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-yellow-800 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {member.bio}
                </p>
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-50 text-yellow-800 hover:bg-yellow-800 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
