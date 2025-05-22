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
import ImplementationStrategy1 from "./ImplementationStrategy1";
import AnimatedFlowchartExplorer from "./AnimatedFlowchartExplorer";
import VirtualTourWalkthrough from "./VirtualTourWalkthrough";

// Results Components
import MetricsCounter from "./MetricsCounter";
import StyleGuide from "./StyleGuide";
import FAQAccordion from "./FAQAccordion";
import UserPersonaCarousel from "./UserPersonaCarousel";



/// Icon imports
import {
  FiUsers,
  FiTruck,
  FiPlusCircle,
  FiClipboard,
  FiBell,
  FiBarChart,
  FiMap,
  FiMessageCircle,
  FiFileText,
  FiTool,
  FiUser
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// ------------------------- Data Arrays -------------------------

// ------------------------- Personas -------------------------
const personas = [
  {
    iconType: "career",
    image: "/images/mech1.svg",
    name: "Ciaran Flynn",
    role: "Head Mechanic",
    background:
      "With 15 years in the field, Ciaran coordinates a team of 8 technicians across three sites.",
    beforeQuote:
      "I don’t want to be typing — I just want to tick things, take a photo, and move on.",
    quote:
      "FleetVision does what our whiteboard couldn’t—keeps me ahead of upcoming services and compliance deadlines across all vehicles.",
    rating: 5,
    goals: [
      "Digitise daily job cards",
      "Track service intervals automatically",
      "Get early reminders for CI and CVRT"
    ],
    painPoints: [
      "Manual boards go out of date instantly",
      "Forms misplaced in the workshop",
      "Last-minute audit scrambles"
    ],
    mentalModel:
      "Visual, checklist-first. Needs speed, structure, zero fluff—and offline support."
  },
  {
    iconType: "career",
    image: "/images/mech.svg",
    name: "Tommy Byrne",
    role: "Junior Mechanic",
    background:
      "Recently joined the garage—still learning the workflow but wants autonomy.",
    beforeQuote:
      "I usually ask Ciaran what’s next—I don’t check the board until he tells me.",
    quote:
      "Having my tasks in my pocket gives me confidence—I can log parts and notes without bugging anyone.",
    rating: 4,
    goals: [
      "See next jobs with clear instructions",
      "Log parts and time quickly",
      "View my past work for reference"
    ],
    painPoints: [
      "Misses updates midday",
      "Forgets to log parts",
      "No personal history of past jobs"
    ],
    mentalModel:
      "Mobile-first. Needs one-taps, photo attachments, and auto-saved drafts."
  },
  {
    iconType: "career",
    image: "/images/mech2.svg",
    name: "Mairead Walsh",
    role: "Office Administrator",
    background:
      "Handles audits, reporting and customer communications for the entire fleet.",
    beforeQuote:
      "We used binders and spreadsheets—audits took me days to prepare.",
    quote:
      "I can now pull service records and generate compliance reports in seconds.",
    rating: 5,
    goals: [
      "Export inspection records on demand",
      "Generate audit-ready PDFs",
      "Monitor overdue services at a glance"
    ],
    painPoints: [
      "No visibility into live job status",
      "Spreadsheets often out of sync",
      "Manual report compilation"
    ],
    mentalModel:
      "Needs filterable records, easy exports, clear overdue alerts, and audit logs."
  }
];

// ------------------------- Problems & Solutions -------------------------
const problemsData = {
  title: "User Issues",
  icon: "✕",
  items: [
    "Mechanics relied on outdated whiteboards and paper forms that weren’t synchronised.",
    "No real-time reminders or calendar integration—inspections were frequently missed.",
    "Administration took days to compile compliance reports and audit-ready exports.",
    "Cross-team visibility was non-existent—operations and management were out of sync."
  ]
};

const solutionsData = {
  title: "Smart Fixes",
  icon: "✓",
  items: [
    "Centralised digital job cards replaced four whiteboards and three paper logs.",
    "Automated calendar alerts and in-app notifications cut overdue services by ~70%.",
    "Role-based dashboards give mechanics, managers and admins each their own view.",
    "One-click PDF/Excel exports and audit logs available on demand."
  ]
};
// ------------------------- Journey Steps -------------------------
export const journeySteps = [
  {
    stepCategory: "feature",
    icon: "/images/tour-jobcard.svg",
    
    title: "Digital Job Card",
    description:
      "Mechanics tap through a checklist-style job card: tasks, parts list, and notes all in one flow—replacing paper forms with a single-tap completion experience.",
    tools: []
  },
  {
    stepCategory: "feature",
    icon: "/images/tour-photo.svg",
   
    title: "In-Flow Photo Attachments",
    description:
      "Built an embedded camera component so mechanics can snap and attach before/during/after photos directly to each job card, ensuring audit-ready visual proof.",
    tools: []
  },
  {
    stepCategory: "feature",
    icon: "/images/tour-timeline.svg",
   
    title: "Timeline & Calendar View",
    description:
      "Designed a vertically scrollable timeline to show upcoming tasks first, with a calendar widget to filter by date or service type—so mechanics can plan and prioritise their day.",
    tools: []
  },
  {
    stepCategory: "feature",
    icon: "/images/tour-map.svg",
   
    title: "Geographic Map Integration",
    description:
      "Overlayed each upcoming service location on an interactive map—complete with vehicle details and route planning aids to batch jobs by proximity.",
    tools: []
  },
  {
    stepCategory: "feature",
    icon: "/images/tour-dashboard.svg",
    
    title: "Role-Based Dashboards",
    description:
      "Crafted separate dashboards for mechanics, managers and admins—each surface the right KPIs, quick-actions and compliance alerts for their responsibilities.",
    tools: []
  },
  {
    stepCategory: "feature",
    icon: "/images/tour-notifications.svg",
    
    title: "Custom Notifications Service",
    description:
      "Developed a bespoke API to record job-card events, then dispatch in-app alerts and calendar reminders for upcoming CVRT, tax and service deadlines.",
    tools: []
  },
  {
    stepCategory: "feature",
    icon: "/images/tour-export.svg",
   
    title: "PDF & Excel Export Tools",
    description:
      "Integrated jsPDF and SheetJS to let users generate audit-ready PDF reports and Excel spreadsheets on demand—from any filtered dashboard view.",
    tools: []
  },
  {
    stepCategory: "feature",
    icon: "/images/tour-chatbot.svg",
    
    title: "Parts Order Chatbot",
    description:
      "Built a lightweight chatbot module that queries past POs, live supplier pricing and part availability—right inside the PWA for instant procurement support.",
    tools: []
  }
];



// ------------------------- Metrics -------------------------
export const metrics = [
  {
    value: 100,
    label: "Mechanic Adoption ",
    detail: "All 12 mechanics onboarded in under 7 days",
    duration: 1.5
  },
  {
    value: 100,
    label: "Site Coverage ",
    detail: "FleetVision rolled out across all 2 CMP sites within a week",
    duration: 1.5
  },
  {
    value: 100,
    label: "Paper Processes Eliminated ",
    detail: "Four separate whiteboards and paper forms replaced by the PWA",
    duration: 1.5
  },
  {
    value: 70,
    label: "Drop in Missed Inspections ",
    detail: "Missed CVRTs fell by 70% within the first month",
    duration: 1.5
  },
  {
    value: 20,
    label: "Reduction in Manual Follow-Ups ",
    detail: "Follow-up inquiries dropped by 20% thanks to real-time confirmations",
    duration: 1.5
  },
  {
    value: 95,
    label: "On-Time Service Completion ",
    detail: "95% of scheduled services completed on or before their due date",
    duration: 1.5
  }
];


// ------------------------- Tour Slides -------------------------
export const tourSlides = [
  {
    title: "Mechanic Dashboard",
    description:
      "Log in and land on your personalised Mechanic Dashboard in Light or Dark mode. Toggle theme via the top-right 🌙/☀️ button and access core sections—Vehicles, Job Cards, Notifications, Metrics, Contacts—directly from the top nav.",
    icon: <FiTool />,
    callout: "Your day’s tasks at a glance",
    image: "/images/guide-mechanic-dashboard.svg"
  },
  {
    title: "Management Dashboard",
    description:
      "Supervise fleet performance, compliance alerts, and supplier activity from the Manager view. Use the same theme toggle and top nav, with shortcuts to high-level Metrics and Notifications.",
    icon: <FiUsers />,
    callout: "Control centre for managers",
    image: "/images/guide-management-dashboard.svg"
  },
  {
    title: "Fleet Overview",
    description:
      "Search, filter, sort and paginate through every vehicle in your fleet. The sidebar offers real-time refine controls and a CSV export, while the grid adapts responsively across devices.",
    icon: <FiTruck />,
    callout: "Your entire fleet in one view",
    image: "/images/guide-fleet-overview.svg"
  },
  {
    title: "Add Vehicle",
    description:
      "Enter new vehicles via a two-column form (Plant No, Reg No, VIN, Depot, Make, Model, Year, Odometer, Type, Status). Light vs. Dark styles invert automatically—submit only when all required fields are valid.",
    icon: <FiPlusCircle />,
    callout: "Quickly register new assets",
    image: "/images/guide-add-vehicle.svg"
  },
  {
    title: "Vehicle Dashboard",
    description:
      "Deep-dive into a single vehicle’s details, job cards, upcoming services, damage reports and alerts. Sidebar summaries and main content accordions keep everything organised.",
    icon: <FiUser />,
    callout: "All details for one vehicle",
    image: "/images/guide-vehicle-dashboard.svg"
  },
  {
    title: "High Usage Vehicles",
    description:
      "Identify your busiest machines: filter or sort by job-card count, export CSV, and drill into each card for status, identifiers, and quick navigation.",
    icon: <FiBarChart />,
    callout: "Spot your busiest vehicles",
    image: "/images/guide-high-usage.svg"
  },
  
  {
    title: "Job Cards",
    description:
      "Track, filter, and export maintenance jobs. Sidebar controls refine by fitter, site, type and alphabetical order; individual cards let you Continue, View or Delete.",
    icon: <FiClipboard />,
    callout: "Manage all maintenance jobs",
    image: "/images/guide-job-cards.svg"
  },
  {
    title: "Job Card Detail",
    description:
      "See every field, photo, checklist and cost summary for a single job. Export as PDF/Excel, and use smooth accordion sections to explore sub-details.",
    icon: <FiFileText />,
    callout: "Everything about one job",
    image: "/images/guide-job-card-detail.svg"
  },
  {
    title: "Service Notifications",
    description:
      "List, map or calendar view all upcoming service reminders (CVRT, tax, inspections). Filter by type or range, export snapshots and click markers for pop-up details.",
    icon: <FiBell />,
    callout: "Never miss a service again",
    image: "/images/guide-service-notifications.svg"
  },
  {
    title: "Fleet Metrics",
    description:
      "Interactive KPIs, charts and recent-jobs table across daily, weekly or monthly timeframes. Filter by vehicle, fitter, site or job status, then export CSV of your data.",
    icon: <FiBarChart />,
    callout: "Deep analytics on demand",
    image: "/images/guide-fleet-metrics.svg"
  }
];

// ------------------------- FAQs -------------------------
const faqs = [
  {
    question: "How did you mirror the mechanic workflow?",
    answer:
      "I conducted contextual interviews and live shadowing to ensure the PWA matched the physical whiteboard steps, capturing every decision point."
  },
  {
    question: "What tech stack powers FleetVision?",
    answer:
      "React + TailwindCSS for the PWA, Node.js microservices for APIs, Supabase (PostgreSQL) for data & auth, plus GitHub Actions & Netlify for CI/CD."
  },
  {
    question: "How quickly did mechanics adopt it?",
    answer:
      "Achieved 100% adoption across all mechanics within one week—thanks to the familiar checklist UI and zero-disruption rollout strategy."
  },
  {
    question: "How did you structure sprints and demos?",
    answer:
      "Ran two-week Scrum sprints, delivering two high-priority features per cycle. At sprint end I demoed live to the COO, gathered feedback, and triaged the next items immediately."
  },
  {
    question: "How did you onboard future developers & ensure maintainability?",
    answer:
 "I wrapped up the project with a clear, up-to-date README and concise architecture overview, named files and folders intuitively, and wrote clean, well-commented code—so that anyone can pick up the repo, understand its structure at a glance, and extend it without a steep learning curve."  },
  {
    question: "How did you implement secure authentication?",
    answer:
      "Leveraged Supabase’s JWT-based auth with row-level security policies. I defined roles for mechanics, managers and admins to restrict data access precisely."
  },
  {
    question: "How did you build the export tools?",
    answer:
      "Integrated jsPDF with auto-table plugins for client-side PDF exports and used SheetJS + File-Saver to generate / download Excel reports on demand."
  },
  {
    question: "How does the Part-Order Chatbot work under the hood?",
    answer: `
      Our Next.js API route creates a Supabase client using service-role credentials, then parses the user’s free-form question with three helpers:
      1. **parseDate** turns “DD/MM/YYYY”, “MM/YYYY” or “YYYY” strings into JavaScript Date objects.  
      2. **detectIntent** matches keywords (e.g. “count”, “average”, “supplier”) to classify what the user wants (list, count, total, etc.).  
      3. **cleanQuery** strips filler words and punctuation, leaving only the core search term (like a PO number or supplier name).
      
      Based on the detected intent and any date, price or vehicle filters, the handler builds a Supabase query against our \`fleet_metrics_view\`, fetches the matching records, then formats a human-readable JSON answer (e.g. “On 30/06/2025, we ordered ‘Brake Pads’ (PO #123) for €250 ex VAT…”).
    `.trim()
  },
  {
    question: "How are Service Notifications generated?",
    answer: `
      We run a server-side helper that:
      1. Queries \`service_info\` (with related \`job_cards→vehicles\`) for all upcoming CVRT, tax, inspection, chassis and donkey service dates.
      2. For each record it calculates the days until due, then keeps only those within the next 7 days (or all future ones on initial run).
      3. Deduplicates by job card & service type—always keeping the soonest date per job.
      4. Inserts these reminders into our \`notifications\` table, where they’ll drive in-app alerts or calendar reminders.
    `.trim()
  },
  {
    question: "How did you optimise performance at scale?",
    answer:
      "Implemented code-splitting in Vite, applied GZIP compression, indexed key DB fields, and cached frequent queries—yielding sub-200ms dashboard loads."
  }
];

// ------------------------- Style Guide Data -------------------------
export const caseStudy3Data = {
  typographyDescription:
    "Headings use Sora for a modern, approachable tone; body copy uses Work Sans for maximum legibility across devices.",
  typography: [
    { name: "Sora Black", usage: "Main page titles & section headers" },
    { name: "Sora SemiBold", usage: "Sub-headers & callout text" },
    { name: "Work Sans Regular", usage: "Body copy & paragraphs" },
    { name: "Work Sans Light", usage: "Captions, metadata & footnotes" }
  ],
  colors: [
    {
      category: "Brand",
      visuals: [
        { hex: "#003EA1", name: "CMP Navy" },
        { hex: "#002F88", name: "CMP Navy Hover" },
        { hex: "#C1442E", name: "CMP Red" },
        { hex: "#9F3625", name: "CMP Red Dark" }
      ]
    },
    {
      category: "UI Backgrounds",
      visuals: [
        { hex: "#E6FAFC", name: "Page (Light)" },
        { hex: "#FFFFFF", name: "Surface (Light)" },
        { hex: "#111827", name: "Page (Dark)" },
        { hex: "#0D1220", name: "Surface (Dark)" }
      ]
    },
    {
      category: "Text",
      visuals: [
        { hex: "#1F2937", name: "Text Strong (Light)" },
        { hex: "#333333", name: "Text Regular (Light)" },
        { hex: "#6B7280", name: "Text Muted (Light)" },
        { hex: "#FFFFFF", name: "Text Strong (Dark)" },
        { hex: "#CBD5E1", name: "Text Regular (Dark)" },
        { hex: "#9CA3AF", name: "Text Muted (Dark)" }
      ]
    },
    {
      category: "Borders & Dividers",
      visuals: [
        { hex: "#D1D5DB", name: "Border / Light" },
        { hex: "#E5E7EB", name: "Divider / Light" },
        { hex: "#374151", name: "Border / Dark" },
        { hex: "#1F2937", name: "Divider / Dark" }
      ]
    },
    {
      category: "Accents",
      visuals: [
        { hex: "#87CE55", name: "Bright Green" },
        { hex: "#273137", name: "Dark Slate" },
        { hex: "#240F4F", name: "Progress Purple" }
      ]
    }
  ],
  spacingDescription:
    "We rely on Tailwind’s container padding and vertical rhythm utilities for consistent layout spacing.",
  spacing: [
    {
      name: "Container Padding",
      details:
        "Responsive: 1rem (sm) → 2rem (md) → 3rem (lg) → 4rem (xl) → 5rem (2xl)"
    },
    {
      name: "Section Gap",
      details: "`space-y-20` (~5rem) between `.case-study-content` sections"
    },
    {
      name: "Section Padding",
      details: "`py-16` (~4rem) vertical padding inside each section"
    },
    {
      name: "Horizontal Padding",
      details: "`px-6` (~1.5rem) horizontal padding inside the container"
    },
    {
      name: "Border Radius",
      details: "Tailwind `rounded-lg` (1rem) for cards, `rounded-xl` (1.5rem) for modals"
    }
  ]
};

// ------------------------- FleetManagementCaseStudy Component -------------------------

const FleetManagementCaseStudy = () => {
  const mainRef = useRef(null);

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
              once: true,
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
        title="Fleet Management System"
        subtitle="Empowering mechanics with digital job cards, service logs, tool tracking, and smart reminders — all tailored for real-world, high-pressure workshop environments."
        role="UX Designer, Product Owner, Full-Stack Developer"
        tools="Figma, Miro, Supabase, Node.js, React, TailwindCSS, GitHub Actions"
        imageSrc="/images/mech3.svg"
      />

      <main ref={mainRef} className="pt-20 container mx-auto px-6 space-y-20">
        {/* OVERVIEW */}
        <section id="overview" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Overview
            </span>
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              Defining the User
            </h2>
            <div className="w-20 h-1 bg-purple-400 mt-4 mb-6" />
            <p className="text-lg text-zinc-300 leading-relaxed">
              Fleet Vision replaces four physical whiteboards, three paper forms,
              and countless WhatsApp messages used to manage a 60-vehicle
              roadworks fleet. I began by observing daily operations at CMP
              Ireland to map workflows from the mechanic’s perspective and build
              tools that enhanced, not disrupted, their process.
            </p>
          </div>
          <div className="mt-12">
            <DefineUser personas={personas} />
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Process
            </span>
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              From Whiteboard to Web App
            </h2>
            <div className="w-20 h-1 bg-purple-400 mt-4 mb-6" />
            <p className="text-lg text-zinc-300 leading-relaxed">
              I led the end-to-end delivery of the fleet management system — from on-site
              discovery and paper sketching through to Figma prototyping, agile
              sprint planning, database design, API development, and cloud
              deployment. Built with React, Node.js, Supabase (PostgreSQL),
              TailwindCSS, and GitHub Actions for CI/CD.
            </p>
          </div>
          <div className="mt-12">
            <ImplementationStrategy1 />
          </div>
          <div className="max-w-4xl mx-auto text-left mt-14">
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
Browse each card to explore the core features.            </p>
          </div>
          <div className="mt-12">
            <AnimatedFlowchartExplorer nodes={journeySteps} />
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Results
            </span>
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              Operational Impact
            </h2>
            <div className="w-20 h-1 bg-purple-400 mt-4 mb-6" />
            <p className="text-lg text-zinc-300 leading-relaxed">
              Since launch, FleetVision has transformed daily operations across
              CMP’s Cork garages — enabling real-time task assignment, rapid RSA
              audits, and cross-departmental alignment.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((m, i) => (
                <MetricsCounter
                  key={i}
                  value={m.value}
                  label={m.label}
                  duration={m.duration}
                />
              ))}
            </div>

            <div className="mt-12">
              <NavigationCards
                problems={problemsData}
                solutions={solutionsData}
              />
            </div>

            <div className="mt-12">
              <UserPersonaCarousel personas={personas} />
            </div>

            <div className="mt-12">
              <VirtualTourWalkthrough slides={tourSlides} />
            </div>

            <div className="mt-12">
              <StyleGuide caseStudyData={caseStudy3Data} />
            </div>

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

export default FleetManagementCaseStudy;
