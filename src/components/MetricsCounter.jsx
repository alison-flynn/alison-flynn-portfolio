import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MetricsCounter = ({ value, label, duration = 1 }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      counterRef.current,
      { innerText: 0 },
      {
        innerText: value,
        duration: duration,
        ease: "power1.out",
        snap: "innerText",
        onUpdate: () => {
          counterRef.current.innerText = Math.round(counterRef.current.innerText);
        },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [value, duration]);

  return (
    <div className="text-center">
      {/* Number & Percentage */}
      <div className="flex justify-center items-baseline">
        <span ref={counterRef} className="text-6xl font-extrabold text-white tracking-tight"></span>
        <span className="text-3xl font-bold text-purple-400 ml-2">%</span>
      </div>
      {/* Label */}
      <p className="mt-2 text-lg font-sans text-zinc-400 tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default MetricsCounter;
