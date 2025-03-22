import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactDOM from "react-dom";

gsap.registerPlugin(ScrollTrigger);

/**
 * Each StepNode handles:
 * - The step card
 * - The pop-up overlay with images (wired to mouseover).
 */
const StepNode = ({ node, index, isLimitedImage, overlayContainer }) => {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);

  // Position the overlay next to the card, either left or right depending on index
  const updateOverlayPosition = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const overlayWidth = 600;
    const overlayHeight = 320;
    const margin = 20;

    // Even index → place overlay to the right, odd → to the left
    let left =
      index % 2 === 0
        ? rect.right + margin
        : rect.left - overlayWidth - margin;

    // If it runs off the right edge, fallback left
    if (left + overlayWidth > window.innerWidth) {
      left = rect.left - overlayWidth - margin;
    }

    // Center vertically
    const top = rect.top + rect.height / 2 - overlayHeight / 2;

    gsap.set(overlayRef.current, {
      left,
      top,
      width: overlayWidth,
      height: overlayHeight,
    });
  };

  const showOverlay = () => {
    if (!overlayRef.current) return;
    updateOverlayPosition();
    gsap.to(overlayRef.current, {
      opacity: 1,
      scale: 1,
      zIndex: 1000,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const hideOverlay = () => {
    if (!overlayRef.current) return;
    gsap.to(overlayRef.current, {
      opacity: 0,
      scale: 0.95,
      zIndex: -1,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  return (
    <div
      className={`relative flex items-center w-full ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {/* Dot on the timeline (z-0) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-2 border-white z-0" />

      {/* Card (z-10) */}
      <div
        ref={cardRef}
        onMouseEnter={!node.isInactive ? showOverlay : undefined}
        onMouseMove={!node.isInactive ? updateOverlayPosition : undefined}
        onMouseLeave={!node.isInactive ? hideOverlay : undefined}
        className={`group w-[380px] p-6 rounded-xl transition-all duration-300 overflow-hidden relative z-10 ${
          node.isInactive
            ? "bg-white/5 border border-white/20 shadow-md opacity-40 filter grayscale brightness-75 pointer-events-none"
            : "bg-zinc-900 border border-purple-500/30 shadow-lg hover:scale-105 hover:shadow-purple-500/30"
        }`}
      >
        <div className="relative z-10">
          <h3 className="text-white text-xl font-heading mb-2">{node.title}</h3>
          <p className="text-zinc-400 text-base font-sans leading-relaxed">
            {node.description}
          </p>
        </div>

        {/* Tools (Icons) */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {node.tools.map((tool, idx) => (
            <img key={idx} src={tool} alt="Tool Icon" className="w-6 h-6 opacity-80" />
          ))}
        </div>
      </div>

      {/* Overlay (Portal) - show triple images or single image */}
      {!node.isInactive && overlayContainer
        ? ReactDOM.createPortal(
            <div
              ref={overlayRef}
              className="pointer-events-none fixed flex transition-all duration-50"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
                transform: "scale(0.95)",
                opacity: 0,
                willChange: "opacity, transform",
              }}
            >
              {isLimitedImage ? (
                // Just highFidelity
                <div className="w-full h-full p-2 flex items-center justify-center bg-zinc-800">
                  <img
                    src={node.highFidelity}
                    alt="High-Fidelity Design"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                // All three images: Sketch, Wireframe, High-Fidelity
                <>
                  <div className="w-1/3 h-full p-2 flex items-center justify-center bg-zinc-800 border-r border-zinc-700">
                    <img
                      src={node.sketch}
                      alt="Sketch"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-1/3 h-full p-2 flex items-center justify-center bg-zinc-800 border-r border-zinc-700">
                    <img
                      src={node.wireframe}
                      alt="Wireframe"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-1/3 h-full p-2 flex items-center justify-center bg-zinc-800">
                    <img
                      src={node.highFidelity}
                      alt="High-Fidelity"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </>
              )}
            </div>,
            overlayContainer
          )
        : null}
    </div>
  );
};

/**
 * Main AnimatedFlowchartExplorer
 * - Renders the timeline, step nodes, and the marker that follows mouse vertical
 */
const AnimatedFlowchartExplorer = ({ nodes }) => {
  const containerRef = useRef(null);
  const markerRef = useRef(null);
  const [overlayContainer, setOverlayContainer] = useState(null);

  // Make sure "overlay-root" exists in DOM
  useEffect(() => {
    let container = document.getElementById("overlay-root");
    if (!container) {
      container = document.createElement("div");
      container.id = "overlay-root";
      document.body.appendChild(container);
    }
    setOverlayContainer(container);
  }, []);

  // Animate the step cards on scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".group");
    gsap.fromTo(
      items,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Move the marker (logo + frosted circle) from top to bottom of container
  const handleMouseMove = (e) => {
    if (!containerRef.current || !markerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const markerHeight = markerRef.current.clientHeight;

    // Y relative to container top
    let relativeY = e.clientY - containerRect.top;
    // clamp so it won't exceed container bounds
    relativeY = Math.max(0, Math.min(relativeY, containerRect.height - markerHeight));

    gsap.to(markerRef.current, {
      y: relativeY,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <section
      className="relative max-w-6xl mx-auto py-12 px-6 min-h-[1000px]"
      onMouseMove={handleMouseMove}
    >
      {/* Vertical timeline line (z-0) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-purple-300 z-0" />

      {/* The marker (z-50) => highest layer */}
      <div
        ref={markerRef}
        className="absolute left-1/2 -translate-x-1/2 w-16 h-16 pointer-events-none z-50"
      >
        {/* Background behind the logo => frosted circle */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full z-[1]" />

        {/* The actual logo => on top inside marker */}
        <img
          src="/images/logo-1.svg"  /* <-- your logo path here */
          alt="Marker Logo"
          className="absolute inset-0 w-full h-full object-cover rounded-full p-2 z-[2]"
        />
      </div>

      <div ref={containerRef} className="relative flex flex-col space-y-12 z-10">
        {nodes.map((node, index) => {
          // first, second, last => only show highFidelity
          const isLimitedImage = index === 0 || index === 1 || index === nodes.length - 1;
          // or if you want them "inactive"
          const isInactive = node.isInactive || false;

          return (
            <StepNode
              key={index}
              index={index}
              node={{ ...node, isInactive }}
              isLimitedImage={isLimitedImage}
              overlayContainer={overlayContainer}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AnimatedFlowchartExplorer;
