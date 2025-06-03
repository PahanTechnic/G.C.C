import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BackToTopButton from '../Components/BackToTopButton/BackToTopButton';
import SidebarBannerSlider from '../Components/Sidebar/SidebarBannerSlider';
import Footer from '../Components/Footer/Footer';
import { assets, lyrics } from '../utils';
import { hover } from 'framer-motion';

// SVG Components
const MusicNotesSVG = () => (
  <svg 
    viewBox="0 0 200 100" 
    className="absolute top-5 right-5 w-40 h-20 opacity-50 z-0"
  >
    <g className="music-notes">
      <path 
        d="M30,40 Q40,20 50,40 T70,40" 
        fill="none" 
        stroke="#22c55e" 
        strokeWidth="2"
        className="animate-float-slow"
      />
      <circle 
        cx="25" 
        cy="40" 
        r="5" 
        fill="#22c55e"
        className="animate-pulse-slow" 
      />
      <circle 
        cx="75" 
        cy="40" 
        r="5" 
        fill="#22c55e"
        className="animate-pulse-slow" 
      />
      
      <path 
        d="M100,60 Q110,40 120,60 T140,60" 
        fill="none" 
        stroke="#22c55e" 
        strokeWidth="2"
        className="animate-float" 
      />
      <circle 
        cx="95" 
        cy="60" 
        r="5" 
        fill="#22c55e"
        className="animate-pulse" 
      />
      <circle 
        cx="145" 
        cy="60" 
        r="5" 
        fill="#22c55e"
        className="animate-pulse" 
      />
      
      <path 
        d="M160,30 Q170,10 180,30 T200,30" 
        fill="none" 
        stroke="#22c55e" 
        strokeWidth="2"
        className="animate-float-fast" 
      />
      <circle 
        cx="155" 
        cy="30" 
        r="5" 
        fill="#22c55e" 
        className="animate-pulse-fast"
      />
    </g>
  </svg>
);

const SchoolBuildingSVG = () => (
  <svg 
    viewBox="0 0 300 100" 
    className="w-full h-32 mt-8 mb-4"
  >
    <g className="school-building">
      <rect x="100" y="40" width="100" height="60" fill="#15803d" rx="2" />
      <polygon points="100,40 150,10 200,40" fill="#16a34a" />
      <rect x="130" y="60" width="40" height="40" fill="#dcfce7" />
      <rect x="140" y="70" width="20" height="30" fill="#22c55e" className="door animate-door" />
      <circle cx="150" cy="25" r="6" fill="#fde68a" className="animate-school-sun" />
      <rect x="90" y="70" width="10" height="10" fill="#dcfce7" className="window" />
      <rect x="110" y="70" width="10" height="10" fill="#dcfce7" className="window" />
      <rect x="180" y="70" width="10" height="10" fill="#dcfce7" className="window" />
      <rect x="200" y="70" width="10" height="10" fill="#dcfce7" className="window" />

      <path 
        d="M140,50 C145,45 155,45 160,50" 
        fill="none" 
        stroke="#dcfce7" 
        strokeWidth="2" 
        className="arch" 
      />
      
      <path 
        d="M50,80 C50,60 80,70 80,80" 
        fill="none" 
        stroke="#15803d" 
        strokeWidth="2" 
        className="tree animate-sway-slow" 
      />
      <circle cx="65" cy="60" r="15" fill="#22c55e" className="leaves animate-leaves-slow" />
      
      <path 
        d="M230,80 C230,60 260,70 260,80" 
        fill="none" 
        stroke="#15803d" 
        strokeWidth="2" 
        className="tree animate-sway" 
      />
      <circle cx="245" cy="60" r="15" fill="#22c55e" className="leaves animate-leaves" />
      
      <path 
        d="M40,100 C60,95 80,105 100,100 C120,95 140,105 160,100 C180,95 200,105 220,100 C240,95 260,105 280,100" 
        fill="none" 
        stroke="#dcfce7" 
        strokeWidth="3" 
        className="ground" 
      />
    </g>
  </svg>
);

const WaveformSVG = () => (
  <svg 
    viewBox="0 0 200 50" 
    className="w-full h-8 mt-2"
  >
    <g className="waveform">
      <path 
        d="M0,25 Q10,10 20,25 T40,25 T60,25 T80,25 T100,25 T120,25 T140,25 T160,25 T180,25 T200,25" 
        fill="none" 
        stroke="#22c55e" 
        strokeWidth="2"
        className="wave animate-wave" 
      />
      <path 
        d="M0,25 Q10,40 20,25 T40,25 T60,25 T80,25 T100,25 T120,25 T140,25 T160,25 T180,25 T200,25" 
        fill="none" 
        stroke="#22c55e" 
        strokeWidth="2"
        className="wave animate-wave-reverse" 
      />
    </g>
  </svg>
);

