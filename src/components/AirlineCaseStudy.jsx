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

// Results Components
import MetricsCounter from "./MetricsCounter";
import StyleGuide from "./StyleGuide";
import Conclusions from "./Conclusions";
import FAQAccordion from "./FAQAccordion";
import UserPersonaCarousel from "./UserPersonaCarousel";
import VirtualTourWalkthrough from "./VirtualTourWalkthrough";

// React Icons
import {
  FiSearch,
  FiBarChart2,
  FiCheckCircle,
  FiCreditCard,
  FiShoppingCart,
  FiFileText,
  FiDatabase
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// ------------------------- Data Arrays -------------------------
export const caseStudy1Data = {
  typographyDescription:
    "Continuing with the design system, I selected the Manrope font family for its geometric clarity, contemporary feel, and exceptional legibility across digital interfaces.",
  typography: [
    { name: "Manrope Black", usage: "Used for titles and headers." },
    { name: "Manrope SemiBold", usage: "Used for subheadings and important supporting text." },
    { name: "Manrope Regular", usage: "Used for body text and descriptions." },
  ],
  colors: [
    {
      category: "Primary",
      visuals: [
        { hex: "#222222", name: "Dark Grey" },
        { hex: "#004D40", name: "Teal" },
      ],
    },
    {
      category: "Secondary",
      visuals: [{ hex: "#E8F5E9", name: "Soft Green" }],
    },
    {
      category: "Accent",
      visuals: [
        { hex: "#BD7B00", name: "Goldenrod" },
        { hex: "#FFFDE7", name: "Soft Yellow" },
      ],
    },
    {
      category: "Neutral",
      visuals: [
        { hex: "#F0F0F0", name: "Light Grey" },
        { hex: "#FFFFFF", name: "White" },
        { hex: "#F1F1F1", name: "Soft Grey" },
        { hex: "#F0F4F7", name: "Soft Blue-Grey" },
      ],
    },
  ],
  spacingDescription:
    "Spacing is carefully structured to create a clean and organised layout.",
  spacing: [
    { name: "Margins", details: "Consistent padding and spacing for readability." },
    { name: "Grid Layout", details: "Uses a 12-column responsive grid system." },
    { name: "Button Padding", details: "All buttons have 15px padding for comfort." },
  ],
};

const hifiImages = [
  "/images/hifiservices.svg",
  "/images/hifisearch.svg",
  "/images/hifitrips.svg",
];


export const tourSlides = [
  // ——————— 1. Kickoff: Search & Flight Discovery
  {
    title: "Search, Where Users Expect",
    description:
      "Surfaced a prominent search bar with predictive inputs to reduce friction at the first click. It’s front and fast—no digging required.",
    icon: <FiSearch />,
    callout: "Search friction removed at source.",
    image: "/images/wifi-air-search.svg",
  },
  {
    title: "Stress-Free Browsing",
    description:
      "Replaced cluttered results with focused filters, calm visuals, and scrollable date ranges. Decision-making became intuitive, not overwhelming.",
    icon: <FiBarChart2 />,
    callout: "Simplified scanning and date flexibility.",
    image: "/images/wifi-air-browse.svg",
  },

  // ——————— 2. Flight Selection & Flow Setup
  {
    title: "Comparisons Made Clear",
    description:
      "Built dual flight cards with all the essentials—price, time, duration—upfront. No guesswork, no tabs, just smart side-by-side evaluation.",
    icon: <FiCheckCircle />,
    callout: "Flight decisions, de-stressed.",
    image: "/images/wifi-air-select-confirm.svg",
  },
  {
    title: "Guided, 5-Step Booking Flow",
    description:
      "Introduced a persistent progress tracker. Each page confirms completion before moving on—like checkpoints through a streamlined tunnel.",
    icon: <FiCheckCircle />,
    callout: "Users know where they are, always.",
    image: "/images/wifi-air-confirm-popup.svg",
  },

  // ——————— 3. Contact Info
  {
    title: "Frictionless Contact Entry",
    description:
      "Split contact forms into focused, friendly steps. No overload—just one field at a time, like chatting with a digital assistant.",
    icon: <FiFileText />,
    callout: "Reduced drop-off during a key moment.",
    image: "/images/air-contact-d.svg",
  },
  {
    title: "Contact Confirmed",
    description:
      "Reinforced success with warm microcopy and animations. Users feel acknowledged instantly—no uncertainty, no backtracking.",
    icon: <FiCheckCircle />,
    callout: "Emotional lift post-input.",
    image: "/images/wifi-contact-success.svg",
  },

  // ——————— 4. Passenger Info
  {
    title: "Passenger Info, Organised",
    description:
      "Grouped personal details, IDs, baggage, and accessibility into smart tabs—like flipping through a notebook with labelled sections.",
    icon: <FiFileText />,
    callout: "Cognitive load cut by design.",
    image: "/images/wifi-air-pass.svg",
  },
  {
    title: "Details Confirmed Instantly",
    description:
      "After input, users get clear confirmation before moving to extras. A simple interaction, but high on reassurance and rhythm.",
    icon: <FiCheckCircle />,
    callout: "Micro-feedback guides the journey.",
    image: "/images/wifi-air-pass-success.svg",
  },

  // ——————— 5. Extras & Checkout
  {
    title: "Add-Ons with Autonomy",
    description:
      "Positioned ‘no extras’ as default, letting users opt-in without pressure. Choices are clear, pricing is upfront, hierarchy is honest.",
    icon: <FiShoppingCart />,
    callout: "Upsells without manipulation.",
    image: "/images/wifi-air-services.svg",
  },
  {
    title: "Extras Confirmed, Visually",
    description:
      "Each selected service locks in with a bold visual cue. No second guessing—just confidence at the checkout gate.",
    icon: <FiCheckCircle />,
    callout: "Closed the loop on optional steps.",
    image: "/images/wifi-air-services-success.svg",
  },

  // ——————— 6. Payment
  {
    title: "Checkout with Flow & Focus",
    description:
      "Streamlined inputs, reassured with security cues, and mirrored e-commerce norms. Payment became a moment of trust, not tension.",
    icon: <FiCreditCard />,
    callout: "Reduced user hesitation observed.",
    image: "/images/wifi-air-payment.svg",
  },
  {
    title: "Success, Framed with Options",
    description:
      "Post-payment, users land in a clean confirmation screen with smart next steps—not a dead end, but a door forward.",
    icon: <FiCheckCircle />,
    callout: "Completion reinforced and redirected.",
    image: "/images/wifi-air-payment-success.svg",
  },

  // ——————— 7. My Trips: Post-Booking Hub
  {
    title: "All Bookings, One Dashboard",
    description:
      "‘My Trips’ centralises check-ins, past flights, payment info, and quick pass downloads. Think: airline control panel, reimagined.",
    icon: <FiDatabase />,
    callout: "Reduced support load post-booking.",
    image: "/images/wifi-air-trips.svg",
  },

  // ——————— 8. Explore Deals
  {
    title: "Deals, on Your Terms",
    description:
      "Removed homepage clutter and moved offers into a clean flow with filters, images, and urgency cues—never pressure.",
    icon: <FiBarChart2 />,
    callout: "Promotions placed in user control.",
    image: "/images/wifi-air-deals.svg",
  },

  // ——————— 9. Project Impact
  {
    title: "Design Decisions that Scale",
    description:
      "From search to My Trips, each decision was rooted in clarity, psychology, and trust. The result? A booking experience people return to.",
    icon: <FiBarChart2 />,
    callout: "Design with outcomes, not just pixels.",
    image: "/images/herotra1.svg",
  },
];


const faqs = [
  {
    question: "How did you identify the biggest user frustrations?",
    answer:
      "I conducted user interviews, surveys, and usability tests to uncover navigation difficulties, unclear booking flows, and promotional clutter.",
  },
  {
    question: "Which UX methodologies informed the redesign?",
    answer:
      "I used card sorting for information architecture, affinity diagramming to group user concerns, and customer journey mapping to highlight pain points in the booking flow.",
  },
  {
    question: "How did you improve the overall booking experience?",
    answer:
      "I streamlined the process with a clear five-step flow, improved search visibility, and introduced real-time feedback to guide users confidently.",
  },
  {
    question: "How did you measure usability improvements?",
    answer:
      "I tested the prototype against existing airline websites, using metrics like reduced booking time, improved navigation scores, and lower drop-off rates.",
  },
  {
    question: "What steps did you take to declutter the homepage?",
    answer:
      "I moved promotional content to a dedicated deals page, reducing distractions and improving user focus on booking.",
  },
  {
    question: "How did you ensure accessibility and usability?",
    answer:
      "I followed WCAG guidelines, tested contrast ratios, and optimised the interface for mobile and desktop responsiveness.",
  },
];

const personas = [
  {
    iconType: "airTravel",
    image: "/images/tra3.svg",
    name: "Alice Smith",
    role: "Frequent Traveller",
    beforeQuote:
      "Booking flights used to be a hassle—too many steps, unclear progress, and too much clicking back and forth.",
    quote:
      "Now, I can book my flights in half the time, with clear steps guiding me through the process effortlessly.",
    rating: 5,
    goals: "Quick and efficient travel bookings.",
    painPoints: "Delays caused by complicated interfaces.",
    mentalModel: "Needs a clear, streamlined experience for frequent trips.",
  },
  {
    iconType: "airTravel",
    image: "/images/tra1.svg",
    name: "John Franks",
    role: "Business Traveller",
    beforeQuote:
      "I wasted too much time navigating cluttered menus and hidden options. Booking a flight felt like a chore.",
    quote:
      "The redesign makes it easy to book on the go—everything is exactly where I expect it to be.",
    rating: 4,
    goals: "Efficiency and clarity in travel.",
    painPoints: "Confusing booking interfaces.",
    mentalModel: "Prioritises simplicity and speed.",
  },
  {
    iconType: "airTravel",
    image: "/images/tra2.svg",
    name: "Maria Garcia",
    role: "Leisure Traveller",
    beforeQuote:
      "I got overwhelmed by all the choices and distractions—I kept getting sidetracked by promotions.",
    quote:
      "The new flow keeps me focused, and I feel more in control of my trip planning.",
    rating: 5,
    goals: "Stress-free and visually appealing booking.",
    painPoints: "Overwhelmed by information and options.",
    mentalModel: "Prefers an intuitive, friendly interface.",
  },
];

export const journeySteps = [
  {
    stepCategory: "research",
    icon: "/images/herotra-3.svg",
    wireframe: "/images/aer.svg",
    sketch: "/images/ryan.svg",
    highFidelity: "/images/researching-travel.svg",
    title: "User Research & Competitive Analysis",
    description:
      "Conducted usability tests, surveys, and competitor benchmarking to uncover key pain points in the flight booking process.",
    tools: [],
  },
  {
    stepCategory: "analysis",
    icon: "/images/herotra-3.svg",
    sketch: "/images/air-affinity.jpg",
    wireframe: "/images/air-cjm.svg",
    highFidelity: "/images/airanalytics.png",
    title: "User Journey Mapping",
    description:
      "Mapped the end-to-end journey, addressing issues like hidden search bars, unclear navigation, and checkout frustrations.",
    tools: [],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    wireframe: "/images/wifisearch.svg",
    highFidelity: "/images/wifi-air-search.svg",
    sketch: "/images/ske1.jpg",
    title: "Flight Search",
    description:
      "Optimised the search experience with predictive input, smart filtering, and speed improvements.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    wireframe: "/images/wifiselect.svg",
    highFidelity: "/images/wifi-air-browse.svg",
    sketch: "/images/ske2.jpg",
    title: "Flight Browsing Experience",
    description:
      "Designed an intuitive browsing system with dynamic filters and personalised recommendations.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    wireframe: "/images/air-ske-select.svg",
    highFidelity: "/images/wifi-air-select-confirm.svg",
    sketch: "/images/ske-confirm-select.svg",
    title: "Flight Selection",
    description:
      "Enhanced comparison layouts, price transparency, and user-friendly ticket selection.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    wireframe: "/images/wifiprocess.svg",
    highFidelity: "/images/hifiservices.svg",
    title: "Extras",
    sketch: "/images/ske3.jpg",
    description:
      "Refined the step-by-step process with clear progress indicators and real-time feedback.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    wireframe: "/images/wifipayment.svg",
    sketch: "/images/ske4.jpg",
    highFidelity: "/images/wifi-air-payment.svg",
    title: "Payment",
    description:
      "Integrated seamless payment flows with secure validation, add-ons, and instant confirmation.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    sketch: "/images/sketchconfirm.svg",
    wireframe: "/images/air-confirm.png",
    highFidelity: "/images/wifi-air-confirm-popup.svg",
    title: "Booking Confirmation",
    description:
      "Designed a reassuring confirmation flow, providing clarity on the next steps.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    sketch: "/images/ske5.jpg",
    wireframe: "/images/wifitrips.svg",
    highFidelity: "/images/wifi-air-trips.svg",
    title: "Trip Management",
    description: "Designed an intuitive browsing system and personalised recommendations.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "design",
    icon: "/images/herotra-3.svg",
    sketch: "/images/air-ske-deals.png",
    wireframe: "/images/wifideals.svg",
    highFidelity: "/images/wifi-air-deals-1.svg",
    title: "Deals",
    description: "Designed a separate deals browsing flow, providing clarity for the user.",
    tools: ["/images/figma.svg"],
  },
  {
    stepCategory: "test",
    icon: "/images/herotra-3.svg",
    sketch: "/images/air-compb-3.svg",
    wireframe: "/images/air-deal-option-1.png",
    highFidelity: "/images/airtravel-large-2.jpg",
    title: "Usability Testing & Iteration",
    description:
      "Refined designs through iterative testing, ensuring an optimal user experience.",
    tools: [],
  },
];

const metrics = [
  { value: 15, label: "Faster Search Time", duration: 1.5 },
  { value: 12, label: "Reduction in Abandoned Bookings", duration: 1.5 },
  { value: 10, label: "Decrease in Navigation Errors", duration: 1.5 },
];

const problemsDataAiria = {
  title: "User Issues",
  icon: "✕",
  items: [
    "Users struggled to locate the search bar quickly, delaying their booking process.",
    "The multi-step booking process lacked clear progress indicators, causing confusion and drop-offs.",
    "Promotional deals on the homepage distracted users, leading to accidental clicks and navigation errors.",
  ],
};

const solutionsDataAiria = {
  title: "Smart Fixes",
  icon: "✓",
  items: [
    "Redesigned the homepage with a clearly visible search bar at the top, reducing search time by 15%.",
    "Added a 5-step progress indicator to guide users through the booking flow, decreasing abandoned bookings by 12%.",
    "Moved promotional deals to a separate Deals page, reducing accidental clicks and navigation errors by 10%.",
  ],
};

// ------------------------- Main Component -------------------------
const AirlineCaseStudy = () => {
  const mainRef = useRef(null);

  // UseLayoutEffect so the animations happen before the browser’s next frame
  useLayoutEffect(() => {
    // Use a single GSAP context to avoid collisions
    let ctx = gsap.context(() => {
      // Animate every ".case-study-content" only once
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
              // "once: true" ensures it only animates the first time you scroll in
              // (preventing re-trigger if user scrolls away then back)
              once: true,
            },
          }
        );
      });
    }, mainRef); // pass mainRef as a scoping container to gsap.context()

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Header & Dropdown */}
      <CaseStudyHeader />
      <CaseStudyDropdown />

      {/* Hero Section */}
      <CaseStudyHero
        title="Elevating Travel Booking"
        subtitle="Reimagining flight booking with user-centred design and intuitive navigation."
        role="Lead UX Designer"
        tools="Figma, Adobe XD, Balsamiq"
        imageSrc="/images/herotra1.svg"
      />

      {/* Main Content */}
      <main ref={mainRef} className="pt-20 container mx-auto px-6 space-y-20">
        {/* OVERVIEW SECTION */}
        <section id="overview" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Overview
            </span>
            <h2 className="text-6xl font-serif font-bold leading-tight text-white">
              Defining the User
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mt-5 mb-7"></div>
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
              Through extensive research, I identified the key user groups whose
              diverse needs formed the foundation of the redesign.
            </p>
          </div>
          {/* User Personas */}
          <div className="mt-14">
            <DefineUser personas={personas} />
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Process
            </span>
            <h2 className="text-6xl font-serif font-bold text-white leading-tight">
              My Approach
            </h2>
            <div className="w-24 h-1 bg-purple-400 mt-5 mb-7"></div>
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
              My methodology combines rigorous research with iterative design to
              ensure clarity and impact at every stage.
            </p>
          </div>
          {/* Strategy */}
          <div className="mt-14">
            <ImplementationStrategy />
          </div>
          <div className="max-w-4xl mx-auto text-left mt-14">
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
              Uncover strategic milestones in my design journey below.
            </p>
          </div>
          {/* Flowchart */}
          <div className="mt-14">
            <AnimatedFlowchartExplorer nodes={journeySteps} />
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section id="results" className="case-study-content py-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
              Results
            </span>
            <h2 className="text-6xl font-serif font-bold text-white leading-tight">
              The Outcome
            </h2>
            <div className="w-24 h-1 bg-purple-400 mt-5 mb-7"></div>
            <p className="text-lg font-sans text-zinc-300 leading-relaxed tracking-wide">
              The redesign significantly improved engagement, reduced navigation
              errors, and streamlined the booking process.
            </p>

            {/* Metrics */}
            <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900 rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
                >
                  <MetricsCounter
                    value={metric.value}
                    label={metric.label}
                    duration={metric.duration}
                  />
                </div>
              ))}

              
            </div>
 {/* Navigation Cards */}
 <div className="mt-1">
              <NavigationCards
                problems={problemsDataAiria}
                solutions={solutionsDataAiria}
              />
            </div>
            {/* User Persona Carousel */}
            <div className="mt-14">
              <UserPersonaCarousel personas={personas} />
            </div>

           

            {/* Virtual Tour */}
            <div className="mt-14">
              <VirtualTourWalkthrough slides={tourSlides} />
            </div>

            {/* Style Guide */}
            <div className="mt-14">
              <StyleGuide caseStudyData={caseStudy1Data} />
            </div>

            {/* FAQs */}
            <div className="mt-14">
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

export default AirlineCaseStudy;
