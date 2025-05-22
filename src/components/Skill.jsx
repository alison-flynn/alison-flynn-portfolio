/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import React from "react";
import SkillCard from "./SkillCard";

const skillItems = [
  // Design & Prototyping
  { imgSrc: '/images/figma.svg',           label: 'Figma',           desc: 'Collaborative design & prototyping' },
  { imgSrc: '/images/balsamiq.svg',         label: 'Balsamiq',         desc: 'Rapid low-fidelity wireframing' },
  { imgSrc: '/images/adobexd.png',          label: 'Adobe XD',        desc: 'High-fidelity prototyping' },
  { imgSrc: '/images/adobeexpress.svg',     label: 'Adobe Express',   desc: 'Quick content & graphics' },
  { imgSrc: '/images/canva.svg',            label: 'Canva',           desc: 'Visual layouts & presentations' },
  { imgSrc: '/images/lucidchart.svg',       label: 'Lucidchart',      desc: 'Flowcharts & diagrams' },
  { imgSrc: '/images/miro-2.svg',           label: 'Miro',            desc: 'Remote whiteboarding & workshops' },

  // UX Research & Analytics
  { imgSrc: '/images/hotjar.svg',           label: 'Hotjar',          desc: 'Heatmaps & session recordings' },
  { imgSrc: '/images/google-lighthouse.svg',label: 'Lighthouse',      desc: 'Performance & accessibility audits' },
  { imgSrc: '/images/wave.png',             label: 'WebAIM/WAVE',     desc: 'Accessibility testing' },

  // Front-End
  { imgSrc: '/images/html-1.svg',           label: 'HTML5',           desc: 'Semantic markup' },
  { imgSrc: '/images/css3.svg',             label: 'CSS3',            desc: 'Responsive styling' },
  { imgSrc: '/images/javascript.svg',       label: 'JavaScript',      desc: 'ES6+ scripting' },
  { imgSrc: '/images/typescript.svg',       label: 'TypeScript',      desc: 'Typed superset of JavaScript' },
  { imgSrc: '/images/react.svg',            label: 'React',           desc: 'Component-based UI library' },
  { imgSrc: '/images/tailwindcss.svg',      label: 'TailwindCSS',     desc: 'Utility-first CSS framework' },

  // Back-End & Data
  { imgSrc: '/images/nodejs.svg',           label: 'Node.js',         desc: 'Server-side JavaScript' },
  { imgSrc: '/images/supabase.png',         label: 'Supabase',        desc: 'Hosted PostgreSQL & auth' },
  { imgSrc: '/images/postgresql.svg',       label: 'PostgreSQL',      desc: 'Relational database' },
  { imgSrc: '/images/jspdf.svg',            label: 'jsPDF',           desc: 'Client-side PDF generation' },
  { imgSrc: '/images/sheetjs.png',          label: 'SheetJS',         desc: 'Excel export & parsing' },

  // DevOps & CI/CD
  { imgSrc: '/images/github1.svg',   label: 'GitHub Actions',  desc: 'Automated testing & deploys' },
  { imgSrc: '/images/netlify.svg',          label: 'Netlify',         desc: 'Jamstack hosting & functions' },
  { imgSrc: '/images/vercel.svg',           label: 'Vercel',          desc: 'Serverless deployments' },

 
];

const Skill = () => (
  <section className="section">
    <div className="container">
      <h2 className="headline-2 reveal-up">
        Full-Stack & UX Toolkit
      </h2>
      <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        From user research and visual design to frontend, backend, and CI/CD—this is my end-to-end toolchain.
      </p>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        {skillItems.map(({ imgSrc, label, desc }, idx) => (
          <SkillCard
            key={idx}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
            classes="reveal-up"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skill;
