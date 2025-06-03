import React, { useEffect, useState } from 'react'
import { Home, Trophy, Users, Award, Star } from 'lucide-react'


// components import
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import SidebarBannerSlider from '../components/Sidebar/SidebarBannerSlider'
import Footer from '../components/Footer/Footer'
import { houses } from '../utils'

const HouseSystem = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [activeHouse, setActiveHouse] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <BackToTopButton />
            <SidebarBannerSlider />

            {/* House System start */}

            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden flex items-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-pulse delay-700" />
                <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-400 rounded-full opacity-10 animate-pulse delay-1000" />

                <section className={`relative w-full max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>

                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <div className={`inline-flex items-center gap-3 text-green-700 text-lg font-semibold mb-6 bg-green-100 px-6 py-3 rounded-full shadow-lg transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-95'
                            }`}>
                            <Home className="w-6 h-6 text-green-600" />
                            පාසලේ නිල නිවාස
                        </div>

                        <h1 className={`text-5xl md:text-7xl font-bold text-gray-800 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            School <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">House</span> System
                        </h1>

                        <div className={`w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full transition-all duration-700 delay-300 ${isVisible ? 'scale-100' : 'scale-0'
                            }`} />
                    </div>

                    {/* Houses Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {houses.map((house, index) => {
                            const IconComponent = house.icon;
                            return (
                                <div
                                    key={house.id}
                                    className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{ transitionDelay: `${400 + index * 200}ms` }}
                                    onMouseEnter={() => setActiveHouse(house.id)}
                                    onMouseLeave={() => setActiveHouse(null)}
                                >
                                    <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 ${house.borderColor} ${house.hoverColor} overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl ${activeHouse === house.id ? 'ring-4 ring-green-300' : ''
                                        }`}>

                                        {/* Badge */}
                                        <div className={`absolute top-4 left-4 z-20 bg-gradient-to-r ${house.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                            {house.badge}
                                        </div>

                                        {/* Header Background */}
                                        <div className={`h-24 bg-gradient-to-r ${house.color} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/10" />
                                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
                                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                                        </div>

                                        <div className="p-8 pt-4">
                                            {/* House Icon and Title */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{house.name}</h3>
                                                    <p className="text-gray-600 text-sm">{house.englishName}</p>
                                                </div>
                                                <div className={`p-3 ${house.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent className={`w-8 h-8 ${house.textColor}`} />
                                                </div>
                                            </div>

                                            {/* House Image */}
                                            <div className="relative  mb-6 group/image">
                                                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl opacity-20 group-hover/image:opacity-30 transition-opacity duration-300" />
                                                <div className="relative bg-gray-100 rounded-2xl p-6 min-h-[150px] flex items-center justify-center shadow-inner">
                                                    <div className="text-center text-gray-500">
                                                        <img src={house.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                                {house.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="flex flex-wrap gap-2">
                                                {house.stats.map((stat, statIndex) => (
                                                    <span
                                                        key={statIndex}
                                                        className={`text-xs px-3 py-1 ${house.bgColor} ${house.textColor} rounded-full font-medium`}
                                                    >
                                                        {stat}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Section */}
                    <div className={`text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <Users className="w-8 h-8" />
                                    <h3 className="text-2xl md:text-3xl font-bold">
                                        House System Excellence
                                    </h3>
                                    <Award className="w-8 h-8" />
                                </div>
                                <p className="text-lg opacity-90 max-w-3xl mx-auto">
                                    නිවාස ක්‍රමය අපගේ පාසලේ සිසුන්ගේ එකමුතුව, තරඟකාරී ප්‍රවණතා සහ නායකත්ව ගුණාංග වර්ධනය කරයි
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mt-6">
                                    {['Leadership', 'Unity', 'Competition', 'Excellence'].map((quality, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                                            <Star className="w-4 h-4" />
                                            <span className="text-sm font-medium">{quality}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
                        </div>
                    </div>
                </section>
            </div>

            {/* House System end */}

            <Footer />
        </div>
    )
}

export default HouseSystem
