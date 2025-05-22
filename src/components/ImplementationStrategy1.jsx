import React, { useEffect, useRef } from "react";
import MicrocopyRevealTooltips from "./MicrocopyRevealTooltips";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSearch,
  FiUsers,
  FiLayout,
  FiDatabase,
  FiCode,
  FiGitBranch,
  FiClipboard,
  FiFileText,
  FiRepeat
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Sprint Planning & Discovery",
    icon: <FiSearch size={28} className="text-white" />,
    description:
      "As Product Owner I scoped and prioritised features in bi-weekly sprints, ran discovery workshops with mechanics & managers, and captured user needs via contextual interviews."
  },
  {
    title: "Stakeholder Alignment",
    icon: <FiUsers size={28} className="text-white" />,
    description:
      "Facilitated live demos for the COO and Ops leads each sprint, gathered feedback, and updated the backlog in real time to keep everyone aligned."
  },
  {
    title: "UX Design & Testing",
    icon: <FiLayout size={28} className="text-white" />,
    description:
      "In my UX Designer role I sketched flows, built Figma prototypes, ran two rounds of usability tests, and iterated until the experience felt intuitive."
  },
  {
    title: "Architecture & API Design",
    icon: <FiDatabase size={28} className="text-white" />,
    description:
      "Defined the Supabase (PostgreSQL) schema, authored OpenAPI-compliant REST endpoints, and enforced role-based access policies for security."
  },
  {
    title: "Full-Stack Development",
    icon: <FiCode size={28} className="text-white" />,
    description:
      "As Full-Stack Engineer I wrote React/Tailwind components, Node.js microservices, authentication flows, and a custom notifications API for real-time alerts."
  },
  {
    title: "Branching & Version Control",
    icon: <FiGitBranch size={28} className="text-white" />,
    description:
      "Managed feature branches in GitHub, conducted pull-request code reviews, and merged to main only after passing automated checks."
  },
  {
    title: "CI/CD & Deployment",
    icon: <FiRepeat size={28} className="text-white" />,
    description:
      "Built GitHub Actions pipelines for linting, build and Netlify deploys with zero-downtime rollouts; monitored errors via Sentry."
  },
  {
    title: "Reporting & Retrospectives",
    icon: <FiClipboard size={28} className="text-white" />,
    description:
      "Delivered sprint reports to stakeholders, tracked KPIs (adoption, errors, performance), and ran retros to continuously refine our process."
  },
  {
    title: "Handoff & Support",
    icon: <FiFileText size={28} className="text-white" />,
    description:
      "Authored developer docs, created video walkthroughs, and held training sessions—ensuring smooth onboarding and ongoing user support."
  }
];

const ImplementationStrategy1 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      containerRef.current
        .querySelectorAll(".draw-circle")
        .forEach((circle, i) => {
          const length = circle.getTotalLength();
          gsap.set(circle, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(circle, {
            strokeDashoffset: 0,
            duration: 1.5,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-8">
      <div
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-7xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <MicrocopyRevealTooltips
              key={step.title}
              tooltip={step.description}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-zinc-900" />
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="absolute top-0 left-0 text-primary-400"
                  >
                    <circle
                      className="draw-circle"
                      cx="40"
                      cy="40"
                      r="36"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                  <div className="z-10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="mt-4 font-heading font-semibold text-lg text-white">
                  {step.title}
                </h3>
              </div>
            </MicrocopyRevealTooltips>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationStrategy1;
