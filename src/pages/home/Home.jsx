import React from "react";
import Hero from "../../components/home/hero/Hero";
import PropertySearch from "../../components/home/propertySearch/PropertySearch";
import FeaturedProperties from "../../components/home/featuredProperties/FeaturedProperties";
import WhyChooseUs from "../../components/home/whyChooseUs/WhyChooseUs";
import StatisticsSection from "../../components/home/statsSection/StatisticsSection";
import TestimonialsPreview from "../testimonials/TestimonialsPreview";
import BlogPreview from "../blog/BlogPreview";
import CTASection from "../../components/home/cta/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <WhyChooseUs />
      <StatisticsSection />
      <TestimonialsPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
};

export default Home;
