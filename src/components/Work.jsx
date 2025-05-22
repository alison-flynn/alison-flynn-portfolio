import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export const works = [
  {
    imgSrc: "/images/cover1.svg",
    title: "Fleet Vision System",
    tags: ["UX Design", "Full-Stack Development", "Agile Delivery"],
    projectLink: "/fleetmanagementcasestudy",
    description:
      "End-to-end design & development of Fleet Vision PWA for CMP Ireland: digitising daily job cards, service logs, tool tracking and automated reminders. ",
  },
  {
    imgSrc: "/images/airtravel-large-2.jpg",
    title: "Elevating Travel Booking",
    tags: ["User Research", "Wireframing", "Usability Testing"],
    projectLink: "/airlinecasestudy",
    description:
      "A diploma capstone in air travel UX—optimising the booking funnel through in-depth user interviews, iterative wireframes, and moderated usability tests.",
  },
  {
    imgSrc: "/images/engineering-large-3.jpg",
    title: "Streamlining Engineering",
    tags: ["User Research", "Prototyping", "Usability Testing"],
    projectLink: "/engineeringcasestudy",
    description:
      "University proof-of-concept redesign, automating field report generation with data-driven prototypes and usability iterations to minimise manual entry.",
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
