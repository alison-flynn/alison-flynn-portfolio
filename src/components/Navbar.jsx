import React, { useRef, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // We'll keep these nav items in a ref to avoid re-renders
  const navItemsRef = useRef([
    { label: "Home", link: "#home", className: "nav-link" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Feedback", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ]);

  // Position the highlight box behind the 'active' link
  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    const el = lastActiveLink.current;
    activeBox.current.style.top = el.offsetTop + "px";
    activeBox.current.style.left = el.offsetLeft + "px";
    activeBox.current.style.width = el.offsetWidth + "px";
    activeBox.current.style.height = el.offsetHeight + "px";
  };

  // Mark first link (Home) as active on mount
  useEffect(() => {
    const defaultLink = document.querySelector(".nav-link");
    if (defaultLink) {
      defaultLink.classList.add("active");
      lastActiveLink.current = defaultLink;
      initActiveBox();
    }
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animate nav links and active box on mount
  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Stagger in the nav links
    tl.fromTo(
      ".nav-link",
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }
    );

    // Animate the active box
    if (activeBox.current) {
      tl.fromTo(
        activeBox.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }
  }, []);

  // Move the highlight box to a newly activated link
  const activeCurrentLink = (element) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    element.classList.add("active");
    lastActiveLink.current = element;

    if (activeBox.current) {
      gsap.to(activeBox.current, {
        top: element.offsetTop,
        left: element.offsetLeft,
        width: element.offsetWidth,
        height: element.offsetHeight,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  // Enhanced scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

      // 1) If near the top (e.g. < 80px), highlight Home
      if (scrollPos < 80) {
        const homeLink = document.querySelector(`a[href="#home"]`);
        if (homeLink && homeLink !== lastActiveLink.current) {
          activeCurrentLink(homeLink);
        }
      } else {
        // 2) Otherwise check which section is in view
        navItemsRef.current.forEach((item) => {
          const section = document.querySelector(item.link);
          if (!section) return;

          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Adjust offset of 100px if you want earlier or later highlight
          if (
            scrollPos >= sectionTop - 100 &&
            scrollPos < sectionTop + sectionHeight - 100
          ) {
            const linkElement = document.querySelector(`a[href="${item.link}"]`);
            if (linkElement && linkElement !== lastActiveLink.current) {
              activeCurrentLink(linkElement);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItemsRef.current.map(({ label, link, className }, idx) => (
        <a
          href={link}
          key={idx}
          className={`
            ${className}
            font-accent uppercase tracking-widest transition-colors duration-300
            hover:text-white hover:bg-zinc-800/40 px-4 py-2 rounded-lg
          `}
          onClick={(e) => {
            e.preventDefault();
            activeCurrentLink(e.currentTarget);
            const section = document.querySelector(link);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
