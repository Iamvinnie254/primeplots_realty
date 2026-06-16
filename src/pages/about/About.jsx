import React from "react";
import AboutHero from "../../components/about/aboutHero/AboutHero";
import CompanyStory from "../../components/about/companyStory/CompanyStory";
import MissionVision from "../../components/about/missionVision/MissionVision";
import CoreValues from "../../components/about/coreValues/CoreValues";
import TeamSection from "../../components/about/teamSection/TeamSection";
import AchievementsSection from "../../components/about/achievements/AchievementsSection";

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <AchievementsSection />
    </>
  );
};

export default About;
