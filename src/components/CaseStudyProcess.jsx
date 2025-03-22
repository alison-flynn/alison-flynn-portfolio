import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MicrocopyRevealTooltips from "./MicrocopyRevealTooltips";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyProcess = ({ processText }) => {
  const processRef = useRef(null);

  useEffect(() => {
    if (!processRef.current) return;

    const elements = [...processRef.current.querySelectorAll(".process-content")];

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={processRef} className="w-full py-24 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col lg:flex-row justify-between gap-20">
        
        {/* 🔹 Left: Title & Divider */}
        <div className="process-content w-full lg:w-[40%]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.2] tracking-tight mb-6 text-white">
            Process
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        {/* 🔹 Right: Description */}
        <div className="process-content w-full lg:w-[55%] text-lg lg:text-xl leading-relaxed text-zinc-300 lg:pr-6">
          <MicrocopyRevealTooltips tooltip="Our process is data-driven & user-focused.">
            <p className="transition-all duration-300 hover:text-white">
              {processText}
            </p>
          </MicrocopyRevealTooltips>
        </div>

      </div>
    </section>
  );
};

export default CaseStudyProcess;
