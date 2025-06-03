import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import components
import { assets } from '../utils'
import BackToTopButton from '../Components/BackToTopButton/BackToTopButton'
import SidebarBannerSlider from '../Components/Sidebar/SidebarBannerSlider'
import Footer from '../Components/Footer/Footer'

const LogoAndMotto = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            easing: 'ease-in-out',
        });
    }, []);

    // Logo SVG Animation Component
    const LogoAnimation = () => (
        <svg
            viewBox="0 0 200 200"
            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10 pointer-events-none z-0"
        >
            <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#15803d"
                strokeWidth="2"
                strokeDasharray="15,8"
                className="animate-spin-slow"
            />
            <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#16a34a"
                strokeWidth="1.5"
                strokeDasharray="10,10"
                className="animate-spin-reverse"
            />
            <circle
                cx="100"
                cy="100"
                r="40"
                fill="none"
                stroke="#22c55e"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="animate-pulse-slow"
            />
        </svg>
    );

    // Decorative leaf SVG component
    const LeafSVG = ({ className }) => (
        <svg
            viewBox="0 0 50 50"
            className={className}
        >
            <path
                d="M25,5 Q40,25 25,45 Q10,25 25,5"
                fill="#22c55e"
                stroke="#15803d"
                strokeWidth="1"
                className="leaf animate-sway"
            />
            <path
                d="M25,5 L25,45"
                fill="none"
                stroke="#15803d"
                strokeWidth="0.5"
                className="stem"
            />
        </svg>
    );

    return (
        <div>
            <BackToTopButton />
            <SidebarBannerSlider />

            {/* Logo and motto content start */}
            <section className="w-full min-h-screen bg-gradient-to-b from-green-50 to-white px-4 md:px-10 lg:px-20 pt-10 pb-20 text-center space-y-8 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <LogoAnimation />
                    <LeafSVG className="absolute top-10 left-6 w-12 h-12 opacity-30" />
                    <LeafSVG className="absolute top-20 right-10 w-8 h-8 opacity-30 rotate-45" />
                    <LeafSVG className="absolute bottom-40 left-16 w-10 h-10 opacity-30 rotate-90" />
                    <LeafSVG className="absolute bottom-60 right-12 w-14 h-14 opacity-30 -rotate-45" />
                </div>

                {/* Top Section - Title and Subtitle */}
                <div className="relative z-10" data-aos="fade-down">
                    <div className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mb-5 bg-green-100 px-4 py-2  rounded-full shadow-sm 
                                absolute left-1/2 transform -translate-x-1/2 -top-10" >
                        <i class="bi bi-award text-green-600"></i>
                        <span>Our School Song</span>
                    </div>
                    <h4
                        className="text-2xl font-bold text-green-700 mb-2 font-sinhala"
                        data-aos="fade-down"
                    >
                        ලාංඡනය හා ආදර්ශ පදය
                    </h4>

                    {/* <h1
                        className="text-4xl font-extrabold mb-2"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        Logo <span className="text-green-600">And</span> Motto
                    </h1> */}

                    <div className="flex justify-center mt-2">
                        <div
                            className="h-1 w-24 bg-green-500 rounded-full"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        ></div>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="py-8 relative z-10">
                    <div className="mb-6">
                        <h4
                            className="text-xl font-semibold text-green-700 mb-1"
                            data-aos="fade-up"
                        >
                            ලාංඡනය
                        </h4>

                        <h1
                            className="text-3xl font-bold mb-8 "
                        >
                            Our Logo
                        </h1>
                    </div>

                    <div
                        className="flex justify-center items-center"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div className="relative w-56 h-56 bg-white rounded-full shadow-lg p-2 flex items-center justify-center transition-transform hover:scale-105 duration-300">
                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-pulse"></div>

                            {/* Logo */}
                            <img
                                src={assets.logo}
                                alt="පාසල් ලාංඡනය"
                                className="w-48 h-auto object-contain relative z-10 rounded-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Motto Section */}
                <div className="pt-10 relative z-10">
                    <div className="mb-6">
                        <h4
                            className="text-xl font-semibold text-green-700 mb-1"
                            data-aos="fade-up"
                        >
                            ආදර්ශ පදය
                        </h4>

                        <h1
                            className="text-3xl font-bold mb-8"
                        >
                            Our Motto
                        </h1>
                    </div>

                    <div
                        className="max-w-2xl mx-auto flex flex-col items-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-600 mb-4">
                            <path
                                fill="currentColor"
                                d="M6.5,10 C7.3,10 8,9.3 8,8.5 C8,7.7 7.3,7 6.5,7 C5.7,7 5,7.7 5,8.5 C5,9.3 5.7,10 6.5,10 M9,6 C9,4.3 7.7,3 6,3 C4.3,3 3,4.3 3,6 C3,7.7 4.3,9 6,9 C7.7,9 9,7.7 9,6 M13,6 C13,7.7 14.3,9 16,9 C17.7,9 19,7.7 19,6 C19,4.3 17.7,3 16,3 C14.3,3 13,4.3 13,6 M18,8.5 C18,9.3 17.3,10 16.5,10 C15.7,10 15,9.3 15,8.5 C15,7.7 15.7,7 16.5,7 C17.3,7 18,7.7 18,8.5 M21,10.5 C21,9.7 20.3,9 19.5,9 C18.7,9 18,9.7 18,10.5 C18,11.3 18.7,12 19.5,12 C20.3,12 21,11.3 21,10.5 M3,10.5 C3,11.3 3.7,12 4.5,12 C5.3,12 6,11.3 6,10.5 C6,9.7 5.3,9 4.5,9 C3.7,9 3,9.7 3,10.5 M7.5,14 C7.5,11.5 5.5,9.5 3,9.5 C3,12 5,14 7.5,14 M10.5,14 C10.5,11.5 12.5,9.5 15,9.5 C15,12 13,14 10.5,14 M13.5,14 C13.5,11.5 15.5,9.5 18,9.5 C18,12 16,14 13.5,14 M10.5,16 L10.5,21.5 C14,21.5 14,16 10.5,16"
                            />
                        </svg>

                        <p className="text-2xl font-bold text-green-800 px-4 py-6 border-t-2 border-b-2 border-green-200 hover:border-green-400 transition-colors duration-300">
                            "ඉගෙනීම ජීවිතයට ආලෝකයයි!"
                        </p>

                        <p className="mt-4 text-green-600 italic text-lg">
                            "Learning is the light of life!"
                        </p>
                    </div>
                </div>

                {/* Animated wave divider */}
                <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        <path
                            d="M0,0 C150,20 350,0 500,20 C650,40 800,20 1000,40 L1200,0 L1200,120 L0,120 Z"
                            className="fill-green-50"
                        ></path>
                        <path
                            d="M0,20 C150,40 350,20 500,40 C650,60 800,40 1000,60 L1200,20 L1200,120 L0,120 Z"
                            className="fill-green-100 opacity-70"
                        ></path>
                    </svg>
                </div>

                {/* Add CSS animations */}
                <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: center bottom;
        }
      `}</style>
            </section>
            {/* Logo and motto content  enad */}
            <Footer />
        </div>
    )
}

export default LogoAndMotto
