import React, { useEffect, useState } from 'react'
import { Shirt, BookOpen, Award, CheckCircle } from 'lucide-react'


import BackToTopButton from '../Components/BackToTopButton/BackToTopButton'
import SidebarBannerSlider from '../Components/Sidebar/SidebarBannerSlider'
import Footer from '../Components/Footer/Footer'
import { uniformData } from '../utils'

const SchoolUniform = () => {


    const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);



    return (
        <div>
            <BackToTopButton />
            <SidebarBannerSlider />

            {/* school uniform section start */}

            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                <section className={`relative max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>

                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <div className={`inline-flex items-center gap-3 text-green-700 text-lg font-semibold mb-6 bg-green-100 px-6 py-3 rounded-full shadow-lg transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-95'
                            }`}>
                            <Shirt className="w-6 h-6 text-green-600" />
                            පාසලේ නිල ඇඳුම
                        </div>

                        <h1 className={`text-5xl md:text-7xl font-bold text-gray-800 mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">School</span> Uniform
                        </h1>

                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            අපගේ පාසලේ නිවැරදි නිව ඇඳීමේ මාර්ගෝපදේශය පිළිබඳ විස්තර මෙහි ඇත.
                        </p>

                        <div className={`w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mt-8 transition-all duration-700 delay-400 ${isVisible ? 'scale-100' : 'scale-0'
                            }`} />
                    </div>

                    {/* Navigation Tabs */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        {uniformData.map((uniform, index) => {
                            const IconComponent = uniform.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveSection(index)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeSection === index
                                            ? 'bg-green-600 text-white shadow-lg scale-105'
                                            : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5" />
                                    <span className="hidden sm:inline">{uniform.englishTitle}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Uniform Sections */}
                    <div className="space-y-16">
                        {uniformData.map((uniform, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ${activeSection === index ? 'opacity-100 scale-100' : 'opacity-40 scale-95 pointer-events-none'
                                    } ${isVisible ? 'translate-y-0' : 'translate-y-8'}`}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-100 overflow-hidden">

                                    {/* Section Header */}
                                    <div className={`bg-gradient-to-r ${uniform.color} p-8 text-white relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="relative z-10 flex items-center justify-between">
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-2">{uniform.title}</h2>
                                                <p className="text-lg opacity-90">{uniform.englishTitle}</p>
                                            </div>
                                            <uniform.icon className="w-16 h-16 opacity-30" />
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
                                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                                    </div>

                                    <div className="p-8 md:p-12">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                                            {/* Image Section */}
                                            <div className="order-2 lg:order-1">
                                                <div className="relative group">
                                                    <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 w- p-2 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                                    <div className="relative bg-gray-100 rounded-2xl p-5 w-fit min-h-fit flex items-center justify-center shadow-lg">
                                                        <div className="text-center text-gray-500">
                                                            <img className='w-[90rem]  ' src={uniform.image} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Guidelines Section */}
                                            <div className="order-1 lg:order-2">
                                                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                                    <Award className="w-6 h-6 text-green-600" />
                                                    Guidelines / මාර්ගෝපදේශ
                                                </h3>

                                                <div className="space-y-4">
                                                    {uniform.guidelines.map((guideline, guideIndex) => (
                                                        <div
                                                            key={guideIndex}
                                                            className="flex gap-4 p-4 bg-green-50/50 rounded-xl hover:bg-green-50 transition-all duration-300 group"
                                                        >
                                                            <div className="flex-shrink-0">
                                                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                                                                    {guideIndex + 1}
                                                                </div>
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                                                    {guideline}
                                                                </p>
                                                            </div>
                                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Section */}
                    <div className={`mt-20 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    නිවැරදි නිල ඇඳුම පළඳීම අත්‍යවශ්‍යයි
                                </h3>
                                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                                    Proper school uniform is essential for maintaining discipline and unity among students
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
                        </div>
                    </div>
                </section>

                {/* Floating Decorative Elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse" />
                <div className="absolute top-3/4 right-20 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-pulse delay-700" />
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-10 animate-pulse delay-1000" />
            </div>

            {/* school uniform section end */}

            <Footer />
        </div>
    )
}

export default SchoolUniform
