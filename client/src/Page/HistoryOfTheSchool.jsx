import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import components
import BackToTopButton from '../components/BackToTopButton/BackToTopButton.jsx'
import Footer from '../components/Footer/Footer'
import SidebarBannerSlider from '../components/Sidebar/SidebarBannerSlider.jsx'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.jsx'
import { assets } from '../utils.js';

const HistoryOfTheSchool = () => {

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000
    });
  }, []);
  // AOS.init({
  return (
    <div>
      <BackToTopButton />
      <SidebarBannerSlider />
      <Breadcrumbs />

      {/* History of the School content goes here */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className="max-w-6xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-center">
              History <span className="text-green-600 italic">Of The</span> School
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div
                className="lg:col-span-5 relative"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="bg-white p-2 rounded-lg shadow-xl rotate-2 transform transition-transform hover:rotate-0 duration-300">
                  <img
                    src={assets.History}
                    alt="School History Image"
                    className="w-full h-auto rounded object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-500 rounded-full opacity-20 hidden md:block"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-700 rounded-full opacity-20 hidden md:block"></div>
              </div>

              <div
                className="lg:col-span-7"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-green-600">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    සබරගමු පළාතේ කෑගල්ල දිස්ත්‍රික්කයේ බෙලිගල් කෝරලේ කඳු පිට පත්තුවේ in නැගෙනහිර කොටසේ බිසෝවෙල දඬුවම් සහ
                    යටහලෙන රජමහා විහාර පුද බිම් වලින් වටවූ ගලිගමුව නගරයේ ගලිගමුව ග්‍රාමය අර්ධ නාගරික විදුහලක් ලෙස 1967 වසරේ
                    ජූලි මස 7 වන දින සිසුන් අසූ හයක් හා ගුරුභවතුන් හය දෙනෙකුගෙන් මෙම පාසල ආරම්භ වී ඇති අතර මුල ගුරු තනතුර
                    එමෙන් දයාකරුණාව මහත්මයා විසින් දරා ඇතැයි යන නාමය නිර්මාණය ඉදිරිපත් ජන කතා රාශියකි.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    ඒ අතර ශ්‍රී ලංකාව ආර් ඉංග්‍රීසි පාලනය නතු වීමෙන් අනතුර මෙතෙක් පවත්වාගෙන ආ කෘෂි රටාව වෙනස් කර ආර්ථික බෝග වගාවන්ට ප්‍රමුඛත්වය
                    දීම වගාව බිහිවිය එම වතුර නිෂ්පාදනය ප්‍රවාහනය සඳහා ක්‍රමවත් මාර්ග පද්ධතියක් ඇති කිරීම අවශ්‍යතා මතුවිය.
                  </p>

                  <div className="mt-6">
                    <div
                      className="flex items-center space-x-2 text-green-800 font-semibold"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <div className="w-12 h-1 bg-green-600 rounded"></div>
                      <span>Est. 1967</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-16 bg-green-50 rounded-xl p-6 md:p-8 shadow-md"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-4">Key Milestones</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="bg-white p-4 rounded-lg shadow border-t-4 border-green-500 transform transition-transform hover:-translate-y-1 duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <div className="font-bold text-green-700 text-xl mb-2">1967</div>
                  <p className="text-gray-600">School established with 86 students and 6 teachers</p>
                </div>

                <div
                  className="bg-white p-4 rounded-lg shadow border-t-4 border-green-600 transform transition-transform hover:-translate-y-1 duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <div className="font-bold text-green-700 text-xl mb-2">1987</div>
                  <p className="text-gray-600">Transformed into a Central College</p>
                </div>

                <div
                  className="bg-white p-4 rounded-lg shadow border-t-4 border-green-700 transform transition-transform hover:-translate-y-1 duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  <div className="font-bold text-green-700 text-xl mb-2">2014</div>
                  <p className="text-gray-600">Advanced Technology stream introduced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      <Footer />
    </div>
  )
}

export default HistoryOfTheSchool
