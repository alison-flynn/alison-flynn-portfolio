import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import gsap from "gsap";

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (openIndex !== null) {
      gsap.fromTo(
        faqRefs.current[openIndex],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [openIndex]);

  // Split FAQs into two columns for symmetry
  const midIndex = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midIndex);
  const rightColumn = faqs.slice(midIndex);

  return (
    <section id="faq" className="py-16 px-6 md:px-12 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Title & Description */}
        <h2
          className="headline-2 reveal-up mb-6 text-center"
          style={{ lineHeight: "1.2" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up text-left">
          Explore answers to common questions about my design process and the impact of user-centred research.
        </p>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-md transition-transform hover:scale-105 overflow-hidden flex flex-col"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left font-heading font-medium text-lg text-white hover:bg-zinc-800 transition-all rounded-t-2xl min-h-[72px]"
                >
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  ref={(el) => (faqRefs.current[idx] = el)}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    height: openIndex === idx ? "auto" : 0,
                    opacity: openIndex === idx ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-4 text-zinc-300 font-body text-md leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, idx) => (
              <div
                key={idx + midIndex}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-md transition-transform hover:scale-105 overflow-hidden flex flex-col"
              >
                <button
                  onClick={() => toggleFAQ(idx + midIndex)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left font-heading font-medium text-lg text-white hover:bg-zinc-800 transition-all rounded-t-2xl min-h-[72px]"
                >
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${openIndex === idx + midIndex ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  ref={(el) => (faqRefs.current[idx + midIndex] = el)}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    height: openIndex === idx + midIndex ? "auto" : 0,
                    opacity: openIndex === idx + midIndex ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-4 text-zinc-300 font-body text-md leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
