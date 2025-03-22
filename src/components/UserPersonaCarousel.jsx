import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

const UserPersonaCarousel = ({ personas, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const changePersona = (newIndex) => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.to(cardRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      },
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changePersona((currentIndex + 1) % personas.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, personas.length]);

  return (
    <section id="reviews" className={`py-16 bg-zinc-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="headline-2 reveal-up mb-6" style={{ lineHeight: "1.2" }}>
          Usability Testing Feedback
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover what experts and users say about my work and UX approach.
        </p>

        {/* Persona Carousel */}
        <div className="relative w-full max-w-3xl mx-auto px-6">
          <div
            ref={cardRef}
            className="relative p-8 md:p-10 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-xl transition-transform transform hover:scale-105 min-w-[320px] lg:min-w-[800px] min-h-[200px] flex flex-col overflow-hidden"
          >
            {/* Top Right: Persona Image & Info */}
            <div className="absolute top-4 right-4 flex items-center gap-3">
              <figure className="p-1">
                <img
                  src={personas[currentIndex].image}
                  alt={personas[currentIndex].name}
                  loading="lazy"
                  className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full "
                />
              </figure>
              <div className="text-right">
                <p className="text-white font-semibold text-lg md:text-xl">
                  {personas[currentIndex].name}
                </p>
                <p className="text-sm text-zinc-500 tracking-wide md:text-base">
                  {personas[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Bottom Left: 5-Star Rating & Persona Quote */}
            <div className="absolute bottom-4 left-4 text-left max-w-[75%]">
              <div className="flex items-center gap-1 mb-2">
                {new Array(5).fill(null).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-zinc-400 italic text-lg md:text-xl leading-relaxed">
                "{personas[currentIndex].quote}"
              </p>
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="mt-6 flex justify-center gap-3">
            {personas.map((_, index) => (
              <button
                key={index}
                onClick={() => changePersona(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-purple-600 to-purple-800 scale-125"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                aria-label={`Go to persona ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

UserPersonaCarousel.propTypes = {
  personas: PropTypes.array.isRequired,
  className: PropTypes.string,
};

UserPersonaCarousel.defaultProps = {
  personas: [],
  className: "",
};

export default UserPersonaCarousel;