const SchoolSong = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioElement, setAudioElement] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            easing: 'ease-in-out',
        });

        // Add custom CSS for SVG animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            @keyframes float-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
            
            @keyframes float-fast {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
            }
            
            @keyframes pulse-slow {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.2); opacity: 1; }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.3); opacity: 1; }
            }
            
            @keyframes pulse-fast {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.4); opacity: 1; }
            }
            
            @keyframes sway {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(5deg); }
            }
            
            @keyframes sway-slow {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(3deg); }
            }
            
            @keyframes leaves {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            @keyframes leaves-slow {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes door {
                0%, 90%, 100% { transform: rotate(0deg); transform-origin: right; }
                95% { transform: rotate(-15deg); transform-origin: right; }
            }
            
            @keyframes school-sun {
                0%, 100% { fill: #fde68a; }
                50% { fill: #fcd34d; }
            }
            
            @keyframes wave {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50px); }
            }
            
            @keyframes wave-reverse {
                0% { transform: translateX(0); }
                100% { transform: translateX(50px); }
            }
            
            .animate-float { animation: float 3s ease-in-out infinite; }
            .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
            .animate-float-fast { animation: float-fast 2s ease-in-out infinite; }
            .animate-pulse { animation: pulse 3s ease-in-out infinite; }
            .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
            .animate-pulse-fast { animation: pulse-fast 2s ease-in-out infinite; }
            .animate-sway { animation: sway 4s ease-in-out infinite; }
            .animate-sway-slow { animation: sway-slow 6s ease-in-out infinite; }
            .animate-leaves { animation: leaves 4s ease-in-out infinite; }
            .animate-leaves-slow { animation: leaves-slow 6s ease-in-out infinite; }
            .animate-door { animation: door 10s ease-in-out infinite; }
            .animate-school-sun { animation: school-sun 4s ease-in-out infinite; }
            .animate-wave { animation: wave 5s linear infinite; }
            .animate-wave-reverse { animation: wave-reverse 5s linear infinite; }
            
            .lyric-active {
                background-color: rgba(34, 197, 94, 0.1);
                color: #15803d;
                font-weight: 600;
                transform: scale(1.05);
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        `;
        document.head.appendChild(style);

        const audio = document.getElementById('school-song-audio');
        if (audio) {
            setAudioElement(audio);

            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);
            const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

            audio.addEventListener('play', handlePlay);
            audio.addEventListener('pause', handlePause);
            audio.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                audio.removeEventListener('play', handlePlay);
                audio.removeEventListener('pause', handlePause);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                document.head.removeChild(style);
            };
        }
    }, []);

    const togglePlayPause = () => {
        if (audioElement) {
            isPlaying ? audioElement.pause() : audioElement.play();
        }
    };

    // const isLyricActive = (index) => {
    //     const lyricTimings = [
    //         { start: 0, end: 5 }, { start: 5, end: 10 }, { start: 10, end: 15 },
    //         { start: 15, end: 20 }, { start: 20, end: 25 }, { start: 25, end: 30 },
    //         { start: 30, end: 35 }, { start: 35, end: 40 }, { start: 40, end: 45 },
    //         { start: 45, end: 50 }, { start: 50, end: 55 }, { start: 55, end: 60 },
    //         { start: 60, end: 65 }, { start: 65, end: 70 }
    //     ];
    //     return isPlaying && currentTime >= lyricTimings[index].start && currentTime < lyricTimings[index].end;
    // };

    return (
        <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen relative overflow-hidden">
            <BackToTopButton />
            <SidebarBannerSlider />

            {/* Decorative SVG Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="absolute top-10 left-10 w-32 h-32">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#16a34a" strokeWidth="1" className="animate-pulse-slow" />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute bottom-20 right-10 w-48 h-48">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#16a34a" strokeWidth="1" className="animate-pulse" />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute top-40 right-20 w-24 h-24">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#16a34a" strokeWidth="1" className="animate-pulse-fast" />
                </svg>
            </div>

            <div className="pt-16 pb-24 px-4 lg:px-8">
                <div className="container mx-auto">
                    <section className="main School_Song">
                        <div className="relative mb-16">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-green-100 rounded-full opacity-50 animate-ping"></div>
                            </div>
                            <div className='p-3 relative ' data-aos="fade-up">
                                <div className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mb-4 bg-green-100 px-4 py-2 rounded-full shadow-sm 
                                absolute left-1/2 transform -translate-x-1/2 -top-10">
                                    <i className="bi bi-music-note text-green-600"></i>
                                    <span>Our School Song</span>
                                </div>
                                
                                {/* Music Notes SVG */}
                                <MusicNotesSVG />
                            </div>
                            <h4 className="sinhala text-5xl font-bold text-center text-green-600 mb-2 h4 relative z-10" data-aos="zoom-in">
                                පාසල් ගීතය
                            </h4>
                            <div className="flex justify-center">
                                <div className="h-1 w-24 bg-green-500 rounded-full" data-aos="zoom-in-up" data-aos-delay="300"></div>
                            </div>
                            
                            {/* School Building SVG */}
                            <SchoolBuildingSVG />
                        </div>

                        <div className="max-w-4xl mx-auto rounded-3xl shadow-xl bg-white p-8 lg:p-12 bg-opacity-90 backdrop-blur-sm border border-green-100" data-aos="fade-up" data-aos-duration="1200">
                            <div className="mb-12 rounded-2xl bg-green-50 p-6 shadow-md" data-aos="fade-up">
                                <div className="text-center mb-4">
                                    <h3 className="text-lg sinhala font-medium text-green-800">අපගේ පාසල් ගීතය අසන්න</h3>
                                    <p className="text-sm text-green-600">Listen to our school anthem</p>
                                </div>

                                <audio id="school-song-audio" controls className="hidden sinhala">
                                    <source src={assets.SchoolSong} type="audio/mpeg" />ඔබගේ browser එකට audio play කරන්න බැහැ.
                                </audio>

                                <div className="flex items-center justify-center gap-6">
                                    <button
                                        onClick={togglePlayPause}
                                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:scale-110 hover:rotate-1 ${isPlaying ? 'bg-red-500 text-white' : 'bg-green-600 text-white'}`}
                                    >
                                        {isPlaying ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                    </button>

                                    <div className="text-center">
                                        <p className="text-sm text-green-700 mb-1">{isPlaying ? 'ගීතය වාදනය වෙමින් පවතී' : 'Play වෙමින් නැත'}</p>
                                        <p className="text-xs text-green-600">{isPlaying ? 'Now Playing' : 'Not Playing'}</p>
                                    </div>
                                </div>

                                {/* Waveform SVG Animation */}
                                {isPlaying && <WaveformSVG />}

                                {/* Playback Progress Bar */}
                                <div className="w-full bg-green-200 h-2 rounded mt-4 overflow-hidden">
                                    <div className="bg-green-600 h-2 rounded transition-all" style={{ width: `${(currentTime / (audioElement?.duration || 1)) * 100}%` }}></div>
                                </div>
                            </div>

                            <div className="text-xl leading-relaxed space-y-6 text-center sinhala px-4">
                                {lyrics.map((lyric, index) => (
                                    <p
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={100 + (index * 50)}
                                        className={`transition-all duration-300 py-2 px-4 rounded-lg text-green-900 hover:bg-green-50`}
                                    >
                                        {lyric}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button onClick={() => window.print()} className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                                    <span className="text-lg group-hover:animate-bounce"><i className="bi bi-printer-fill text-white"></i></span>
                                    <span>Print</span>
                                </button>

                                <a href="/school-song.mp3" download className="bg-white text-green-700 border-2 border-green-600 px-8 py-3 rounded-full hover:bg-green-50 shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                                    <span className="text-lg group-hover:animate-bounce "><i className="bi bi-download"></i></span>
                                    <span>Download the song</span>
                                </a>
                            </div>

                            <div className="mt-8 text-center text-sm text-green-700 border-t border-green-100 pt-4">
                                <p className='sinhala'>සරිපුත්ත ජාතික අධ්‍යාපන විද්‍යාපීඨයේ නිල පාසල් ගීතය</p>
                                <p className="text-xs text-green-600 mt-1">Official School Anthem of Sriputta National College of Education</p>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mt-8 px-4 text-center text-green-800 text-sm" data-aos="fade-up" data-aos-delay="200">
                            <p className='sinhala'>පාසල් ගීතය පිළිබඳ වැඩි විස්තර දැනගැනීමට, කරුණාකර පාසල් ප්‍රධාන කාර්යාලය අමතන්න.</p>
                            <p className="mt-1">For more information about our school anthem, please contact the school main office.</p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SchoolSong;