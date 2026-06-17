import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
const hero_photo = "/assets/plot_photos/hero.jpg";

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          ".hero-title-line",
          { y: 60, opacity: 0, duration: 0.8, stagger: 0.15 },
          "-=0.2",
        )
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
          "-=0.2",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex items-center bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero_photo}
          alt="Aerial view of premium land plots"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="hero-badge inline-block bg-yellow-800/90 text-white text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
            Trusted Land Investment Partner
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="hero-title-line block overflow-hidden">
              Secure Your Future
            </span>
            <span className="hero-title-line block overflow-hidden text-yellow-600">
              With ShambaLako Ventures
            </span>
          </h1>

          <p className="hero-subtitle text-gray-200 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            ShambaLako Ventures helps you discover residential, commercial, and
            investment-grade plots backed by verified documentation and expert
            consultancy.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/properties"
              className="hero-cta group inline-flex items-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Explore Properties
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/about"
              className="hero-cta group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition-colors duration-300"
            >
              <FaPlay className="text-xs" />
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
