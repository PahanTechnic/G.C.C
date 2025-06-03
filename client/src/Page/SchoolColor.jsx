import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Palette, School, Sparkles, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// add components
import BackToTopButton from '../Components/BackToTopButton/BackToTopButton'
import SidebarBannerSlider from '../Components/Sidebar/SidebarBannerSlider'
import Footer from '../Components/Footer/Footer'
import { colorData } from '../utils';

const SchoolColor = () => {

    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [activeColor, setActiveColor] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>

            <BackToTopButton />
            <SidebarBannerSlider />

            {/* School color section start  */}

            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                <section className={`relative max-w-6xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className={`inline-flex items-center gap-2 text-green-700 text-lg font-semibold mb-6 bg-green-100 px-6 py-3 rounded-full shadow-lg transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-95'
                            }`}>
                            <Palette className="w-5 h-5 text-green-600" />
                            Official School Color
                        </div>

                        <h1 className={`text-4xl md:text-6xl font-bold text-green-700 mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            පාසලේ නිල වර්ණ
                        </h1>

                        <div className={`w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full transition-all duration-700 delay-300 ${isVisible ? 'scale-100' : 'scale-0'
                            }`} />
                    </div>

                    {/* Description */}
                    <div className={`text-center mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                        <p className="text-gray-700 text-xl leading-relaxed max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100">
                            අප පාසලේ නිල වර්ණය ලෙස හඳුන්වා ඇති වර්ණය{' '}
                            <span className="font-bold text-green-700 bg-green-100 px-2 py-1 rounded">කොළ</span> සහ{' '}
                            <span className="font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">සුදු</span> වර්ණයයි.
                            පාසලේ නිල ඇඳුමත්, පාසලේ කොඩියත් හා පාසලේ ක්‍රීඩා නිවන්දි ආදී සියලු අංගවලටම ආදානයක් වශයෙන් මෙම වර්ණ හඳුන්වා ඇත.
                        </p>
                    </div>

                    {/* Color Display Cards */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        {colorData.map((color, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl cursor-pointer ${activeColor === index ? 'ring-4 ring-green-400' : ''
                                    }`}
                                onMouseEnter={() => setActiveColor(index)}
                                onMouseLeave={() => setActiveColor(null)}
                            >
                                <div className={`${color.bg} ${color.hoverBg} ${color.textColor} p-12 text-center relative transition-all duration-300`}>
                                    {/* Background Sparkles */}
                                    <div className="absolute inset-0 opacity-20">
                                        <Sparkles className="absolute top-4 right-4 w-6 h-6 animate-pulse" />
                                        <Sparkles className="absolute bottom-6 left-6 w-4 h-4 animate-pulse delay-300" />
                                        <Sparkles className="absolute top-1/2 left-1/2 w-5 h-5 animate-pulse delay-700" />
                                    </div>

                                    {/* Main Content */}
                                    <div className="relative z-10">
                                        <div className="text-4xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                                            {color.name}
                                        </div>
                                        <div className="text-lg opacity-80 mb-4">
                                            {color.english}
                                        </div>
                                        <div className="text-sm opacity-70 mb-4">
                                            {color.description}
                                        </div>
                                        <div className="text-xs opacity-60 italic">
                                            {color.symbolism}
                                        </div>
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Cards */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        {[
                            {
                                icon: School,
                                title: 'School Uniform',
                                description: 'පාසලේ නිල ඇඳුම්',
                                color: 'text-green-600',
                                path: '/school-uniform'
                            },
                            {
                                icon: Award,
                                title: 'School Flag',
                                description: 'පාසලේ කොඩිය',
                                color: 'text-green-600',
                                path: '/school-flag'
                            },
                            {
                                icon: Sparkles,
                                title: 'School logo and motto',
                                description: 'පාසල් ලාංඡනය සහ මුවාපිටාව',
                                color: 'text-green-600',
                                path: '/logo-and-motto'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl hover:bg-white/90 transition-all duration-300 group"
                                onClick={() => navigate(item.path)}
                            >
                                <item.icon className={`w-8 h-8 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-pulse delay-500" />
                    <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-400 rounded-full opacity-10 animate-pulse delay-1000" />
                </section>
            </div>

            {/* School color section end  */}

            <Footer />
        </div>
    )
}

export default SchoolColor
