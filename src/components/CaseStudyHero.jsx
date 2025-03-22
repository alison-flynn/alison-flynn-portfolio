import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyHero = ({ title, subtitle, role, tools, imageSrc }) => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    gsap.fromTo(
      heroEl.querySelectorAll(".case-hero-text"),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: heroEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      { x: 50, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 lg:pt-36 pb-16 bg-zinc-900">
      <div className="container mx-auto px-4 lg:grid lg:grid-cols-[2fr,1fr] lg:gap-10 items-center">
        {/* LEFT: Hero Text */}
        <div className="case-hero-text">
          <p className="text-purple-300 text-sm tracking-widest uppercase font-semibold mb-4">
            Case Study
          </p>
          <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white tracking-tight drop-shadow-md mb-6">
            {title}
          </h1>
          <p className="text-lg font-sans text-zinc-300 leading-relaxed max-w-xl mb-8">
            {subtitle}
          </p>
          {role && tools && (
            <div className="text-sm text-zinc-300 space-y-1 font-sans">
              <p>
                <strong className="font-semibold">Role:</strong> {role}
              </p>
              <p>
                <strong className="font-semibold">Tools:</strong> {tools}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT: Hero Image (Icon) */}
        <div ref={imageRef} className="flex justify-center lg:justify-end">
          <div className="hero-image w-full max-w-[260px] ml-auto rounded-[30px] overflow-hidden bg-gradient-to-t from-zinc-900 via-zinc-800/60 to-transparent">
            <img
              src={imageSrc}
              alt="Case Study Icon"
              className="w-full h-auto object-contain transition-opacity duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
