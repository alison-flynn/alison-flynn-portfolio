// src/components/KeysOfWebDesign.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KeysOfWebDesign = () => {
  const containerRef = useRef(null);

  const principles = [
    "Simplicity – Clear and uncluttered design.",
    "Consistency – Uniform elements across the interface.",
    "Accessibility – Designs that everyone can use.",
    "Responsiveness – Seamless experience on all devices.",
    "Feedback – Immediate and intuitive responses to user actions."
  ];

  useEffect(() => {
    const bubbles = containerRef.current.querySelectorAll('.bubble');
    gsap.fromTo(
      bubbles,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: 'power3.out', 
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="keys-web-design" className="py-12 border-b border-zinc-700">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Keys of Web Design</h2>
      <div ref={containerRef} className="flex flex-wrap justify-center gap-4">
        {principles.map((principle, idx) => (
          <div
            key={idx}
            className="bubble bg-gradient-to-br from-purple-500 to-purple-300 px-6 py-4 rounded-full shadow-lg"
          >
            <p className="text-base text-white font-medium text-center">{principle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeysOfWebDesign;
