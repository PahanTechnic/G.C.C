import { useState, useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components

import { assets, schoolData } from '../utils'
import BackToTopButton from "../Components/BackToTopButton/BackToTopButton";
import SidebarBannerSlider from "../Components/Sidebar/SidebarBannerSlider";
import Footer from "../Components/Footer/Footer";

const SchoolProfile = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [animatedStats, setAnimatedStats] = useState({
    students: 2300,
    teachers: 90,
    age: 120
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const studentsInterval = setInterval(() => {
            setAnimatedStats(prev => {
              const newStudents = prev.students + Math.ceil((1154 - prev.students) / 10);
              const newTeachers = prev.teachers + Math.ceil((95 - prev.teachers) / 10);
              const newAge = prev.age + Math.ceil((58 - prev.age) / 10);

              if (newStudents >= 1154 && newTeachers >= 95 && newAge >= 58) {
                clearInterval(studentsInterval);
                return { students: 1154, teachers: 95, age: 58 };
              }

              return {
                students: newStudents > 1154 ? 1154 : newStudents,
                teachers: newTeachers > 95 ? 95 : newTeachers,
                age: newAge > 58 ? 58 : newAge
              };
            });
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <BackToTopButton />
      <SidebarBannerSlider/>

      {/* School Profile Content Start */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Hero section with parallax effect */}
          <div className="relative h-64 md:h-80 rounded-t-xl overflow-hidden shadow-xl" data-aos="fade-down">
            <div
              className="absolute inset-0 bg-cover bg-center bg-[url('/images/school-bg.jpg')]"
              style={{ backgroundImage: "linear-gradient(to right, rgba(16, 185, 129, 0.9), rgba(16, 185, 129, 0.6))" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <div className="mb-4">
                <div className="inline-block rounded-full p-3 bg-white/90 shadow-xl transform transition-transform hover:scale-105 duration-300">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-b from-green-200 to-green-600 shadow-inner flex items-center justify-center">
                    <img
                      src={assets.logo}
                      alt="LOGO"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                පාසල්{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 px-3 py-1">
                  තොරතුරු
                </span>
              </h1>

              <p className="text-white text-lg md:text-xl max-w-xl drop-shadow-md">
                ශ්‍රී ලංකාවේ විශිෂ්ඨ අධ්‍යාපන ආයතනය
              </p>
            </div>
          </div>

          <div className="bg-white rounded-b-xl shadow-xl">
            {/* Navigation tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => handleTabChange('details')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex-1 ${activeTab === 'details'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <span className="block sm:inline">පාසල් තොරතුරු</span>
                </button>
                <button
                  onClick={() => handleTabChange('stats')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex-1 ${activeTab === 'stats'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <span className="block sm:inline">සංඛ්‍යා ලේඛන</span>
                </button>
                <button
                  onClick={() => handleTabChange('colors')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex-1 ${activeTab === 'colors'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <span className="block sm:inline">පාසල් වර්ණ</span>
                </button>
              </nav>
            </div>

            <div className="p-6">
              {/* School details tab content */}
              {activeTab === 'details' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-up">පාසල් විස්තර</h2>
                    <div className="mt-2 h-1 w-20 bg-green-500 mx-auto rounded"></div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm" data-aos="fade-up">
                    <p className="text-gray-700 italic text-center">
                      "ශිෂ්‍යයින් සඳහා සුහුරු අනාගතයක් සැකසීමට කැපවූ පාසලක්"
                    </p>
                  </div>

                  {/* School information grid */}
                  <div className="overflow-hidden shadow-lg rounded-xl border border-gray-200" data-aos="fade-up">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gradient-to-r from-green-600 to-green-500">
                        <tr>
                          <th scope="col" className="py-4 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">විස්තරය</th>
                          <th scope="col" className="px-3 py-4 text-left text-sm font-semibold text-white">තොරතුරු</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {schoolData.map((item, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'bg-white hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 30)}
                          >
                            <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.title}</td>
                            <td className="px-3 py-4 text-sm text-gray-800">{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Statistics tab content */}
              {activeTab === 'stats' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-up">සංඛ්‍යා ලේඛන</h2>
                    <div className="mt-2 h-1 w-20 bg-green-500 mx-auto rounded"></div>
                  </div>

                  {/* School stats cards */}
                  <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div
                      className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md border border-green-200 transform transition-transform hover:scale-105 duration-300"
                      data-aos="flip-left"
                      data-aos-delay="100"
                    >
                      <div className="text-center">
                        <div className="flex justify-center">
                          <div className="p-3 bg-green-500/20 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-green-600 text-xl font-bold mt-2">ශිෂ්‍ය ගණන</div>
                        <div className="text-5xl font-bold text-gray-800 mt-2">{animatedStats.students}</div>
                        <div className="text-sm text-gray-500 mt-2">2019 ජූනි මාසයට</div>
                      </div>
                    </div>

                    <div
                      className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md border border-green-200 transform transition-transform hover:scale-105 duration-300"
                      data-aos="flip-left"
                      data-aos-delay="200"
                    >
                      <div className="text-center">
                        <div className="flex justify-center">
                          <div className="p-3 bg-green-500/20 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-green-600 text-xl font-bold mt-2">ගුරුවරුන්</div>
                        <div className="text-5xl font-bold text-gray-800 mt-2">{animatedStats.teachers}</div>
                        <div className="text-sm text-gray-500 mt-2">2019 ජූනි මාසය වන විට</div>
                      </div>
                    </div>

                    <div
                      className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md border border-green-200 transform transition-transform hover:scale-105 duration-300"
                      data-aos="flip-left"
                      data-aos-delay="300"
                    >
                      <div className="text-center">
                        <div className="flex justify-center">
                          <div className="p-3 bg-green-500/20 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-green-600 text-xl font-bold mt-2">වයස</div>
                        <div className="text-5xl font-bold text-gray-800 mt-2">{animatedStats.age}</div>
                        <div className="text-sm text-gray-500 mt-2">අවුරුදු (1967 සිට)</div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Statistics */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mt-8" data-aos="fade-up">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">අතිරේක සංඛ්‍යා ලේඛන</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-green-600 font-semibold">පන්ති කාමර</h4>
                        <p className="text-2xl font-bold mt-1">42</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-green-600 font-semibold">රසායනාගාර</h4>
                        <p className="text-2xl font-bold mt-1">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Colors tab content */}
              {activeTab === 'colors' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-up">පාසල් වර්ණ</h2>
                    <div className="mt-2 h-1 w-20 bg-green-500 mx-auto rounded"></div>
                  </div>

                  {/* School colors */}
                  <div
                    className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200"
                    data-aos="fade-up"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 rounded-full bg-green-600 shadow-lg transform transition-transform hover:scale-110 duration-300"></div>
                        <span className="text-lg font-medium text-gray-700">කොළ</span>
                        <p className="text-gray-500 text-sm text-center max-w-xs">නිරන්තර වර්ධනය හා සශ්‍රීකතාව නියෝජනය කරයි</p>
                      </div>
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-300 shadow-lg transform transition-transform hover:scale-110 duration-300"></div>
                        <span className="text-lg font-medium text-gray-700">සුදු</span>
                        <p className="text-gray-500 text-sm text-center max-w-xs">නිර්මලතාව හා අවංකභාවය නියෝජනය කරයි</p>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-green-50 rounded-lg">
                      <p className="text-gray-700 text-center">
                        පාසලේ වර්ණ එහි ඉතිහාසය හා සාරධර්ම පිළිබිඹු කරයි. කොළ වර්ණය දැනුම හා වර්ධනය නියෝජනය කරන අතර, සුදු වර්ණය පිරිසිදුකම හා උපරිම පුද්ගල වර්ධනය නියෝජනය කරයි.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* School Profile Content End */}

      <Footer />
    </div>
  )
}

export default SchoolProfile
