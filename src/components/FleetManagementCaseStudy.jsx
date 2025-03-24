import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Shared Components
import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyDropdown from "./CaseStudyDropdown";
import CaseStudyHero from "./CaseStudyHero";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// Overview Components
import DefineUser from "./DefineUser";

// Process Components
import ImplementationStrategy from "./ImplementationStrategy";

gsap.registerPlugin(ScrollTrigger);

// ------------------------- Data Arrays -------------------------
const personas = [
  {
    iconType: "career",
    image: "/images/mech1.svg",
    name: "Ciaran Flynn",
    role: "Head Mechanic",
    beforeQuote: "I don’t want to be typing — I just want to tick things, take a photo, and move on.",
    quote: "This system does what the whiteboard couldn’t — keeps me ahead of the work.",
    rating: 5,
    goals: "Digitise daily job cards, track services, and reduce paperwork.",
    painPoints: "Whiteboards go out-of-date, forms get lost, no early reminders.",
    mentalModel: "Visual and checklist-first. Needs speed, structure, and zero fluff.",
  }
  
  ,
  {
    iconType: "career",
    image: "/images/mech.svg",
    name: "Tommy Byrne",
    role: "Junior Mechanic",
    beforeQuote: "I usually just ask what to do next — I don't check the board.",
    quote: "It’s way easier to follow the plan when it’s in my hand.",
    rating: 4,
    goals: "See what jobs are next and log work quickly with minimal effort.",
    painPoints: "Misses updates, forgets to log parts, no way to check history on his own.",
    mentalModel: "Mobile-first. Needs clear task lists and easy photo logging.",
  }
  ,
  {
    iconType: "career",
    image: "/images/mech2.svg",
    name: "Mairead Walsh",
    role: "Office Administrator",
    beforeQuote: "We usually dig through binders when RSA shows up.",
    quote: "Now I can pull service records in seconds instead of hours.",
    rating: 5,
    goals: "Export inspection records and view service status without calling the garage.",
    painPoints: "No visibility into job cards or due dates, audits are time-consuming.",
    mentalModel: "Needs filterable records, easy exports, and a clear overview of fleet health.",
  }
  ,
];

// ------------------------- Main Component -------------------------
const FleetManagementCaseStudy = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    // Use gsap.context to scope to mainRef
    const ctx = gsap.context(() => {
      // Grab each ".case-study-content"
      const sections = gsap.utils.toArray(".case-study-content");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              // use toggleActions so it definitely fires
              toggleActions: "play none none none",
              // or if you prefer: once: false
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <CaseStudyHeader />
      <CaseStudyDropdown />

      <CaseStudyHero
        title="Fleet Management System"
        subtitle="Empowering mechanics with digital job cards, service logs, tool tracking, and smart reminders — all tailored for real-world, high-pressure workshop environments."
        role="UX Designer, Product Owner"
        tools="Pen & paper (discovery), Miro (flows), Notion (requirements), Figma (wireframes), React + Tailwind (build-ready)"
        imageSrc="/images/mech3.svg"
      />

      <main ref={mainRef} className="pt-20 container mx-auto px-6 space-y-40">
        {/* OVERVIEW SECTION */}
        <section id="overview" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Overview
            </span>
            <h2 className="text-6xl font-serif font-bold leading-tight text-white">
              Defining the User
            </h2>
            <div className="w-24 h-1 bg-purple-400 mt-5 mb-7"></div>
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
            TrackPit replaces four physical whiteboards, three paper forms, and countless WhatsApp messages used to manage a 60-vehicle roadworks fleet. The project began by observing the head mechanic at CMP Ireland — and designing a system that mirrored his workflow, not replaced it.
            </p>
          </div>
          {/* User Personas */}
          <div className="mt-14">
            <DefineUser personas={personas} />
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Process
            </span>
            <h2 className="text-6xl font-serif font-bold text-white leading-tight">
              My Approach
            </h2>
            <div className="w-24 h-1 bg-purple-400 mt-5 mb-7"></div>
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
              My methodology combines rigorous research...
            </p>
          </div>
          <div className="mt-14">
            <ImplementationStrategy />
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section id="results" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Results
            </span>
            <h2 className="text-6xl font-serif font-bold text-white leading-tight">
              The Outcome
            </h2>
            <div className="w-24 h-1 bg-purple-400 mt-5 mb-7"></div>
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
              The redesign is in progress, with key UX improvements...
            </p>
          </div>
          <div className="text-center py-20">
            <p className="text-3xl font-serif italic text-zinc-400">
              Coming Soon...
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FleetManagementCaseStudy;