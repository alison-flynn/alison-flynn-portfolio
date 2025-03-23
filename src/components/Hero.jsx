import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonPrimary} from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline attached to scrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          once: true, // Animate only on first scroll
          // If you prefer repeated triggers, remove `once` and use toggleActions:
          // toggleActions: "play none none reverse"
        },
      });

      // Animate all .hero-text elements in a stagger
      tl.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      })
        // Animate the .hero-image next, slightly overlapping
        .from(
          ".hero-image",
          {
            x: 100,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.5" // overlap by half a second
        );
    }, heroRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <section id="home" ref={heroRef} className="pt-2 lg:pt-18 bg-zinc-900">
      <div className="container mx-auto px-6 lg:px-12 lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 hero-text">
            <figure className="w-10 h-10 rounded-lg overflow-hidden">
              <img
                src="/images/photo-of-me.svg"
                alt="Alison Flynn portrait"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex items-center gap-1 text-zinc-400 text-sm tracking-wide font-sans">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-heading leading-tight text-white mt-6 mb-8 max-w-3xl">
            Crafting Intuitive, Impactful Digital Experiences
          </h1>
          <div className="flex items-center gap-4 hero-text">
            <ButtonPrimary href="#about" label="Learn More" icon="arrow_downward" />
          </div>
        </div>
        {/* Right Image */}
        <div className="hidden lg:flex items-center justify-center">
          <figure className="hero-image w-full max-w-md bg-gradient-to-t from-zinc-900 via-zinc-800/60 to-transparent rounded-3xl overflow-hidden">
            <img
              src="/images/photo-of-me.svg"
              alt="Alison Flynn"
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
