import React from "react";
import Hero from "../../components/home/hero/Hero";
import PropertySearch from "../../components/home/propertySearch/PropertySearch";
import FeaturedProperties from "../../components/home/featuredProperties/FeaturedProperties";

const Home = () => {
  return (
    <>
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
    </>
  );
};

export default Home;
