import React, { useEffect, useRef } from "react";
import MicrocopyRevealTooltips from "./MicrocopyRevealTooltips";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSearch,
  FiBarChart2,
  FiLayout,
  FiCodepen,
  FiCheckCircle,
  FiRefreshCw,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Research",
    description:
      "I uncover user frustrations through interviews, surveys, and competitor benchmarking, ensuring every insight is backed by data.",
    icon: <FiSearch size={28} className="text-white" />,
  },
  {
    title: "Analysis",
    description:
      "I translate raw data into actionable insights using affinity diagrams, card sorting, and customer journey mapping to define key challenges.",
    icon: <FiBarChart2 size={28} className="text-white" />,
  },
  {
    title: "Design",
    description:
      "I craft wireframes and flow diagrams, shaping intuitive user journeys before refining UI layouts for clarity and ease of use.",
    icon: <FiLayout size={28} className="text-white" />,
  },
  {
    title: "Prototype",
    description:
      "I transform designs into interactive prototypes, testing real user interactions with low and high-fidelity versions before development.",
    icon: <FiCodepen size={28} className="text-white" />,
  },
  {
    title: "Test",
    description:
      "I validate usability through structured testing, refining interactions based on real user feedback to remove friction points.",
    icon: <FiCheckCircle size={28} className="text-white" />,
  },
  {
    title: "Iterate",
    description:
      "I fine-tune the final product, ensuring seamless developer handoff with annotated high-fidelity designs and detailed implementation notes.",
    icon: <FiRefreshCw size={28} className="text-white" />,
  },
];

const ImplementationStrategy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the circles' stroke
      const circles = document.querySelectorAll(".draw-circle");
      circles.forEach((circle, i) => {
        const length = circle.getTotalLength();
        gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(circle, {
          strokeDashoffset: 0,
          duration: 2,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-0">
      <div ref={containerRef} className="container mx-auto px-6 lg:px-24 max-w-7xl">
        {/* Grid for Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
          {steps.map((step) => (
            <MicrocopyRevealTooltips key={step.title} tooltip={step.description}>
              <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                {/* Icon with Animated Stroke */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Background Circle */}
                  <div className="absolute inset-0 rounded-full bg-zinc-900" />
                  {/* Animated Stroke */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="absolute top-0 left-0 text-purple-300"
                  >
                    <circle
                      className="draw-circle"
                      cx="40"
                      cy="40"
                      r="36"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                  {/* Icon Content */}
                  <div className="z-10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                {/* Step Title */}
                <span className="mt-3 text-base lg:text-lg font-heading font-semibold text-white tracking-wide">
                  {step.title}
                </span>
              </div>
            </MicrocopyRevealTooltips>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationStrategy;
