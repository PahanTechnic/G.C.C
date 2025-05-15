import React, { useEffect } from 'react'
import { assets } from '../../utils'
import AOS from 'aos';
import './About.css';

const About = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
      });
    }, []);

  return (
      <section id="about" className="w-full bg-gradient-to-b from-green-50 to-white mt-0 pb-20 overflow-hidden flex justify-center items-center px-4">
      <div className="max-w-[1290px] w-full flex flex-wrap items-center justify-around">
        <img
          src={assets.about}
          alt="about"
          className="w-[580px] max-w-full h-auto p-5"
          data-aos="fade-right"
        />
        <div className="max-w-xl w-full px-4 mt-10 md:mt-0" data-aos="fade-left">
          <p className="inline-block text-green-700 text-lg font-semibold mb-3 bg-green-100 px-4 py-1 rounded-full" >Welcome</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5" data-aos="fade-up">
            Welcome To Our <span className="text-green-500">School!</span>
          </h1>
          <p className="text-[18px] text-gray-800 font-normal mb-9 sinhala " data-aos="fade-up">
            සබරගමුව පළාතේ මනරම් කදුකරයේ සොභාව සෞන්දර්යයෙන් අනූන සුන්දර පරිසරයක පිහිටි අප පාසල නැණ ගුණ සපිරි
            පුරවැසියන් සිය දහස් ගණනක් රට දැයට තිළිණ කළ කීර්තිමත් විදුහල් මාතාවකි. . 13න් වසරක අඛණ්ඩ අධ්‍යාපන
            ව්‍යාපෘතිය යටතේ ආරම්භ කළ වෘත්තිය අධ්‍යාපන අංශයක් ද අප පාසල තුල ක්‍රියාත්මක වේ. මෙම අංශය කලාපයේ
            ප්‍රථමයෙන් ආරම්භ කල පාසල් කිහිපය අතර අප පාසලද ඇතුලත් වේ.
          </p>
          <div className="btn2">
            <button className="bg-white text-black font-bold text-[16px] border-2 border-black rounded-xl px-8 py-4 shadow-lg hover:bg-green-600 hover:text-white transition duration-500" data-aos="fade-down">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default About
