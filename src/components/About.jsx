import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutItems = [
  {
    label: "BSc Business Information Systems",
    number: "First Class",
    suffix: "Honours Degree",
  },
  {
    label: "Professional Diploma in UX Design",
    number: 92,
    suffix: "%",
  },
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="section" ref={aboutRef}>
      <div className="container mx-auto px-4">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          {/* About Intro */}
          <p className="text-base font-sans text-zinc-300 mb-4 md:mb-8 md:text-lg leading-relaxed max-w-[60ch]">
            <span className="text-sm">Welcome!</span> I'm <span className="font-bold text-white">Alison Flynn</span> – a UX Designer & Technologist with a <span className="font-semibold text-white">First-Class Honours</span> degree in BSc Business Information Systems and a <span className="font-semibold text-white">Professional Diploma in UX Design</span>. Based in Cork, Ireland, I combine technical expertise with creative insight to deliver engaging, user-centred digital experiences. I specialise in user research, iterative prototyping, and usability testing, and I am passionate about collaborating on innovative projects across diverse industries.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number, suffix }, key) => (
              <div key={key} className="flex flex-col items-start">
                <div className="flex items-baseline md:mb-2">
                  <span className="text-3xl font-extrabold md:text-5xl text-white">
                    {number}
                  </span>
                  <span className="text-purple-400 font-medium md:text-xl ml-2">
                    {suffix}
                  </span>
                </div>
                <p className="text-sm font-sans text-zinc-400">{label}</p>
              </div>
            ))}

            {/* Logo */}
            <img
              src="/images/logo-1.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
