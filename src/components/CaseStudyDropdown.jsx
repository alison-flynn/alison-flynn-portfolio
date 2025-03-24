import React, { useState, useRef, useEffect } from "react"; 
import { useLocation } from "react-router-dom";

const CaseStudyDropdown = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState("Select Case Study");
  const dropdownRef = useRef(null);

  const caseStudies = [
    { label: "Elevating Travel Booking", path: "/airlinecasestudy" },
    { label: "Streamlining Engineering", path: "/engineeringcasestudy" },
    { label: "Fleet Management", path: "/fleetmanagementcasestudy" },
  ];

  // Update selected case study based on current route
  useEffect(() => {
    const current = caseStudies.find((cs) => cs.path === location.pathname);
    if (current) {
      setSelectedCaseStudy(current.label);
    } else {
      setSelectedCaseStudy("Select Case Study");
    }
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Force full page refresh on selection
  const handleSelect = (study) => {
    setIsOpen(false);
    window.location.href = study.path; // Forces a true page reload
  };

  return (
    <div ref={dropdownRef} className="fixed top-24 right-4 z-50">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between px-5 py-3 bg-zinc-900 text-white rounded-lg border border-purple-500/30 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-purple-500/30 text-lg font-heading tracking-wide focus:outline-none"
      >
        <span>{selectedCaseStudy}</span>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="mt-2 bg-zinc-900 border border-purple-500/30 rounded-lg shadow-lg overflow-hidden">
          {caseStudies.map((study, index) => (
            <li
              key={index}
              onClick={() => handleSelect(study)}
              className={`px-5 py-3 cursor-pointer text-lg font-sans tracking-wide transition-all duration-200 
                ${
                  selectedCaseStudy === study.label
                    ? "bg-zinc-900 text-white font-semibold border border-purple-500/30 shadow-lg hover:scale-105 hover:shadow-purple-500/30"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }`}
            >
              {study.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CaseStudyDropdown;
