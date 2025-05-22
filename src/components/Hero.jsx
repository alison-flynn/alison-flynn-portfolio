import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonPrimary } from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          once: true,
        },
      });
      tl.from(".hero-text", {
        y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2,
      })
      .from(".hero-image", {
        x: 100, opacity: 0, scale: 0.95, duration: 1.2, ease: "power4.out",
      }, "-=0.5");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="pt-6 lg:pt-18 bg-zinc-900">
      <div className="container mx-auto px-6 lg:px-12 lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-heading leading-tight text-white mb-4">
            Alison Flynn<br/>
Full-Stack Engineer & UX Designer          </h1>
          <p className="hero-text text-lg text-zinc-400 max-w-2xl mb-8">
Bridging design and code to deliver intuitive, high-performance web apps with React, Node.js, Supabase, and TailwindCSS.          </p>
          <div className="flex flex-wrap gap-4 hero-text">
            <ButtonPrimary
              href="#work"
              label="Case Studies"
              icon="work_outline"
              className="px-6 py-3"
            />
            <ButtonPrimary
              href="#contact"
              label="Contact Me"
              icon="chat_bubble_outline"
              className="px-6 py-3"
            />
          </div>
        </div>

        {/* Image (desktop only) */}
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
