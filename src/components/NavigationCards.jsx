import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavigationCards = ({ problems, solutions }) => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [visible, setVisible] = useState(false);

  // Initial animation when scrolling into view
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Optionally, you could animate individual child elements if needed.
  }, []);

  // Update visibility based on hover state
  useEffect(() => {
    setVisible(!!activeSection);
  }, [activeSection]);

  return (
    <section
      id="navigation-cards"
      className="py-12 px-4 md:px-8 bg-zinc-900"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side: Interactive Navigation */}
        <div className="w-full md:w-1/3 flex flex-col space-y-4">
          {/* Problems */}
          <div
            onMouseEnter={() => setActiveSection("problems")}
            onMouseLeave={() => setActiveSection(null)}
            className={`p-3 rounded-lg cursor-pointer transition-all font-heading text-left border 
              ${activeSection === "problems" 
                ? "border-red-300 bg-zinc-800/50" 
                : "border-transparent hover:border-red-300 hover:bg-zinc-800/30"
              }`}
          >
            <p className="text-lg text-white">Problems</p>
          </div>
          {/* Solutions */}
          <div
            onMouseEnter={() => setActiveSection("solutions")}
            onMouseLeave={() => setActiveSection(null)}
            className={`p-3 rounded-lg cursor-pointer transition-all font-heading text-left border 
              ${activeSection === "solutions" 
                ? "border-green-300 bg-zinc-800/50" 
                : "border-transparent hover:border-green-300 hover:bg-zinc-800/30"
              }`}
          >
            <p className="text-lg text-white">Solutions</p>
          </div>
        </div>

        {/* Right Side: Introductory & Detailed Content */}
        <div className="w-full md:w-2/3 bg-zinc-800/50 p-4 md:p-6 rounded-lg min-h-[200px] flex items-center justify-center">
          {/* Default Intro Message */}
          {!activeSection && (
            <p className="text-lg font-heading tracking-wide text-zinc-300 opacity-90 transition-opacity duration-500 ease-in-out">
              Welcome—explore the key challenges and design solutions that shaped my process.
              <br />
              Hover over a section for details.
            </p>
          )}

          {/* Problems Content */}
          {activeSection === "problems" && (
            <div className="transition-opacity duration-300 opacity-100">
              <p className="text-2xl font-heading text-white mb-2">
                {problems.title}
              </p>
              <ul className="space-y-2">
                {problems.items.map((item, index) => (
                  <li key={index} className="text-zinc-400 text-lg font-sans">
                    <span className="text-red-400">●</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions Content */}
          {activeSection === "solutions" && (
            <div className="transition-opacity duration-300 opacity-100">
              <p className="text-2xl font-heading text-white mb-2">
                {solutions.title}
              </p>
              <ul className="space-y-2">
                {solutions.items.map((item, index) => (
                  <li key={index} className="text-zinc-400 text-lg font-sans">
                    <span className="text-green-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavigationCards;
