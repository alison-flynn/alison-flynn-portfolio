import React, { useState, useCallback } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Force a full page refresh when clicking the logo
  const handleLogoClick = useCallback((event) => {
    event.preventDefault();
    // Navigate to home section and reload
    window.location.href = "/#home";
    window.location.reload();
  }, []);

  // Toggle the mobile navigation
  const handleMenuToggle = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[auto,3fr,auto]">
        {/* Left Section: Logo and Branding */}
        <div className="flex items-center gap-3">
          <h1>
            <a href="/" onClick={handleLogoClick} className="logo">
              <img
                src="/images/logo-1.svg"
                width={50}
                height={50}
                alt="Alison Flynn"
              />
            </a>
          </h1>
        </div>

        {/* Center: Navbar */}
        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={handleMenuToggle}>
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* Right Section: Contact Button */}
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end font-accent uppercase tracking-widest"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
