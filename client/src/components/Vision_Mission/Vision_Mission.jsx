import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt'; // 👈 for tilt effect

// 🔁 FlipCard Component
const FlipCard = ({ icon, title, backTitle, description, buttonColor }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 1400,
        glare: true,
        "max-glare": 0.2,
        perspective: 1000,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-80 h-80 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      data-aos="fade-up"
      data-tilt
      data-tilt-glare
      data-tilt-max-glare="0.2"
    >
      <div
        className={`relative w-full h-full duration-700 transition-transform transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 backface-hidden flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <div className="flex flex-col items-center gap-3">
            <div className="text-6xl text-green-600 animate-bounce">{icon}</div>
            <h3 className="text-2xl font-bold text-green-800">{title}</h3>
            <div className="mt-4 text-sm text-gray-500 italic animate-pulse">Click to flip ↻</div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/30 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">{backTitle}</h3>
          <p className="text-sm text-gray-700 text-center">{description}</p>
          <button
            className={`mt-4 px-4 py-2 ${buttonColor} text-white rounded-full hover:brightness-110 transition`}
          >
            තව දැනගන්න
          </button>
        </div>
      </div>
    </div>
  );
};

// 🔁 VisionMission Component
const VisionMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="Vision_Mission py-20 sinhala relative  bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="inline-block text-green-700 text-lg font-semibold mb-3 bg-green-100 px-4 py-1 rounded-full">
          👁️ Vision Mission
        </p>
        <h1 className="text-4xl font-extrabold mb-4 text-green-700">
          අපගේ දැක්ම සහ මෙහෙවර
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          අපි අනාගතය වෙනස් කිරීමට කැපවී සිටින්නෙමු
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          <FlipCard
            icon="👁️"
            title="අපගේ දැක්ම"
            backTitle="අපගේ දැක්ම"
            description="නවෝත්පාදනය, තාක්ෂණය සහ තිරසාරත්වය හරහා ලෝකය වඩා හොඳ තැනක් බවට පත් කිරීම."
            buttonColor="bg-green-500 hover:bg-green-600"
          />
          <FlipCard
            icon="🎯"
            title="මෙහෙවර"
            backTitle="අපගේ මෙහෙවර"
            description="සෑම පුද්ගලයෙකුටම, ව්‍යාපාරයකටම සහ ප්‍රජාවකටම සාර්ථකත්වය සඳහා අවශ්‍ය තාක්ෂණය හා සහය ලබාදීම."
            buttonColor="bg-lime-500 hover:bg-lime-600"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
