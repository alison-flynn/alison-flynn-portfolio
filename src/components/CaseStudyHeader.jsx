import React, { useState, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import CaseStudyNavbar from "./CaseStudyNavbar";

const CaseStudyHeader = () => {
  const [navOpen, setNavOpen] = useState(false);
  const logoRef = useRef(null);
  const navigate = useNavigate();

  // Animate out then navigate to home without reloading the page
  const handleLogoClick = useCallback((event) => {
    event.preventDefault();

    gsap.to(logoRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setTimeout(() => {
          navigate("/"); // use router to navigate to home
        }, 300);
      },
    });
  }, [navigate]);

  const handleMenuToggle = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <h1>
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <img
              ref={logoRef}
              src="/images/logo-1.svg"
              width={50}
              height={50}
              alt="Alison Flynn"
            />
          </Link>
        </h1>

        {/* Navbar */}
        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={handleMenuToggle}>
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <CaseStudyNavbar navOpen={navOpen} />
        </div>

        {/* Return Button */}
        <a
          href="/"
          className="btn btn-secondary max-md:hidden md:justify-self-end font-accent uppercase tracking-widest"
        >
            ← Return
            </a>
      </div>
    </header>
  );
};

export default CaseStudyHeader;
