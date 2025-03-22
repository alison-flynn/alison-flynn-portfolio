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
    image: "/images/car2.svg",
    name: "Sarah Johnson",
    role: "Recent Graduate",
    beforeQuote: "I felt lost trying to figure out my next steps after school.",
    quote:
      "This platform clarified my career path and streamlined my CAO journey.",
    rating: 5,
    goals: "Find clear direction and secure the right education opportunity.",
    painPoints: "Confusing advice and overwhelming options.",
    mentalModel: "Prefers concise, personalised guidance.",
  },
  {
    iconType: "career",
    image: "/images/car1.svg",
    name: "Liam O'Brien",
    role: "Leaving Cert Student",
    beforeQuote: "I had no idea how to pick the right subjects or career path.",
    quote:
      "The platform makes understanding my options much simpler and less overwhelming.",
    rating: 4,
    goals: "Receive clear guidance for Leaving Cert subject choices and career planning.",
    painPoints: "Too many conflicting options and unclear future prospects.",
    mentalModel: "Needs structured, step-by-step advice for educational decisions.",
  },
  {
    iconType: "career",
    image: "/images/car3.svg",
    name: "Mark Williams",
    role: "Career Changer",
    beforeQuote:
      "Most career advice I found was too general and didn’t apply to my skills.",
    quote:
      "Interactive assessments and resource links sparked new insights for me.",
    rating: 4,
    goals: "Transition confidently into a new career with clear guidance.",
    painPoints: "Generic advice that lacks personalisation.",
    mentalModel:
      "Needs detailed, actionable insights to bridge his skills to a new field.",
  },
];

// ------------------------- Main Component -------------------------
const CareerCoachCaseStudy = () => {
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
        title="Career Guidance Services"
        subtitle="Empowering students with personalised CAO guidance, interactive open-day maps, quick resources, and easy booking for expert consultations."
        role="Lead UX Designer"
        tools="Figma"
        imageSrc="/images/herograd.svg"
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
              I have begun by identifying the unique needs of students...
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

export default CareerCoachCaseStudy;