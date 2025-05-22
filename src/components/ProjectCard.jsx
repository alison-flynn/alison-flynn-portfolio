import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, desc, projectLink, classes }) => {
  const isComingSoon = imgSrc === "/images/cg.svg";

  return (
    <div
      className={`relative bg-zinc-800 rounded-2xl shadow-lg 
        transition-transform duration-500 ease-in-out cursor-pointer 
        p-4 md:p-6 flex flex-col hover:scale-105 hover:shadow-2xl
        overflow-hidden ${classes || ""}`}
    >
      {/* Image Section */}
      <figure className="relative w-full h-[290px] overflow-hidden rounded-t-2xl">
        {isComingSoon ? (
          <div className="absolute inset-0">
            <img
              src={imgSrc}
              alt={title}
              loading="lazy"
              className="block w-full h-full object-cover rounded-t-2xl"
              style={{ borderRadius: "inherit" }}
            />
            <div
            >
            </div>
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="block absolute inset-0 w-full h-full object-cover rounded-t-2xl"
            style={{ borderRadius: "inherit" }}
          />
        )}
      </figure>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 mt-4">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        {desc && (
          <p className="text-zinc-400 text-sm md:text-base mt-2 leading-relaxed">
            {desc}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((label, key) => (
            <span
              key={key}
              className="text-xs md:text-sm font-medium text-purple-300 
                         bg-zinc-700/30 px-2 py-1 rounded-md tracking-wide"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow Button - Bottom Right */}
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-md grid place-items-center bg-purple-400 hover:bg-purple-500 transition-colors duration-300 shrink-0">
        <span className="material-symbols-rounded text-zinc-900 text-base">
          arrow_outward
        </span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  desc: PropTypes.string,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
