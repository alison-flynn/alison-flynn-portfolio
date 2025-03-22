import React, { useRef } from "react";
import gsap from "gsap";

const IntuitiveNavigation = () => {
  // Refs for hidden content in each card
  const problemsContentRef = useRef(null);
  const solutionsContentRef = useRef(null);

  // Problems card hover handlers
  const handleProblemsEnter = () => {
    gsap.to(problemsContentRef.current, {
      height: "auto",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleProblemsLeave = () => {
    gsap.to(problemsContentRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    });
  };

  // Solutions card hover handlers
  const handleSolutionsEnter = () => {
    gsap.to(solutionsContentRef.current, {
      height: "auto",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleSolutionsLeave = () => {
    gsap.to(solutionsContentRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    });
  };

  return (
    <section id="intuitive-navigation" className="py-16 border-b border-zinc-700 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left text-zinc-50">
          Improving Navigation UX
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Problems Card */}
          <div
            className="flex-1 p-6 rounded-lg shadow-lg cursor-pointer border border-transparent hover:border-red-400 transition-all"
            onMouseEnter={handleProblemsEnter}
            onMouseLeave={handleProblemsLeave}
          >
            {/* Header Row: Title on left, Icon on right */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-red-400">
                User Problems Identified
              </h3>
              <span className="text-4xl text-red-500">✕</span>
            </div>
            {/* Hidden Pain Points */}
            <div
              ref={problemsContentRef}
              className="overflow-hidden"
              style={{ height: 0, opacity: 0 }}
            >
              <ul className="list-disc mt-4 space-y-3 text-lg text-center text-zinc-300">
                <li>
                  <span className="font-semibold text-red-300">Confusing navigation:</span> Users struggled to find key pages quickly.
                </li>
                <li>
                  <span className="font-semibold text-red-300">Overwhelming menus:</span> Too many options created cognitive overload.
                </li>
                <li>
                  <span className="font-semibold text-red-300">Lack of feedback:</span> No clear indicators of active pages or interactions.
                </li>
              </ul>
            </div>
          </div>

          {/* Solutions Card */}
          <div
            className="flex-1 p-6 rounded-lg shadow-lg cursor-pointer border border-transparent hover:border-green-400 transition-all"
            onMouseEnter={handleSolutionsEnter}
            onMouseLeave={handleSolutionsLeave}
          >
            {/* Header Row: Title on left, Icon on right */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-green-400">
                Solutions & UX Enhancements
              </h3>
              <span className="text-4xl text-green-500">✓</span>
            </div>
            {/* Hidden Solutions List */}
            <div
              ref={solutionsContentRef}
              className="overflow-hidden"
              style={{ height: 0, opacity: 0 }}
            >
              <ul className="list-disc mt-4 space-y-4 text-lg text-center text-zinc-200">
                <li>
                  <span className="font-semibold text-green-300">Sticky Header:</span> Quick access to navigation at all times.
                </li>
                <li>
                  <span className="font-semibold text-green-300">Simplified Menu:</span> Categorized content for easy scanning.
                </li>
                <li>
                  <span className="font-semibold text-green-300">Hover & Active States:</span> Clear visual cues to indicate interactions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntuitiveNavigation;
