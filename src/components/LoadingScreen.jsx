// LoadingScreenOption1.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // 1) Quickly fade the overlay in from 0 to 1
    tl.fromTo(
      loadingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    // 2) Bring the logo from a slightly smaller scale to full size for a snappy entrance
    tl.fromTo(
      logoRef.current,
      { scale: 0.9 },
      { scale: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2" // slight overlap with the fade in
    );

    // 3) A quick subtle pulse effect on the logo
    tl.to(logoRef.current, {
      scale: 1.03,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });

    // 4) Quickly fade the overlay out to 0
    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900"
    >
      <img
        ref={logoRef}
        src="/images/logo-1.svg"
        alt="Logo"
        className="w-24 h-24"
      />
    </div>
  );
};

export default LoadingScreen;
