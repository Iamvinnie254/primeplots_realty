import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaHome, FaUsers, FaAward, FaMapMarkedAlt } from "react-icons/fa";

const stats = [
  { icon: <FaHome />, value: 850, suffix: "+", label: "Plots Sold" },
  { icon: <FaUsers />, value: 1200, suffix: "+", label: "Happy Clients" },
  { icon: <FaAward />, value: 12, suffix: "+", label: "Years Of Trust" },
  {
    icon: <FaMapMarkedAlt />,
    value: 35,
    suffix: "+",
    label: "Prime Locations",
  },
];

const StatisticsSection = () => {
  const gridRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const counters = el.querySelectorAll(".stat-number");
            counters.forEach((counterEl) => {
              const endValue = Number(counterEl.dataset.value);
              gsap.fromTo(
                counterEl,
                { innerText: 0 },
                {
                  innerText: endValue,
                  duration: 2,
                  ease: "power1.out",
                  snap: { innerText: 1 },
                  onUpdate: function () {
                    counterEl.innerText = Math.floor(
                      counterEl.innerText,
                    ).toLocaleString();
                  },
                },
              );
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-yellow-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="text-2xl mb-3 opacity-90" aria-hidden="true">
                {stat.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-bold">
                <span className="stat-number" data-value={stat.value}>
                  0
                </span>
                {stat.suffix}
              </p>
              <p className="text-sm text-yellow-100 mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
