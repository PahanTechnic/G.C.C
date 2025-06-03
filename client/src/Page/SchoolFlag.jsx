import React, { useEffect } from 'react'
import SidebarBannerSlider from '../Components/Sidebar/SidebarBannerSlider'
import BackToTopButton from '../Components/BackToTopButton/BackToTopButton'
import Footer from '../Components/Footer/Footer'
import { assets } from '../utils';


// Mock AOS functionality since we can't import external libraries
const useAOS = () => {
    useEffect(() => {
        // Simulate AOS initialization
        const elements = document.querySelectorAll('[data-aos]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animation = element.getAttribute('data-aos');
                    const duration = element.getAttribute('data-aos-duration') || '800';

                    // Apply animation classes
                    element.style.transition = `all ${duration}ms ease-in-out`;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0) scale(1)';

                    // Remove from observer
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            // Initial state
            const animation = el.getAttribute('data-aos');
            el.style.opacity = '0';

            if (animation === 'fade-down') {
                el.style.transform = 'translateY(-50px)';
            } else if (animation === 'zoom-in') {
                el.style.transform = 'scale(0.8)';
            }

            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
};

const SchoolFlag = () => {

    useAOS();

    return (
        <div>
            <BackToTopButton />
            <SidebarBannerSlider />

            {/* school flag section start */}
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-16">
                <section className="w-full max-w-6xl text-center space-y-12">
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* Sinhala Title */}
                    <div className="relative " data-aos="fade-down">
                        <h4 className="text-3xl md:text-4xl lg:text-5xl py-5 font-sinhala font-bold bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 tracking-wide">
                            පාසල් කොඩිය
                        </h4>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                            A symbol of pride, unity, and the values that define our educational journey
                        </p>
                    </div>

                    {/* English Title
                    <div className="relative" data-aos="fade-up" data-aos-delay="200">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                            Our{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
                                    School
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transform scale-x-110"></div>
                            </span>{' '}
                            Flag
                        </h1>
                        
                    </div> */}

                    {/* Flag Container */}
                    <div className="relative" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
                        <div className="relative group">

                            {/* Background Glow Animation */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-300/10 via-emerald-300/10 to-green-300/10 blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 z-0"></div>

                            {/* Main flag box */}
                            <div className=" w-[80%] left-1/2 min-h-fit -translate-x-1/2 relative z-10 bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-green-200 group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-700 transform">
                                {/* Flag Image */}
                                <div className="overflow-hidden rounded-2xl h-[50%] shadow-lg aspect-[3/2] flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-green-200/20 to-emerald-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={assets.Flag}
                                        alt="School Flag"
                                        className="object-contain h-full w-full transform scale-110 transition-all duration-700 ease-in-out hover:shadow-2xl"
                                        style={{
                                            filter: 'drop-shadow(0 4px 6px rgba(0, 128, 0, 0.1))'
                                        }}
                                    />
                                </div>

                                {/* Flag Label (optional) */}
                                <div className="mt-4 text-center">
                                    <p className="text-green-700 font-semibold text-lg">
                                        Official School Flag
                                    </p>
                                </div>
                            </div>

                            {/* Decorative floating dots */}
                            <div className="absolute -top-3 -right-3 w-5 h-5 bg-emerald-400 rounded-full shadow-md animate-pulse"></div>
                            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-green-400 rounded-full shadow-md animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>


                    {/* Additional info section */}
                    <div className="relative pt-8" data-aos="fade-up" data-aos-delay="600">
                        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-600">
                            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span>Heritage</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                <span>Unity</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                                <span>Excellence</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* school flag section end */}

            <Footer />
        </div>
    )
}

export default SchoolFlag
