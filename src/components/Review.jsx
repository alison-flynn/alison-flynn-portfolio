import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ReviewCard from "./ReviewCard";

const reviews = [
   {
    content:
      "FleetVision has transformed my day-to-day. I simply tick off each task on my tablet—no more juggling paper forms, cover sheets, or shouting updates over WhatsApp. Damage reports and part orders appear instantly, so I get the right parts onsite without delay. It even keeps the old paper cards for audits, but everything else is live and seamless.",
    name: "Head of Workshop",
    imgSrc: "/images/cmp.png",
    company: "CMP Road Planing Ireland",
  },
    {
    content:
      "FleetVision has given us end-to-end visibility across our entire operation. From automated reminders for CVRTs to real-time parts ordering via the chatbot, we’re now making data-driven decisions that cut downtime and drive efficiency. This single platform replaced disparate systems and manual handoffs—saving us time, reducing errors, and freeing up our teams to focus on growth.",
    name: "Chief Operating Officer",
    imgSrc: "/images/cmp.png",
    company: "CMP Road Planing Ireland",
  },
  {
    content:
      "Very good level of detail in observational note-taking and interview guide design. Your reflective design critique was appreciated – an excellent attempt overall.",
    name: "Professor of User Experience Design",
    imgSrc: "/images/ucc.png",
    company: "University College Cork",
  },
  {
    content:
      "Well done for passing the design block, Alison! Your prototype and annotations are clear, precise, and developer-ready – a solid 90% performance.",
    name: "Professional Diploma Lecturer",
    imgSrc: "/images/uxdi1.svg",
    company: "UX Design Institute",
  },
  {
    content:
      "Selected as a nominee for the Graduate of the Year & Peel Memorial Prize.",
    name: "Examinations Office",
    imgSrc: "/images/ucc.png",
    company: "University College Cork",
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef(null);

  const changeReview = (newIndex) => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setActiveIndex(newIndex);
        gsap.to(cardRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.in",
        });
      },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeReview((activeIndex + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="reviews" className="py-12 bg-zinc-900">
      <div className="container mx-auto px-4 text-left">
        {/* Section Header */}
        <h2 className="headline-2 reveal-up">
  Feedback
</h2>
<p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
Collected feedback from past stakeholders and university lecturers, showcasing real-world impact, usability wins, and academic recognition across every project.







</p>


        <div className="flex flex-col items-center gap-4">
          <div ref={cardRef}>
            <ReviewCard
              content={reviews[activeIndex].content}
              name={reviews[activeIndex].name}
              imgSrc={reviews[activeIndex].imgSrc}
              company={reviews[activeIndex].company}
              className="mx-auto"
            />
          </div>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeReview(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-gradient-to-r from-purple-500 to-purple-700 scale-125"
                    : "bg-zinc-600 hover:bg-purple-400"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
