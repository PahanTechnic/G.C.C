import { useState, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import 'aos/dist/aos.css';

// Mock function to simulate AOS initialization (in a real project, use the actual AOS library)
const initAOS = () => {
  if (typeof window !== 'undefined') {
    // In a real project, you would import AOS and use it directly
    console.log('AOS initialized');
  }
};

export default function EnhancedBreadcrumbs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    initAOS();
    
    // Make breadcrumbs visible after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Sample breadcrumb data
  const breadcrumbs = [
    { id: 1, label: 'Home', path: '/', icon: <Home size={16} /> },
    { id: 2, label: 'About Our School', path: '/about' },
    { id: 3, label: 'Our history and traditions', path: '/about/history' },
    { id: 4, label: 'School Profile', path: '/about/history/profile', active: true }
  ];

  return (
    <div className={`fixed top-6 left-0 z-50 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
         data-aos="fade-right"
         data-aos-duration="800"
         data-aos-easing="ease-in-out">
      <div className="bg-green-600 shadow-lg rounded-r-full rounded-l-full py-3 px-4 md:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-1 md:gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.id} className="flex items-center">
                <a 
                  href={crumb.path}
                  className={`flex items-center text-xs md:text-sm hover:underline transition-colors duration-200
                    ${crumb.active ? 'text-green-100 font-semibold' : 'text-white'}`}
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  {crumb.icon && <span className="mr-1">{crumb.icon}</span>}
                  <span>{crumb.label}</span>
                </a>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-1 md:mx-2 text-green-200">
                    <ChevronRight size={14} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      
      {/* Mobile version for smaller screens */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 mx-auto w-max">
        <div className="bg-green-700 text-white text-xs px-4 py-2 rounded-full flex items-center shadow-lg">
          <Home size={12} className="mr-1" />
          <span className="mr-1">/</span>
          <span>...</span>
          <span className="mx-1">/</span>
          <span className="font-semibold">{breadcrumbs[breadcrumbs.length - 1].label}</span>
        </div>
      </div>
    </div>
  );
}