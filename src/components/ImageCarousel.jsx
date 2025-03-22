// src/components/ImageCarousel.jsx
import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <div className="overflow-hidden rounded-xl shadow-xl border border-transparent bg-gradient-to-br from-purple-500 via-pink-500 to-transparent bg-clip-padding">
        <div className="bg-zinc-900 rounded-xl p-2">
          <div className="w-full flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg transition-all duration-500"
            />
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-400 transition shadow-lg"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-400 transition-colors shadow-lg"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;
