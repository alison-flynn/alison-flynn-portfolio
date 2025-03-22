// src/components/Timeline.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(timelineRef.current.querySelectorAll(".timeline-item"));
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={timelineRef} className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Project Timeline</h2>
      <ul className="relative border-l-2 border-gray-700 ml-4">
        <li className="timeline-item mb-8 pl-4">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
          <p className="text-sm text-gray-400">August 2024</p>
          <h3 className="text-xl font-semibold">Project Kickoff</h3>
          <p>Initial research, planning and user interviews.</p>
        </li>
        <li className="timeline-item mb-8 pl-4">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
          <p className="text-sm text-gray-400">September 2024</p>
          <h3 className="text-xl font-semibold">Design Iterations</h3>
          <p>Iterative prototyping and usability testing.</p>
        </li>
        <li className="timeline-item mb-8 pl-4">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
          <p className="text-sm text-gray-400">October 2024</p>
          <h3 className="text-xl font-semibold">Final Implementation</h3>
          <p>Refinement and final delivery of the design.</p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
