import React, { useState } from "react";

const MicrocopyRevealTooltips = ({ tooltip, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div
          className="
            absolute bottom-full left-1/2 transform -translate-x-1/2 
            mb-2 px-4 py-3 
            bg-zinc-900/95 backdrop-blur-md
            text-gray-200 text-sm tracking-wide leading-relaxed
            rounded-lg shadow-xl z-50 w-60
          "
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default MicrocopyRevealTooltips;
