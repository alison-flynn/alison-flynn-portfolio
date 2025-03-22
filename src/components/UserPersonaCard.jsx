import React from "react";

const UserPersonaCard = ({ persona }) => {
  const { image, name, role, beforeQuote, goals, painPoints, mentalModel } = persona;

  return (
    <div className="
      relative p-8 bg-zinc-900 rounded-2xl overflow-hidden group 
      transition-transform duration-300 hover:scale-105 
      shadow-xl max-w-[450px] mx-auto md:max-w-full flex flex-col justify-between h-full
    ">
      {/* Header: Name, Role & Circular Image */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-left pr-4">
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-zinc-400">{role}</p>
        </div>
        <div className="w-20 h-20 overflow-hidden rounded-full flex-shrink-0 ">
          <img src={image} alt={name} className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* Before Quote as a teaser */}
      <div className="mt-auto text-right max-w-[75%] ml-auto">
        <p className="text-sm text-purple-300 italic leading-relaxed">
          "{beforeQuote}"
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="
        absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col justify-center items-start
        opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl px-6 py-8 z-20
      ">
        <div className="text-left text-sm space-y-3 text-zinc-200 w-full">
          {goals && (
            <p>
              <span className="font-semibold text-white">Goals:</span>
              <span className="ml-2">{goals}</span>
            </p>
          )}
          {painPoints && (
            <p>
              <span className="font-semibold text-white">Pain Points:</span>
              <span className="ml-2">{painPoints}</span>
            </p>
          )}
          {mentalModel && (
            <p>
              <span className="font-semibold text-white">Mental Model:</span>
              <span className="ml-2">{mentalModel}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPersonaCard;
