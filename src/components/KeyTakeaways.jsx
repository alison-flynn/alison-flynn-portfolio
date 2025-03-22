// src/components/KeyTakeaways.jsx
import React from "react";

const KeyTakeaways = ({ title, takeaways = [] }) => {
  return (
    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl shadow-lg">
      <h3 className="text-3xl font-bold mb-4 text-center text-zinc-50">{title}</h3>
      <ul className="list-disc ml-8 space-y-3 text-xl text-zinc-300">
        {takeaways.map((point, idx) => (
          <li key={idx} className="leading-relaxed">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
