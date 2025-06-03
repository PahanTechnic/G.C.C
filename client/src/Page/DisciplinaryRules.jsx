import { useEffect, useState } from 'react';
import {
    Shield, CheckCircle, GraduationCap
} from 'lucide-react';



import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import SidebarBannerSlider from '../components/Sidebar/SidebarBannerSlider'
import Footer from '../components/Footer/Footer'
import { rules } from '../utils';


const DisciplinaryRules = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [activeRule, setActiveRule] = useState(null);
    const [expandedCards, setExpandedCards] = useState(new Set());

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const toggleExpanded = (index) => {
        const newExpanded = new Set(expandedCards);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedCards(newExpanded);
    };

    return (
        <div>
            <BackToTopButton />
            <SidebarBannerSlider />

            {/* Disciplinary Rules start */}

            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-300 rounded-full opacity-20 animate-pulse delay-700" />
                <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-400 rounded-full opacity-10 animate-pulse delay-1000" />
                <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-10 animate-pulse delay-500" />

                <section className={`relative w-full max-w-7xl mx-auto px-4 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>

                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <div className={`inline-flex items-center gap-3 text-green-700 text-lg font-semibold mb-6 bg-green-100 px-6 py-3 rounded-full shadow-lg transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-95'
                            }`}>
                            <GraduationCap className="w-6 h-6 text-green-600" />
                             පාසල් විනය නීති
                        </div>

                        <h1 className={`text-5xl md:text-7xl font-bold text-gray-800 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            School <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800">Disciplinary</span> Rules
                        </h1>

                        <p className={`text-xl text-gray-600 mb-8 italic transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            " විනයය සේ අනාගත ජයග්‍රහණයේ පදනමයි! "
                        </p>

                        <div className={`w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full transition-all duration-700 delay-400 ${isVisible ? 'scale-100' : 'scale-0'
                            }`} />
                    </div>

                    {/* Rules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {rules.map((rule, index) => {
                            const IconComponent = rule.icon;
                            const isExpanded = expandedCards.has(index);

                            return (
                                <div
                                    key={index}
                                    className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                                    onMouseEnter={() => setActiveRule(index)}
                                    onMouseLeave={() => setActiveRule(null)}
                                >
                                    <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 ${rule.borderColor} hover:border-green-400 overflow-hidden transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-2xl ${activeRule === index ? 'ring-4 ring-green-300/50' : ''
                                        }`}>

                                        {/* Category Badge */}
                                        <div className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${rule.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                                            {rule.category}
                                        </div>

                                        {/* Header Background */}
                                        <div className={`h-20 bg-gradient-to-r ${rule.color} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/10" />
                                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
                                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
                                        </div>

                                        <div className="p-6 pt-4">
                                            {/* Rule Icon and Title */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className={`p-3 ${rule.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                                    <IconComponent className={`w-6 h-6 ${rule.textColor}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">
                                                        {rule.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 font-medium">
                                                        {rule.englishTitle}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-75'
                                                }`}>
                                                <p className="text-gray-700 text-sm leading-relaxed">
                                                    {rule.text}
                                                </p>
                                            </div>

                                            {/* Expand Button */}
                                            <button
                                                onClick={() => toggleExpanded(index)}
                                                className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${rule.textColor} hover:opacity-80 transition-opacity duration-200`}
                                            >
                                                {isExpanded ? 'Show Less' : 'Read More'}
                                                <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                                                    ▼
                                                </div>
                                            </button>
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
                        <div className="bg-gradient-to-r from-green-600 to-emerald-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <Shield className="w-8 h-8" />
                                    <h3 className="text-2xl md:text-3xl font-bold">
                                        Discipline Excellence
                                    </h3>
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
                                    විනය නීති අපගේ පාසලේ සිසුන්ගේ ශිෂ්ටාචාරය, වගකීම සහ සාර්ථක අනාගතයක් සඳහා අත්‍යාවශ්‍ය මඟ පෙන්වීමකි
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {['Discipline', 'Responsibility', 'Excellence', 'Success'].map((quality, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                                            <CheckCircle className="w-4 h-4" />
                                            <span className="text-sm font-medium">{quality}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
                            <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-full" />
                        </div>
                    </div>
                </section>
            </div>


            {/* Disciplinary Rules end */}

            <Footer />
        </div>
    )
}

export default DisciplinaryRules
