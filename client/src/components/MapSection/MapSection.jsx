import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MapSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="map-section py-20 bg-gradient-to-b from-green-50 to-green-100 relative overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Text Content */}
        <div data-aos="fade-right" className="space-y-6">
          <div className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mb-2 bg-green-100 px-4 py-2 rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Our Location</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 leading-tight sinhala">
            ඔබ අපව <span className="text-green-600">සොයාගන්න</span> හැකි තැන
          </h2>

          <div className="space-y-4 sinhala">
            <p className="text-gray-700 text-lg leading-relaxed">
              ගලිගමුව මධ්‍ය විද්‍යාලය පිහිටා ඇත්තේ පහසු ප්‍රවේශයක් සහිත, මනරම් පරිසරයකි. ඔබට අපව නිරන්තරයෙන් සම්බන්ධ විය හැක.
            </p>

            <div className="flex items-center gap-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>ගලිගමුව මධ්‍ය විද්‍යාලය, ගලිගමුව</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>
                (+94) 352284392
                </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 sinhala">
            <a
              href="https://maps.app.goo.gl/3UKNv4MTqVL32Z3Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              See the Google Map
            </a>

            <a
              href="tel:+94352284392"
              className="flex items-center gap-2 bg-white hover:bg-gray-100 text-green-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-green-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>

        {/* Right Map Embed */}
        <div
          className="rounded-3xl overflow-hidden sinhala shadow-xl border-4 border-white hover:border-green-200 transition-all duration-500 hover:shadow-2xl"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.1460295435625!2d80.30667248252098!3d7.234646824168809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae310c454ceaff7%3A0x9cb7c17151d2da91!2sGaligamuwa%20Central%20College!5e1!3m2!1sen!2slk!4v1747069422971!5m2!1sen!2slk"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[400px] md:h-[500px] border-0"
          ></iframe>
          <div className="bg-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">ගලිගමුව මධ්‍ය විද්‍යාලය</span>
            </div>
            <a
              href="https://maps.app.goo.gl/3UKNv4MTqVL32Z3Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 hover:text-green-800 font-medium flex items-center gap-1"
            >
              Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;