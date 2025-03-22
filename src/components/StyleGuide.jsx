import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyleGuide = ({ caseStudyData }) => {
  const styleGuideRef = useRef(null);
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  // Initial Scroll Animation
  useLayoutEffect(() => {
    if (!styleGuideRef.current) return;
    gsap.fromTo(
      styleGuideRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: styleGuideRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  // Animate content fade-in when activeSection changes
  useLayoutEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  }, [activeSection]);

  // Extract top 4 colours
  const colours =
    caseStudyData?.colors?.flatMap((category) => category.visuals).slice(0, 4) ||
    [];

  return (
    <section id="style-guide" className="py-16 px-4 md:px-8 bg-zinc-900" ref={styleGuideRef}>
      <div className="container mx-auto">
        {/* Title & Introduction */}
        <h2 className="headline-2 reveal-up mb-6" style={{ lineHeight: "1.2" }}>
          Style Guide
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Explore the visual and typographic standards that define this project’s design language.
        </p>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE: Interactive Navigation (Editorial style) */}
          <div className="w-full md:w-1/3 flex flex-col space-y-4">
            <div
              className={`p-3 rounded-lg cursor-pointer transition-all text-left border font-heading 
                ${activeSection === "typography" ? "border-purple-300 bg-zinc-800/50" : "border-transparent hover:border-purple-300 hover:bg-zinc-800/30"}`}
              onMouseEnter={() => setActiveSection("typography")}
              onMouseLeave={() => setActiveSection(null)}
            >
              <p className="text-lg text-white">Typography</p>
            </div>
            <div
              className={`p-3 rounded-lg cursor-pointer transition-all text-left border font-heading 
                ${activeSection === "colors" ? "border-purple-300 bg-zinc-800/50" : "border-transparent hover:border-purple-300 hover:bg-zinc-800/30"}`}
              onMouseEnter={() => setActiveSection("colors")}
              onMouseLeave={() => setActiveSection(null)}
            >
              <p className="text-lg text-white">Colours</p>
            </div>
            <div
              className={`p-3 rounded-lg cursor-pointer transition-all text-left border font-heading 
                ${activeSection === "spacing" ? "border-purple-300 bg-zinc-800/50" : "border-transparent hover:border-purple-300 hover:bg-zinc-800/30"}`}
              onMouseEnter={() => setActiveSection("spacing")}
              onMouseLeave={() => setActiveSection(null)}
            >
              <p className="text-lg text-white">Spacing &amp; Layout</p>
            </div>
          </div>

          {/* RIGHT SIDE: Detailed Content */}
          <div
            ref={contentRef}
            className="w-full md:w-2/3 bg-zinc-900 p-4 md:p-6 rounded-lg min-h-[220px] flex items-center justify-center transition-all duration-300"
          >
            {!activeSection && (
              <p className="text-lg font-heading tracking-wide text-zinc-300 opacity-90 transition-opacity duration-500 ease-in-out">
                Hover over a section to see the details of our design language.
              </p>
            )}

            {activeSection === "typography" && (
              <div className="transition-opacity duration-300 opacity-100">
                <h4 className="text-2xl font-heading text-white mb-3">Typography</h4>
                <p className="text-zinc-300 text-lg mb-3">
                  {caseStudyData.typographyDescription}
                </p>
                <ul className="space-y-2">
                  {caseStudyData.typography.map((font, index) => (
                    <li key={index} className="text-zinc-400 text-lg">
                      <strong className="text-white">{font.name}</strong>: {font.usage}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "colors" && (
              <div className="transition-opacity duration-300 opacity-100">
                <h4 className="text-2xl font-heading text-white mb-3">Colours</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {colours.map((colour, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border border-white shadow-md transition-transform hover:scale-110"
                        style={{ backgroundColor: colour.hex }}
                      ></div>
                      <div>
                        <span className="text-white text-md font-semibold">
                          {colour.name}
                        </span>
                        <p className="text-zinc-400 text-sm">{colour.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "spacing" && (
              <div className="transition-opacity duration-300 opacity-100">
                <h4 className="text-2xl font-heading text-white mb-3">Spacing &amp; Layout</h4>
                <p className="text-zinc-300 text-lg mb-3">
                  {caseStudyData.spacingDescription}
                </p>
                <ul className="space-y-2">
                  {caseStudyData.spacing.map((rule, index) => (
                    <li key={index} className="text-zinc-400 text-lg">
                      <strong className="text-white">{rule.name}</strong>: {rule.details}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleGuide;
