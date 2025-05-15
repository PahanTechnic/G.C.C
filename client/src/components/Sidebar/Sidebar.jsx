import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "../assets/slide1.png",
    title: "Explore Knowledge",
  },
  {
    image: "../assets/slide2.png",
    title: "Join the Future of Learning",
  },
  {
    image: "../assets/slide3.png",
    title: "Shape Your Destiny with Us",
  },
];

const Sidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isBtnHovering, setIsBtnHovering] = useState(false);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  const resetTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying && !isHovering) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isHovering]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out ${
            i === currentIndex
              ? "opacity-100 z-20 pointer-events-auto"
              : "opacity-0 z-10 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${i + 1}`}
            className="w-full object-cover aspect-[16/9]"
          />

          {/* Blur effect on button hover */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isBtnHovering ? "bg-green-900/30 backdrop-blur-md" : ""
            }`}
          ></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center text-white px-4 z-30">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <button
              onMouseEnter={() => setIsBtnHovering(true)}
              onMouseLeave={() => setIsBtnHovering(false)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40">
        <button
          onClick={() => {
            prevSlide();
            resetTimer();
          }}
          className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition transform hover:scale-110"
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40">
        <button
          onClick={() => {
            nextSlide();
            resetTimer();
          }}
          className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition transform hover:scale-110"
        >
          ❯
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              resetTimer();
            }}
            className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
              i === currentIndex ? "bg-green-500 w-5" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>

      {/* Play/Pause Toggle */}
      <div className="absolute top-4 right-4 z-40">
        <button
          onClick={togglePlay}
          className="p-2 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-md transition"
        >
          {isAutoPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
