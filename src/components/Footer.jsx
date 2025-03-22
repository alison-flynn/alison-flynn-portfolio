import { ButtonPrimary } from "./Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Use absolute links for home page sections
const sitemap = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact Me", href: "/#contact" },
];

const caseStudies = [
  { label: "Airia Airline Website", href: "/airlinecasestudy" },
  { label: "Streamlining Engineering", href: "/engineeringcasestudy" },
  { label: "Career Coach", href: "/careercoachcasestudy" },
];

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const revealElements = footerRef.current.querySelectorAll(".fade-up");
    gsap.fromTo(
      revealElements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="section bg-zinc-900 pt-16 pb-10 text-white">
      <div className="container">
        {/* Top Section: Left (2/3) = Links, Right (1/3) = CTA */}
        <div className="lg:grid lg:grid-cols-3 gap-12">
          {/* LEFT SIDE (2/3): Sitemap & Case Studies in two columns */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {/* Sitemap Column */}
            <div>
              <p className="mb-3 text-lg font-semibold font-accent tracking-wider fade-up">
                Sitemap
              </p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key} className="fade-up">
                    <a
                      href={href}
                      className="block text-sm font-sans text-zinc-400 py-1 transition-all duration-200 hover:text-purple-400 hover:translate-x-1"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Studies Column */}
            <div>
              <p className="mb-3 text-lg font-semibold font-accent tracking-wider fade-up">
                Case Studies
              </p>
              <ul>
                {caseStudies.map(({ label, href }, key) => (
                  <li key={key} className="fade-up">
                    <a
                      href={href}
                      className="block text-sm font-sans text-zinc-400 py-1 transition-all duration-200 hover:text-purple-400 hover:translate-x-1"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE (1/3): CTA TEXT + BUTTON */}
          <div className="lg:col-span-1 lg:flex lg:flex-col lg:items-end">
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-wide mb-6 lg:max-w-[12ch] fade-up text-right">
              Let’s collaborate and create something exceptional.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed text-right fade-up mb-6">
              Have a project in mind? Let’s start a conversation.
            </p>
            {/* Button below the CTA text */}
            <div className="fade-up">
              <ButtonPrimary
                href="mailto:alisonlflynn1@gmail.com"
                label="Start a Project"
                icon="chevron_right"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative fade-up mt-12 pt-12">
          {/* Faded Image in Bottom Right */}
          <img
            src="/images/logo-1.svg" /* Replace with your actual image path */
            alt="Faded Decorative"
            className="absolute bottom-0 right-0 w-[80px]  pointer-events-none"
          />

          {/* LinkedIn + Copyright on Left */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/alison-flynn1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-zinc-900 text-white rounded-full border border-purple-500/30 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30"
            >
              <FaLinkedin size={28} />
            </a>

            {/* Copyright */}
            <p className="text-sm font-sans text-zinc-500">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-zinc-200 font-bold ml-1">
                Alison Flynn
              </span>{" "}
              | UX Designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
