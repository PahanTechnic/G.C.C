import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import SidebarBannerSlider from '../components/Sidebar/SidebarBannerSlider';
import Footer from '../components/Footer/Footer';
import { principals } from '../utils';

const FormerPrincipals = () => {
  const [visiblePrincipals, setVisiblePrincipals] = useState(6); // Number of initially visible principals
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('');
  
  // Filter principals based on search term and period
  const filteredPrincipals = principals.filter(principal => {
    const matchesSearch = principal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          principal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPeriod = filterPeriod ? principal.period.includes(filterPeriod) : true;
    return matchesSearch && matchesPeriod;
  });

  const loadMore = () => {
    setVisiblePrincipals(prev => Math.min(prev + 6, filteredPrincipals.length));
  };

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <BackToTopButton />
      <SidebarBannerSlider />

      {/* Former Principals Hero Section */}
      <section className="bg-gradient-to-b from-green-100 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div 
              data-aos="fade-up"
              data-aos-duration="800"
              className="mb-12"
            >
              <h4 className="text-lg font-medium text-green-600 mb-2">ආදි විදුහල්පතිවරු</h4>
              <h1 className="text-4xl md:text-5xl font-bold text-green-800">Former <span className="text-green-600 italic">Principals</span></h1>
              <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Honoring the visionary leaders who have shaped our institution's legacy and guided generations of students toward excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/2" data-aos="fade-right">
                <input
                  type="text"
                  placeholder="Search principals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              
              {/* Period Filter */}
              <div className="w-full md:w-1/3" data-aos="fade-left">
                <select
                  value={filterPeriod}
                  onChange={(e) => setFilterPeriod(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">All time periods</option>
                  <option value="1950">1950s</option>
                  <option value="1960">1960s</option>
                  <option value="1970">1970s</option>
                  <option value="1980">1980s</option>
                  <option value="1990">1990s</option>
                  <option value="2000">2000s</option>
                  <option value="2010">2010s</option>
                  <option value="2020">2020s</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principals Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPrincipals.length > 0 ? (
              <div className="relative mt-8 pb-20">
                {/* Timeline central line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-green-200 rounded"></div>

                {/* Principals timeline */}
                <div className="relative">
                  {filteredPrincipals.slice(0, visiblePrincipals).map((principal, index) => (
                    <div 
                      key={principal.id} 
                      className={`mb-16 last:mb-0 ${index % 2 === 0 ? 'pr-12 md:pr-0' : 'pl-12 md:pl-0'}`}
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                      data-aos-delay={200 + (index % 4) * 100}
                      data-aos-duration="800"
                    >
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow z-10"></div>
                        </div>

                        {/* Timeline content */}
                        <div className={`rounded-lg shadow-lg bg-white border-t-4 border-green-500 overflow-hidden w-full 
                          ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                          <div className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                              {/* Avatar or Image */}
                              {principal.image ? (
                                <img 
                                  src={principal.image} 
                                  alt={principal.name}
                                  className="w-24 h-24 rounded-full object-cover border-4 border-green-100"
                                />
                              ) : (
                                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                  </svg>
                                </div>
                              )}
                              
                              <div>
                                <h3 className="text-2xl font-bold text-gray-800">{principal.name}</h3>
                                <span className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full mt-2">
                                  {principal.period}
                                </span>
                                {principal.qualifications && (
                                  <p className="text-gray-500 text-sm mt-1">{principal.qualifications}</p>
                                )}
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <p className="text-gray-600 leading-relaxed">{principal.description}</p>
                              
                              {principal.achievements && (
                                <div className="mt-4">
                                  <h4 className="font-medium text-green-700 mb-2">Notable Achievements:</h4>
                                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {principal.achievements.map((achievement, idx) => (
                                      <li key={idx}>{achievement}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-medium text-gray-500">No principals found matching your search criteria</h3>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilterPeriod('');
                  }}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {visiblePrincipals < filteredPrincipals.length && (
              <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
                <button 
                  onClick={loadMore}
                  className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Load More Principals
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-4xl font-bold mb-2">{principals.length}</h2>
                <p className="text-green-200">Total Principals</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-bold mb-2">75+</h2>
                <p className="text-green-200">Years of Excellence</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-4xl font-bold mb-2">1000+</h2>
                <p className="text-green-200">Accolades & Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormerPrincipals;