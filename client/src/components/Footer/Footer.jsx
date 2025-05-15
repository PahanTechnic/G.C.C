import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaYoutube, FaTiktok, FaPhone, FaLocationArrow } from 'react-icons/fa';
import { assets } from '../../utils';

// Menu and link items extracted to avoid repetition
const serviceLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Our School', path: '/about' },
  { title: 'Studies', path: '/studies' },
  { title: 'News and special events', path: '/news' },
  { title: 'Achievements', path: '/achievements' },
  { title: 'Clubs and associations', path: '/clubs' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Contact us', path: '/contact' }
];

const usefulLinks = [
  { title: 'e-තක්සලාව', path: '/etaksalawa' },
  { title: 'පෙළ පොත් බාගත කිරීම', path: '/textbooks' },
  { title: 'විෂය නිර්දේශය බාගත කිරීම', path: '/syllabus' },
  { title: 'අධ්‍යාපන අමාත්‍යාංශය', path: '/education-ministry' },
  { title: 'විභාග ප්‍රතිඵල', path: '/exam-results' }
];

// Reusable components
const SocialIcon = ({ icon: Icon, href = "#" }) => (
  <a 
    href={href} 
    className="hover:scale-110 transition-transform"
    aria-label="Social media link"
  >
    <Icon />
  </a>
);

const FooterLink = ({ href = "#", children }) => (
  <a 
    href={href} 
    className="block hover:text-green-400 transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-green-400 group-hover:w-8 transition-all duration-200"></span>
  </a>
);

const Footer = () => {
  useEffect(() => {
    // Initialize AOS with options
    AOS.init({ 
      duration: 800, 
           disable: window.innerWidth < 768 // Disable on mobile for performance
    });
  }, []);

  return (
    <footer className="bg-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
          
          {/* Company Info */}
          <div className="text-center md:text-left space-y-3 sinhala">
            <img 
              src={assets.logo} 
              alt="School Logo"
              className="w-24 h-24 mx-auto md:mx-0 rounded-full object-cover"
              loading="lazy"
            />
            <h2 className="text-lg font-bold font-yaldevi">කෑ/ගලිගමුව මධ්‍ය මහා විද්‍යාලය</h2>
            <p className="font-yaldevi text-gray-300">
              සබරගමුව පළාතේ මනරම් කදුකරයේ සොභාව සෞන්දර්යයෙන් අනූන සුන්දර පරිසරයක පිහිටි....
            </p>
            <div className="flex justify-center md:justify-start space-x-20 pt-2 text-xl text-green-500">
              <SocialIcon icon={FaFacebook} />
              <SocialIcon icon={FaYoutube} />
              <SocialIcon icon={FaTiktok} />
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-green-400 font-semibold mb-3">Services</h3>
            <div className="space-y-2 font-yaldevi">
              {serviceLinks.map((item, idx) => (
                <FooterLink key={idx} href={item.path}>{item.title}</FooterLink>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-green-400 font-semibold mb-3">Links</h3>
            <div className="space-y-2 font-yaldevi">
              {usefulLinks.map((link, idx) => (
                <FooterLink key={idx} href={link.path}>{link.title}</FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-green-400 font-semibold mb-3">Contact</h3>
            <div className="space-y-3 font-yaldevi">
              <div className="flex items-center group">
                <FaLocationArrow className="mr-2 text-green-500" />
                <p className="group-hover:text-green-400 transition-colors">Kandy - Colombo Rd</p>
              </div>
              <div className="flex items-center group">
                <FaPhone className="mr-2 text-green-500" />
                <a 
                  href="tel:+94352284392" 
                  className="group-hover:text-green-400 transition-colors"
                >
                  (+94) 352284392
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Sub Footer */}
        <div className="relative text-center space-y-4" data-aos="fade-up">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-xl pointer-events-none"
            aria-hidden="true"
          ></div>
          
          <div className="flex justify-center gap-4 z-10 relative">
            {[FaFacebook, FaTiktok, FaYoutube].map((Icon, idx) => (
              <a 
                key={idx}
                href="#" 
                className="bg-gray-900 p-2 rounded-full hover:bg-green-900 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                aria-label={`Social media link ${idx + 1}`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-400 z-10 relative">
            <span className="relative group inline-block">
              © Copyright. All rights reserved By <span className="hover:text-green-400 transition-colors">Pahan Chethana</span>
              <span className="block w-0 group-hover:w-[100%] h-[1px] bg-green-400 transition-all duration-200 mt-1"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
