import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const VirtualTourWalkthrough = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const slideRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const progressTimelineRef = useRef(null);

  // Set up IntersectionObserver to start timer only when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Reset to first slide when the section comes into view
  useEffect(() => {
    if (isInView) {
      setCurrentSlide(0);
    }
  }, [isInView]);

  // GSAP Animation for Slide Transition
  const changeSlide = (index) => {
    if (progressTimelineRef.current) {
      progressTimelineRef.current.kill();
    }
    gsap.to(slideRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        setCurrentSlide(index);
        gsap.fromTo(
          slideRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.in" }
        );
        if (isInView && !isHovered) {
          startProgressAnimation();
        }
      },
    });
  };

  // Auto-next slide when progress completes
  const autoNextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    changeSlide(nextIndex);
  };

  // Start the progress bar animation over 6 seconds
  const startProgressAnimation = () => {
    if (progressTimelineRef.current) {
      progressTimelineRef.current.kill();
    }
    gsap.set(progressRef.current, { width: "0%" });
    progressTimelineRef.current = gsap.timeline({
      onComplete: autoNextSlide,
    });
    progressTimelineRef.current.to(progressRef.current, {
      width: "100%",
      duration: 6,
      ease: "linear",
    });
  };

  // Monitor view and hover state to control progress animation
  useEffect(() => {
    if (isInView && !isHovered) {
      if (progressTimelineRef.current) {
        progressTimelineRef.current.kill();
      }
      startProgressAnimation();
    } else if (progressTimelineRef.current) {
      progressTimelineRef.current.pause();
    }
  }, [isInView, isHovered, currentSlide]);

  // Manual navigation handlers
  const handleNext = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    changeSlide(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(prevIndex);
  };

  return (
    <section
      id="virtual-tour"
      ref={containerRef}
      className="py-16 bg-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8 text-left">
          <h2 className="headline-2 reveal-up mb-4" style={{ lineHeight: "1.2" }}>
          Interactive Results Walkthrough

          </h2>
          <p className="text-zinc-400 mt-2 mb-6 max-w-[50ch] reveal-up">
          Delve into the refined outcomes with an interactive slideshow that details each milestone. This dynamic walkthrough reveals how iterative testing and thoughtful refinements culminated in a seamless, user‑centred solution.          </p>
        </div>

        {/* Walkthrough Content Card */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-zinc-700 shadow-md transition-transform duration-300 hover:scale-105">
          {/* Text Content */}
          <div className="lg:w-1/3 w-full text-left">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {slides[currentSlide].title}
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              {slides[currentSlide].description}
            </p>
            {/* Callout Section */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/20 border border-purple-400 transition-transform duration-300 hover:scale-105">
              <div className="text-purple-400 text-3xl">
                {slides[currentSlide].icon}
              </div>
              <p className="text-lg text-purple-300 italic">
                {slides[currentSlide].callout}
              </p>
            </div>
          </div>

          {/* Image Content with Dot Navigation and Progress Indicator */}
          <div className="lg:w-2/3 w-full flex flex-col items-center">
            {/* Dot Navigation Above the Image */}
            <div className="flex justify-center gap-2 mb-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-purple-500"
                      : "bg-zinc-600 hover:bg-purple-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            {/* Image Container */}
            <div className="relative w-full h-[400px]">
              <img
                ref={slideRef}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-contain rounded-2xl transition-all duration-500 ease-in-out"
              />
              {/* Progress Indicator at the Bottom */}
              <div className="mt-2 left-0 w-full h-1 bg-zinc-700">
                <div
                  ref={progressRef}
                  className="h-full bg-purple-500"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-zinc-800 text-purple-400 hover:bg-zinc-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Previous Slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-zinc-800 text-purple-400 hover:bg-zinc-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Next Slide"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

VirtualTourWalkthrough.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default VirtualTourWalkthrough;
