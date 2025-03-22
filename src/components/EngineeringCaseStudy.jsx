import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Shared Components
import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyDropdown from "./CaseStudyDropdown";
import CaseStudyHero from "./CaseStudyHero";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// Overview Components
import DefineUser from "./DefineUser";
import NavigationCards from "./NavigationCards";

// Process Components
import ImplementationStrategy from "./ImplementationStrategy";
import AnimatedFlowchartExplorer from "./AnimatedFlowchartExplorer";
import VirtualTourWalkthrough from "./VirtualTourWalkthrough";
import {
  FiTool,
  FiFileText,
  FiCamera,
  FiDatabase,
  FiBarChart,
  FiClipboard,
  FiCheckSquare,
} from "react-icons/fi";
import {
 
  FiCheckCircle,


  FiLayout,
} from "react-icons/fi";
// Results Components
import MetricsCounter from "./MetricsCounter";

import StyleGuide from "./StyleGuide";
import Conclusions from "./Conclusions";
import FAQAccordion from "./FAQAccordion";
import UserPersonaCarousel from "./UserPersonaCarousel";

gsap.registerPlugin(ScrollTrigger);

// ------------------------- Data for Engineering Case Study -------------------------
const problemsData = {
  title: "User Issues",
  icon: "✕",
  items: [
    "Engineers spent too much time on manual report entry, leading to inefficiencies.",
    "Attaching images for exception reporting was difficult and slowed down the documentation process.",
    "Engineers had no real-time feedback on report submission, requiring manual follow-ups.",
  ],
};

const solutionsData = {
  title: "Smart Fixes",
  icon: "✓",
  items: [
    "Implemented automated report generation, reducing report completion time by 18%.",
    "Added an in-app camera function for quick image capture, cutting exception reporting time by 14%.",
    "Introduced real-time submission confirmations, decreasing follow-up inquiries by 20%.",
  ],
};

const personas = [
  {
    iconType: "engineering",
    image: "/images/eng1.svg",
    name: "David Clark",
    role: "Field Engineer",
    beforeQuote:
      "Filling out reports manually at the end of a long shift was exhausting and prone to errors.",
    quote:
      "With automation, I complete reports in minutes, reducing mistakes and saving energy for my actual work.",
    rating: 5,
    goals: "Increase efficiency in report generation.",
    painPoints: "Manual processes are too time-consuming.",
    mentalModel: "Prefers automation and simplicity.",
  },
  {
    iconType: "engineering",
    image: "/images/eng3.svg",
    name: "Emma Brown",
    role: "Operations Manager",
    beforeQuote:
      "Managing client reports was frustrating—data was scattered across multiple systems, making audits a nightmare.",
    quote:
      "The new centralised dashboard gives me instant access to all reports, cutting down time spent searching for data.",
    rating: 4,
    goals: "Improve data accuracy and accessibility.",
    painPoints: "Fragmented systems lead to inefficiencies.",
    mentalModel: "Needs a unified, clear interface.",
  },
  {
    iconType: "engineering",
    image: "/images/eng2.svg",
    name: "Michael Tinn",
    role: "Engineering Manager",
    beforeQuote:
      "Without an integrated system, team collaboration was inefficient, and projects suffered from miscommunication.",
    quote:
      "Now, everything is streamlined—our team collaborates better, and project timelines are more predictable.",
    rating: 5,
    goals: "Enhance team collaboration and optimise project delivery.",
    painPoints: "Lack of integrated tools and communication breakdowns.",
    mentalModel: "Values clear strategic direction and scalable solutions.",
  },
];

