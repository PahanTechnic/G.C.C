import { useState, useEffect, useRef } from "react";
import { slides } from "../../utils";


// Creating sample slides data since the external import is not available

export default function SidebarBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isBtnHovering, setIsBtnHovering] = useState(false);
  const autoPlayRef = useRef(null);

  // Initialize AOS when component mounts
  useEffect(() => {
    // Check if AOS is available
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }
  }, []);

  // Refresh AOS animations when slide changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, [currentIndex]);

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Toggle play/pause
  const togglePlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  // Auto play interval manager with useEffect
  useEffect(() => {
    let intervalId = null;
    
    if (isAutoPlaying && !isHovering) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, isHovering]);

  return (
    <div
      className="relative w-full overflow-hidden h-96 bg-gray-100 slider-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-aos="fade-in"
      data-aos-duration="1500"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full transition-all duration-1000 ease-in-out ${
            i === currentIndex
              ? "opacity-100 z-20"
              : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Blur overlay on button hover - removed green color */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isBtnHovering ? "backdrop-blur-sm" : ""
            }`}
          ></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center text-white px-4 z-30">
            <h2 
              data-aos={slide.animation}
              data-aos-duration="1000"
              className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              {slide.title}
            </h2>
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              onMouseEnter={() => setIsBtnHovering(true)}
              onMouseLeave={() => setIsBtnHovering(false)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Redesigned */}
      <div 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40"
        data-aos="fade-right"
        data-aos-anchor=".slider-container"
      >
        <button
          onClick={prevSlide}
          className="p-3 bg-white/80 hover:bg-white text-green-600 font-bold rounded-lg shadow-lg transition transform hover:scale-110 flex items-center justify-center w-10 h-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40"
        data-aos="fade-left"
        data-aos-anchor=".slider-container"
      >
        <button
          onClick={nextSlide}
          className="p-3 bg-white/80 hover:bg-white text-green-600 font-bold rounded-lg shadow-lg transition transform hover:scale-110 flex items-center justify-center w-10 h-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators - Redesigned */}
      <div 
        className="absolute bottom-5 left-[45%] transform -translate-x-1/2 flex gap-3 z-40 bg-black/30 backdrop-blur-sm px-4 py-2 justify-center items-center rounded-full"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 ${
              i === currentIndex 
                ? "bg-white h-3 w-6 rounded-full" 
                : "bg-white/40 h-3 w-3 rounded-full hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>

      {/* Play/Pause Toggle Button */}
      <div 
        className="absolute top-4 right-4 z-40"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <button
          onClick={togglePlay}
          className="p-2 bg-black/40 hover:bg-black/60 text-white rounded-full shadow-md transition backdrop-blur-sm w-10 h-10 flex items-center justify-center"
        >
          {isAutoPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}