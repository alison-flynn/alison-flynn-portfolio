// src/components/UIUXDefinition.jsx
import React from 'react';
import MicrocopyRevealTooltips from './MicrocopyRevealTooltips';

const UIUXDefinition = () => {
  return (
    <section id="definition" className="py-6 border-b border-zinc-700">
      <div className="bg-zinc-800 p-6 rounded-xl shadow-md max-w-3xl mx-auto text-left">
        <span className="block text-xs text-gray-400 uppercase tracking-wider mb-2">UI/UX</span>
        <h2 className="text-3xl font-bold text-white mb-4">Definition of UI/UX</h2>
        <p className="text-base text-gray-400 leading-relaxed mb-4">
          <strong className="text-white">UI</strong> focuses on visual elements and interactive features, while <strong className="text-white">UX</strong> encompasses the overall journey and satisfaction a user derives from interacting with it.
        </p>
        <MicrocopyRevealTooltips tooltip="Merge beauty with functionality.">
          <p className="text-base text-gray-400 leading-relaxed">
            Our approach fuses elegant design with intuitive usability for a seamless experience.
          </p>
        </MicrocopyRevealTooltips>
      </div>
    </section>
  );
};

export default UIUXDefinition;