export const journeySteps = [
  {
    stepCategory: "research",
    icon: "/images/heroeng-3.svg",
    sketch: "/images/adobe.svg",
    wireframe: "/images/researching-eng.svg",
    highFidelity: "/images/researching-eng.svg",
    title: "User Research & Benchmarking",
    description:
      "Conducted interviews and tested existing reporting tools to identify inefficiencies in engineers’ workflows.",
    tools: [],
  },
  {
    stepCategory: "analysis",
    icon: "/images/heroeng-3.svg",
    sketch: "/images/analysis1.png",
    wireframe: "/images/eng-cjm.svg",
    highFidelity: "/images/analysis1.png",
    title: "Information Architecture & Flowchart",
    description: "Mapped the ideal workflow to streamline report generation and submission.",
    tools: [],
  },
  {
    stepCategory: "design",
    icon: "/images/heroeng-3.svg",
    sketch: "/images/sketchreport.jpg",
    wireframe: "/images/wifireport.svg",
    highFidelity: "/images/eng-report-2.png",
    title: "Report Generation",
    description: "Designed pre-filled templates and automated content suggestions for quicker reporting.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/heroeng-3.svg",
    wireframe: "/images/wifiimage.svg",
    highFidelity: "/images/eng-upload-1.svg",
    sketch: "/images/sketchcontact.jpg",
    title: "Image Capture",
    description: "Integrated in-app image uploads to facilitate exception reporting.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/heroeng-3.svg",
    wireframe: "/images/wifimetrics.svg",
    highFidelity: "/images/eng-home.svg",
    sketch: "/images/sketchmetrics.jpg",
    title: "Metrics",
    description:
      "Integrated in-app real-time metrics to facilitate efficient and accurate decision making.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/heroeng-3.svg",
    sketch: "/images/sketchcapture.jpg",
    wireframe: "/images/wificlient.svg",
    highFidelity: "/images/eng-clientcontact.svg",
    title: "Client Management",
    description: "Developed a streamlined dashboard for organising and retrieving reports efficiently.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "test",
    icon: "/images/heroeng-3.svg",
    wireframe: "/images/wifi-usability-test.svg",
    highFidelity: "/images/engineering-large.png",
    title: "Usability Testing & Iteration",
    description:
      "Refined the platform through A/B testing, improving usability and efficiency.",
    tools: [],
  },
];

const metrics = [
  { value: 18, label: "Faster Report Completion", duration: 1.5 },
  { value: 14, label: "Reduction in Exception Reporting Time", duration: 1.5 },
  { value: 20, label: "Decrease in Manual Follow-ups", duration: 1.5 },
];



