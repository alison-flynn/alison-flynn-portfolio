import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLineSVG = ({ svgType = "hereng-3" }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const path = svgRef.current.querySelector("path");
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        delay: 0.3,
        ease: "power1.inOut",
      });
    }
  }, [svgType]);

  let pathContent;
  switch (svgType) {
    case "hereng-3":
      pathContent = (
        <path
          d="M50 200 L350 200"
          stroke="#8B5CF6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
      break;
    case "herograd-3":
      pathContent = (
        <path
          d="M200 50 L200 350"
          stroke="#A78BFA"
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
      break;
    case "herotra-3":
      pathContent = (
        <path
          d="M100 100 L300 300"
          stroke="#C084FC"
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
      break;
    default:
      pathContent = (
        <path
          d="M50 200 L350 200"
          stroke="#8B5CF6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
  }

  return (
    <svg
      ref={svgRef}
      width="100%"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {pathContent}
    </svg>
  );
};

export default AnimatedLineSVG;
