import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    imgSrc: "/images/airtravel-large-2.jpg",
    title: "Elevating Travel Booking",
    tags: ["User Research", "Wireframing", "Usability Testing"],
    projectLink: "/airlinecasestudy",
    description:
      "A diploma project in air travel that optimised user journeys through rigorous research and wireframing.",
  },
  {
    imgSrc: "/images/engineering-large-3.jpg",
    title: "Streamlining Engineering",
    tags: ["User Research", "Prototyping", "Usability Testing"],
    projectLink: "/engineeringcasestudy",
    description:
      "A redesign of my uni proof-of-concept app, refining prototyping and usability to automate report generation.",
  },
  {
    imgSrc: "/images/cg.svg",
    title: "Career Guidance Services",
    tags: ["User Research", "Wireframing", "Usability Testing"],
    projectLink: "/careercoachcasestudy",
    description:
      "An in-progress project with a client, crafting an intuitive platform for career guidance services in Ireland.",
  },
];

const Work = () => {
  const workRef = useRef(null);

  useEffect(() => {
    const cards = workRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleProjectClick = (projectLink) => {
    window.location.href = projectLink;
  };

  return (
    <section id="work" className="section py-12 bg-zinc-900">
      <div className="container mx-auto gap-4 px-4">
        {/* Section Header */}
        <h2 className="headline-2 reveal-up">
          My Portfolio Highlights
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the projects that exemplify my approach to user-centred, intuitive design.
        </p>
        
        {/* Project Grid */}
        <div
          ref={workRef}
          className="grid gap-6 items-center sm:gap-8 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]"
        >
          {works.map(({ imgSrc, title, tags, projectLink, description }, key) => (
            <div
              key={key}
              className="cursor-pointer project-card reveal-up"
              onClick={() => handleProjectClick(projectLink)}
            >
              <ProjectCard
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                desc={description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