export const tourSlides = [
  // ————————— 1. Standard Reporting Flow
  {
    title: "From Paper to Precision",
    description:
      "Manual reporting felt like writing essays at the end of each shift. We redefined this into a clean, structured 3-step flow directly from the home dashboard.",
    icon: <FiTool />,
    callout: "Engineers now begin reports with just one tap.",
    image: "/images/standard-final.svg",
  },
  {
    title: "Smart Report Setup",
    description:
      "Engineers select report types via 5 intuitive cards. Like choosing a product on a checkout screen—visual, scannable, and familiar.",
    icon: <FiClipboard />,
    callout: "Visual selection replaced dropdown frustration.",
    image: "/images/standard-final.svg",
  },
  {
    title: "Client Selection Reimagined",
    description:
      "A searchable RecyclerView makes finding clients instant. It's like typing into a search bar and watching results narrow in real-time.",
    icon: <FiDatabase />,
    callout: "Filters and search auto-prioritise common clients.",
    image: "/images/standard-final.svg",
  },
  {
    title: "Finalise & Submit with Confidence",
    description:
      "Fill in key info—equipment, dates, results. Then sign digitally. A clean popup confirms the report was created, no ambiguity.",
    icon: <FiCheckCircle />,
    callout: "Progress bar shows where you are at all times.",
    image: "/images/standard-final.svg",
  },

  // ————————— 2. Reporting with Exceptions
  {
    title: "Capturing Exceptions in the Field",
    description:
      "Engineers can take a photo directly within the report flow. Similar to attaching a receipt during an expense claim—fast and contextual.",
    icon: <FiCamera />,
    callout: "Enables visual proof for paper-based workflows.",
    image: "/images/full-exception.svg",
  },
  {
    title: "Seamless 4-Step Flow with Images",
    description:
      "A new step integrates exception capture smoothly. Engineers complete reports without breaking flow—even if paper is still used.",
    icon: <FiClipboard />,
    callout: "Supports hybrid workflows without friction.",
    image: "/images/full-exception.svg",
  },
  {
    title: "Digital Sign-Off, Human Simplicity",
    description:
      "Even in exception reports, engineers can finish with a signature and get real-time confirmation. Like sending a tracked email—instant feedback.",
    icon: <FiCheckCircle />,
    callout: "Closes the loop on non-standard scenarios.",
    image: "/images/full-exception.svg",
  },
  {
    title: "Engineered for Real Life",
    description:
      "This option supports companies still reliant on paper by introducing digital tools that blend seamlessly into existing workflows—no disruption, just smarter reporting.",
    icon: <FiTool />,
    callout: "Modernises without forcing behaviour change.",
    image: "/images/full-exception.svg",
  },

  // ————————— 3. Client Management
  {
    title: "Intuitive Client Directory",
    description:
      "Engineers can now search, filter, and scroll through clients like scrolling contacts. Phone numbers, emails, and addresses—one tap away.",
    icon: <FiDatabase />,
    callout: "Fast access to key client details.",
    image: "/images/eng-contact-virtual.svg",
  },
  {
    title: "Client View with Context Tabs",
    description:
      "Each client opens into a 3-tab interface: Reports, Contact, Location. Like a mini CRM optimised for mobile.",
    icon: <FiLayout />,
    callout: "Organised client records in one place.",
    image: "/images/eng-contact-virtual.svg",
  },
  {
    title: "Past Reports in Context",
    description:
      "Signed reports are shown per client with quick-glance status: pass/fail and dates. It's like a medical chart—compact, essential, time-stamped.",
    icon: <FiClipboard />,
    callout: "Quick access to critical report history.",
    image: "/images/eng-contact-virtual.svg",
  },
  {
    title: "Field-Ready Contact Navigation",
    description:
      "Phone, address, and email are split into clear categories. No more copying from printouts or calling the office.",
    icon: <FiCheckCircle />,
    callout: "Mobile-friendly & action-driven.",
    image: "/images/eng-contact-virtual.svg",
  },

  // ————————— 4. Metrics Dashboard
  {
    title: "Metrics that Matter",
    description:
      "The dashboard opens with a search bar and three distinct tiles—Overview, Validation, and Compliance—each leading to a focused insights page for performance tracking.",
    icon: <FiBarChart />,
    callout: "Live metrics track performance in real-time.",
    image: "/images/metrics.svg",
  },
  {
    title: "Validation and Compliance Views",
    description:
      "Overview, Validation, and Compliance dashboards give role-relevant data in the right format—charts, summaries, and tables.",
    icon: <FiFileText />,
    callout: "Tailored insights for engineers and managers.",
    image: "/images/metrics.svg",
  },
  {
    title: "Insight-Driven Decision Making",
    description:
      "Two callout metrics sit at the top of each page. These are like headlines for data—what’s important, conveyed efficiently.",
    icon: <FiBarChart />,
    callout: "No more interpreting spreadsheets.",
    image: "/images/metrics.svg",
  },
  {
    title: "Navigation Made Effortless",
    description:
      "A bottom navigation bar anchors the entire experience: Reports, Clients, Metrics, and History. Like your favourite productivity app—one tap access.",
    icon: <FiLayout />,
    callout: "Core pages always within reach.",
    image: "/images/metrics.svg",
  },
];


const faqs = [
  {
    question: "How did you identify engineers’ workflow challenges?",
    answer:
      "I conducted contextual inquiries, interviews, and usability tests to understand inefficiencies in manual reporting processes.",
  },
  {
    question: "How did you improve report generation efficiency?",
    answer:
      "I implemented automated form-filling, real-time validation, and digital signatures to reduce errors and speed up submission times.",
  },
  {
    question: "How did image capture improve exception reporting?",
    answer:
      "I integrated in-app photo uploads, eliminating the need for manual descriptions and ensuring accurate, timestamped documentation.",
  },
  {
    question: "What prototyping tools did you use for testing?",
    answer:
      "I used Figma for wireframes and prototypes, refining workflows based on user feedback before development.",
  },
  {
    question: "How did you measure the usability success of the design?",
    answer:
      "I tracked reductions in report completion time, improvements in data accuracy, and user satisfaction scores before and after implementation.",
  },
  {
    question: "How does the app enhance team collaboration?",
    answer:
      "I designed a centralised dashboard, shared report history, and real-time notifications to ensure engineers and managers stay aligned on project updates.",
  },
];

