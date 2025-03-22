import React, { useEffect, useRef } from "react";
import MicrocopyRevealTooltips from "./MicrocopyRevealTooltips";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UserJourneyMap = ({ steps, title = "User Journey Map" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journey-step",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          stagger: 0.15,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-24 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* 🔹 Title: Left-Aligned */}
        <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-white mb-12">
          {title}
        </h3>

        {/* 🔹 Steps Container */}
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step, i) => (
            <div key={i} className="journey-step flex flex-col items-center">
              <MicrocopyRevealTooltips tooltip={step.tooltip || step.description}>
                
                {/* 🔹 Circular Icon Container */}
                <div className="relative flex items-center justify-center bg-zinc-800 rounded-full h-24 w-24 md:h-28 md:w-28 shadow-lg transition-transform duration-300 hover:scale-110">
                  {step.icon && (
                    <div className="text-purple-400 text-3xl md:text-4xl">
                      {step.icon}
                    </div>
                  )}
                </div>
              </MicrocopyRevealTooltips>

              {/* 🔹 Step Title */}
              <span className="mt-3 text-lg md:text-xl font-medium text-zinc-200 text-center w-32 md:w-40 leading-tight">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserJourneyMap;
