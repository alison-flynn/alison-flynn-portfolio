import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

const CaseStudyNavbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Store nav items in a ref to avoid re-creating on each render
  const navItemsRef = useRef([
    { label: "Overview", link: "#overview", className: "case-nav-link" },
    { label: "Process", link: "#process", className: "case-nav-link" },
    { label: "Results", link: "#results", className: "case-nav-link" },
  ]);

  // Initialize the active box (highlight) behind the active link
  const initActiveBox = useCallback(() => {
    if (lastActiveLink.current && activeBox.current) {
      const el = lastActiveLink.current;
      activeBox.current.style.top = el.offsetTop + "px";
      activeBox.current.style.left = el.offsetLeft + "px";
      activeBox.current.style.width = el.offsetWidth + "px";
      activeBox.current.style.height = el.offsetHeight + "px";
    }
  }, []);

  // Mark the first link as active on mount
  React.useEffect(() => {
    const defaultLink = document.querySelector(".case-nav-link");
    if (defaultLink) {
      defaultLink.classList.add("active");
      lastActiveLink.current = defaultLink;
      initActiveBox();
    }
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, [initActiveBox]);

  // Animate the nav links + active box when the component mounts
  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate .case-nav-link in a stagger
    tl.fromTo(
      ".case-nav-link",
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
        "-=0.4" // overlap slightly with link animations
      );
    }
  }, []);

  // Switch the active link to the clicked element
  const activeCurrentLink = useCallback((element, index) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    element.classList.add("active");
    lastActiveLink.current = element;
    setActiveIndex(index);

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
  }, []);

  // Scrollspy: highlight the correct link based on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      navItemsRef.current.forEach((item, index) => {
        const section = document.querySelector(item.link);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        if (
          scrollPos >= sectionTop - 100 &&
          scrollPos < sectionTop + sectionHeight - 100
        ) {
          const linkElement = document.querySelector(`a[href="${item.link}"]`);
          if (linkElement && linkElement !== lastActiveLink.current) {
            activeCurrentLink(linkElement, index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCurrentLink]);

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItemsRef.current.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          className={`
            ${className} font-accent uppercase tracking-wider px-4 py-2
            transition-all duration-300 hover:text-white hover:bg-zinc-800/40
            rounded-lg ${activeIndex === index ? "active" : ""}
          `}
          onClick={(e) => {
            e.preventDefault();
            activeCurrentLink(e.currentTarget, index);
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

CaseStudyNavbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default CaseStudyNavbar;
