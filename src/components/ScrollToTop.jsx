import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FiArrowUp } from "react-icons/fi";

// Register the GSAP ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const buttonRef = useRef(null);
  const progressRef = useRef(null);

  // Detect scroll position for button visibility and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for button appearance
  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.9,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isVisible]);

  // GSAP smooth scrolling to top
  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 1.4,
      ease: "power3.inOut",
    });
  };

  return (
    <>
      {/* Progress Indicator */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-zinc-500 via-zinc-300 to-white transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Scroll-to-Top Button */}
      <button
        ref={buttonRef}
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-purple-500/30 shadow-lg transition-all duration-300 bg-zinc-900 text-white hover:scale-105 hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Scroll to top"
        style={{ opacity: 0, scale: 0.9 }}
      >
        <FiArrowUp
          size={22}
          className="text-white transition-transform duration-200 transform hover:-translate-y-1"
        />
      </button>
    </>
  );
};

export default ScrollToTop;
