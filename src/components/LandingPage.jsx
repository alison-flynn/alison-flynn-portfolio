import React, { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Shared Components
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Review from "./Review";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  // If there's a hash (#id), scroll to that element on mount
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Animate all .reveal-up elements with a scrub-based up/down fade
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const revealEls = document.querySelectorAll(".reveal-up");
      revealEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              // Section enters animation around 90% from top → 40%
              start: "top 90%",
              end: "top 40%",
              scrub: 0.3,  // Smoothly tie the animation to scroll
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-zinc-900 text-white min-h-screen">
      <Header />
      <main className="pt-20 container mx-auto px-6 space-y-24">
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LandingPage;
