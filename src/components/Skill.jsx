/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItems = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Collaborative design tool'
  },
  {
    imgSrc: '/images/balsamiq.svg',
    label: 'Balsamiq',
    desc: 'Rapid wireframing tool'
  },
  {
    imgSrc: '/images/adobexd.png',
    label: 'Adobe XD',
    desc: 'Powerful design and prototyping tool'
  },
  {
    imgSrc: '/images/adobeexpress.svg',
    label: 'Adobe Express',
    desc: 'Quick design and content creation tool'
  },
  {
    imgSrc: '/images/canva.svg',
    label: 'Canva',
    desc: 'Graphic design tool'
  },
  {
    imgSrc: '/images/lucidchart.svg',
    label: 'Lucidchart',
    desc: 'Collaborative diagramming tool'
  },
  {
    imgSrc: '/images/html-1.svg',
    label: 'HTML5',
    desc: 'Core markup language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'UI styling tool'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Dynamic scripting language'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Component-based UI library'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Utility-first CSS'
  },
  {
    imgSrc: '/images/google-lighthouse.svg',
    label: 'Lighthouse',
    desc: 'Performance audit tool'
  },
  {
    imgSrc: '/images/wave.png',
    label: 'WebAIM',
    desc: 'Accessibility audit tool'
  },
  {
    imgSrc: '/images/miro-2.svg',
    label: 'Miro',
    desc: 'Collaborative whiteboard'
  },
  {
    imgSrc: '/images/hotjar.svg',
    label: 'Hotjar',
    desc: 'User behavior analytics tool'
  }
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          UX Tools & Technologies
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Industry-standard platforms I use to design, prototype, and deliver seamless user journeys.</p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
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
};

export default Skill;