export const caseStudy2Data = {
  typographyDescription:
    "For a professional and technical feel, the Urbanist font family was chosen to enhance readability and clarity.",
  typography: [
    { name: "Urbanist Black", usage: "Used for titles and headers" },
    { name: "Urbanist SemiBold", usage: "Used for subheadings and key UI elements" },
    { name: "Urbanist Regular", usage: "Used for body text and user instructions" },
  ],
  colors: [
    {
      category: "Primary",
      visuals: [
        { hex: "#87CE55", name: "Bright Green" },
        { hex: "#273137", name: "Dark Slate" },
        { hex: "#240F4F", name: "Progress Purple" },
      ],
    },
    {
      category: "Secondary",
      visuals: [
        { hex: "#9DB2CE", name: "Blue Grey" },
        { hex: "#414ACA", name: "Deep Blue" },
      ],
    },
    {
      category: "Accent",
      visuals: [{ hex: "#240F4F", name: "Progress Purple" }],
    },
    {
      category: "Background",
      visuals: [{ hex: "#FFFFFF", name: "White" }],
    },
  ],
  spacingDescription:
    "Spacing ensures clarity and a structured layout in all interactions.",
  spacing: [
    { name: "Component Gaps", details: "Consistent 20px spacing between sections." },
    { name: "Button Spacing", details: "Primary buttons have 16px margins for easy access." },
    { name: "Navigation Padding", details: "Navigation bar has 24px padding for clarity." },
  ],
};

// ------------------------- Main Case Study Component -------------------------
const EngineeringCaseStudy = () => {
  const mainRef = useRef(null);

  // Use a layout effect so animations run before the next paint
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".case-study-content");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true, // animate only once
            },
          }
        );
      });
    }, mainRef); 

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <CaseStudyHeader />
      <CaseStudyDropdown />
      <CaseStudyHero
        title="Streamlining Engineering"
        subtitle="An automated solution to improve report generation and data management for engineers."
        role="Lead UX Designer"
        tools="Figma"
        imageSrc="/images/heroeng-1.svg"
      />

      {/* Main Content */}
      <main ref={mainRef} className="pt-20 container mx-auto px-6 space-y-20">
        {/* OVERVIEW SECTION */}
        <section id="overview" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm text-purple-400 uppercase tracking-widest mb-3">
              Overview
            </span>
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              Define the User
            </h2>
            <div className="w-20 h-1 bg-purple-400 mt-4 mb-6"></div>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Through extensive research, I identified the key user groups whose
              diverse needs formed the foundation of the redesign.
            </p>
          </div>
          {/* User Personas */}
          <div className="mt-12">
            <DefineUser personas={personas} />
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm text-purple-400 uppercase tracking-widest mb-3">
              Process
            </span>
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              My Approach
            </h2>
            <div className="w-20 h-1 bg-purple-400 mt-4 mb-6"></div>
            <p className="text-lg text-zinc-300 leading-relaxed">
              My methodology combines rigorous research with iterative design to ensure clarity and impact at every stage.
            </p>
          </div>

          {/* Strategy */}
          <div className="mt-12">
            <ImplementationStrategy />
          </div>
          <div className="max-w-4xl mx-auto text-left mt-14">
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
              Hover on each card to uncover strategic milestones.
            </p>
          </div>

          {/* Flowchart */}
          <div className="mt-12">
            <AnimatedFlowchartExplorer nodes={journeySteps} />
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section id="results" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm text-purple-400 uppercase tracking-widest mb-3">
              Results
            </span>
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              Outcome
            </h2>
            <div className="w-20 h-1 bg-purple-400 mt-4 mb-6"></div>
            <p className="text-lg text-zinc-300 leading-relaxed">
              The redesign resulted in a significant boost in engagement. Our approach enhanced usability and delivered a clear, effective experience.
            </p>

            {/* Metrics */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, idx) => (
                <MetricsCounter
                  key={idx}
                  value={metric.value}
                  label={metric.label}
                  duration={metric.duration}
                />
              ))}
            </div>



    {/* Navigation Cards */}
    <div className="mt-1">
              <NavigationCards
                problems={problemsData}
                solutions={solutionsData}
              />
            </div>
            {/* User Persona Carousel */}
            <div className="mt-12">
              <UserPersonaCarousel personas={personas} />
            </div>

        

            {/* Virtual Tour */}
            <div className="mt-12">
              <VirtualTourWalkthrough slides={tourSlides} />
            </div>

            {/* Style Guide */}
            <div className="mt-12">
              <StyleGuide caseStudyData={caseStudy2Data} />
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EngineeringCaseStudy;
