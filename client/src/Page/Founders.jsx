import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


// import Component 
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import SidebarBannerSlider from '../components/Sidebar/SidebarBannerSlider'
import Footer from '../components/Footer/Footer'
import { founders } from '../utils'


const Founders = () => {

    useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <BackToTopButton />
      <SidebarBannerSlider />

      {/* Founders information goes here */}

       <section className="bg-gradient-to-b from-white to-green-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800">
            The <span className="text-green-600 italic">Founders</span> Of Our School
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-xl text-gray-700 font-medium italic">
              ගලිගමු මහා විද්‍යාලය හා මධ්‍ය මහා විද්‍යාලය ආරම්භ කළ නිර්මාතෘවරුන්
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {founders.map((founder, index) => (
              <div 
                key={founder.id}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                <div className="group">
                  <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
                    {/* Decorative circle behind image */}
                    <div className="absolute inset-0 bg-green-700 opacity-10 rounded-full scale-90 group-hover:scale-100 transition-all duration-300"></div>
                    
                    {/* Founder image */}
                    <div className="relative bg-white p-3 rounded-2xl">
                      <div className="aspect-[4/5] overflow-hidden rounded-xl">
                        <img 
                          src={founder.image} 
                          alt={founder.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-green-500 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-700 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
                  </div>
                  
                  <div 
                    className="text-center px-4"
                    data-aos="fade-up"
                    data-aos-delay={400 + (index * 100)}
                  >
                    <div className="mb-1 inline-block py-1 px-4 bg-green-100 text-green-800 rounded-full font-medium text-sm">
                      Founder
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mt-2">{founder.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className="mt-16 bg-white rounded-xl p-8 shadow-md border-l-4 border-green-600"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Our Distinguished Founders
            </h3>
            
            <ul className="space-y-4">
              {founders.map((founder, index) => (
                <li 
                  key={founder.id}
                  className="flex items-start"
                  data-aos="fade-right"
                  data-aos-delay={800 + (index * 100)}
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-600"></div>
                  </div>
                  <span className="ml-3 text-lg text-gray-700">{founder.name}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                Learn More About Our Founders
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* end Founders information */}
      <Footer />


    </div>
  )
}

export default Founders
