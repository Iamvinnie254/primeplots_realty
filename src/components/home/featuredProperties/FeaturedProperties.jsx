import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaArrowRight } from "react-icons/fa";
import PropertyCard from "../../property/propertyCard/PropertyCard";
import propertiesData from "../../../data/properties.json";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProperties = () => {
  const sectionRef = useRef(null);

  const featured = propertiesData.filter((p) => p.featured).slice(0, 6);

  useGSAP(() => {
    gsap.from(".featured-heading > *", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".featured-heading",
        start: "top 85%",
      },
    });

    gsap.from(".featured-card", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".featured-grid",
        start: "top 80%",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="featured-heading flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
              Featured Listings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Premium Plots Handpicked For You
            </h2>
          </div>
          <p className="text-gray-700 max-w-md">
            Explore our most sought-after residential, commercial, and
            investment plots with verified titles and prime locations.
          </p>
        </div>

        <div className="featured-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((property) => (
            <div key={property.id} className="featured-card">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/properties"
            className="group inline-flex items-center gap-2 border-2 border-yellow-800 text-yellow-800 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-800 hover:text-white transition-colors duration-300"
          >
            View All Properties
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;