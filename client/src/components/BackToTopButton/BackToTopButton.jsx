import { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";
import "./BackToTopButton.css"; // Assuming you have a CSS file for styles

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const buttonRef = useRef(null);
  const rippleRef = useRef(null);
  const shootingStarRef = useRef(null);

  // Calculate scroll percentage and handle button visibility
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const calculatedPercentage = Math.min((scrollTop / scrollHeight) * 100, 100);
    
    setScrollPercentage(calculatedPercentage);
    setVisible(scrollTop > 300);
  };

  // Smooth scroll to top with easing
  const scrollToTop = () => {
    createRipple();
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scrollTop - scrollTop / 10);
    }
  };

  // Create ripple effect
  const createRipple = () => {
    if (rippleRef.current) {
      rippleRef.current.style.animation = "none";
      setTimeout(() => {
        if (rippleRef.current) {
          rippleRef.current.style.animation = "ripple 0.8s ease-out";
        }
      }, 10);
    }
  };

  // Create shooting star effect
  const createShootingStar = () => {
    if (!shootingStarRef.current) return;
    
    shootingStarRef.current.style.animation = "none";
    setTimeout(() => {
      const randomDelay = Math.random() * 3000;
      setTimeout(() => {
        if (shootingStarRef.current) {
          shootingStarRef.current.style.animation = "shooting-star 0.8s ease-out";
          setTimeout(createShootingStar, Math.random() * 5000 + 2000);
        }
      }, randomDelay);
    }, 10);
  };

  // Set up scroll listener and cleanup
  useEffect(() => {
    let ticking = false;
    
    const handleScrollWithThrottle = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScrollWithThrottle);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener("scroll", handleScrollWithThrottle);
    };
  }, []);

  // Initialize shooting star effect when button becomes visible
  useEffect(() => {
    if (visible) {
      setTimeout(() => createShootingStar(), 600);
    }
  }, [visible]);

  // Calculate the progress circle properties
  const radius = 31;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-100 relative"
          style={{ width: `${scrollPercentage}%` }}
        >
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm"></div>
        </div>
      </div>

      {/* Back To Top Button Container */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center">
        {/* Tooltip */}
        <div 
          className={`absolute -top-12 bg-white text-emerald-600 py-2 px-4 rounded-full text-sm font-medium shadow-lg whitespace-nowrap opacity-0 invisible transform translate-y-2 transition-all duration-300 before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-white ${visible ? 'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0' : ''}`}
        >
          Back to Top
        </div>

        {/* Button */}
        <div 
          ref={buttonRef}
          className={`group w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-none outline-none cursor-pointer flex justify-center items-center relative shadow-lg shadow-emerald-500/40 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
            visible 
              ? 'opacity-100 visible translate-y-0 scale-100 rotate-0 animate-float' 
              : 'opacity-0 invisible translate-y-8 scale-75 rotate-45'
          }`}
          onClick={scrollToTop}
        >
          {/* Button Inner */}
          <div className="relative w-full h-full rounded-full flex justify-center items-center overflow-hidden z-20">
            {/* Button Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 opacity-100 transition-all duration-300"></div>
            
            {/* Highlight Overlay */}
            <div className="absolute top-0.5 left-0.5 right-0.5 bottom-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-tl-full rounded-tr-full pointer-events-none"></div>
            
            {/* Icon Container */}
            <div className="text-2xl text-white flex items-center justify-center z-30 transition-transform duration-300 group-hover:-translate-y-1">
              <ChevronUp size={28} />
            </div>
            
            {/* Ripple Effect */}
            <div 
              ref={rippleRef}
              className="absolute w-full h-full rounded-full bg-white/40 scale-75 opacity-0 z-10"
              style={{ animationFillMode: 'forwards' }}
            ></div>
            
            {/* Shooting Star Effect */}
            <div 
              ref={shootingStarRef}
              className="absolute w-5 h-5 rounded-full bg-white opacity-0 scale-0 top-full right-full"
              style={{ filter: 'blur(1px)', animationFillMode: 'forwards' }}
            ></div>
          </div>
          
          {/* Progress Ring */}
          <svg className="absolute top-0 left-0 w-full h-full -rotate-90" width="71" height="71">
            <circle 
              stroke="white" 
              strokeWidth="3" 
              fill="transparent" 
              r={radius} 
              cx="35.5" 
              cy="35.5" 
              strokeDasharray={circumference} 
              strokeDashoffset={dashOffset}
            />
          </svg>
        </div>
      </div>
    </>
  );
}