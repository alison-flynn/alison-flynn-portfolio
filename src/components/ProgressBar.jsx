import React, { useEffect, useState } from "react";
import gsap from "gsap";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = (scrollTop / docHeight) * 100;
      setProgress(progressPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the .progress-line width via GSAP when progress changes
  useEffect(() => {
    gsap.to(".progress-line", {
      width: `${progress}%`,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [progress]);

  return (
    // The wrapper is fixed so it stays at the very top of the viewport
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Background track (2px high, subtle gray) */}
      <div className="h-2 bg-gray-200 w-full absolute top-0 left-0 rounded-b-lg shadow-inner"></div>

      {/* Animated progress bar with a “button-like” purple gradient */}
      <div
        className="progress-line h-2 bg-gradient-to-r from-[#E2C4FF] to-[#C09CEC] absolute top-0 left-0 rounded-b-lg shadow-lg"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
