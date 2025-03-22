import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MicrocopyRevealTooltips from "./MicrocopyRevealTooltips";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyOverview = ({ overviewText }) => {
  const overviewRef = useRef(null);

  useEffect(() => {
    if (!overviewRef.current) return;

    const elements = [...overviewRef.current.querySelectorAll(".overview-content")];

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
          trigger: overviewRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={overviewRef} className="w-full py-24 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col lg:flex-row justify-between gap-20">
        
        {/* 🔹 Left: Title & Divider */}
        <div className="overview-content w-full lg:w-[40%]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.2] tracking-tight mb-6 text-white">
            Overview
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        {/* 🔹 Right: Description */}
        <div className="overview-content w-full lg:w-[55%] text-lg lg:text-xl leading-relaxed text-zinc-300 lg:pr-6">
          <MicrocopyRevealTooltips tooltip="Tailored advice makes all the difference.">
            <p className="transition-all duration-300 hover:text-white">
              {overviewText}
            </p>
          </MicrocopyRevealTooltips>
        </div>

      </div>
    </section>
  );
};

export default CaseStudyOverview;
