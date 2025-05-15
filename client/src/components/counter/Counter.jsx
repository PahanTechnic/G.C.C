import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../../utils';



const Counter = () => {

      useEffect(() => {
    AOS.init({ duration: 1200 });

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';

      const updateCounter = () => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };

      const counterObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          updateCounter();
          counterObserver.disconnect();
        }
      });

      counterObserver.observe(counter);
    });
  }, []);


    return (

        <section
            className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${assets.counter})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 to-green-700/70 z-10"></div>
            <div className="relative z-20 max-w-6xl w-11/12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl text-white text-center shadow-lg transition-transform duration-500 hover:-translate-y-2" data-aos="fade-up">
                        <span className="counter text-4xl font-semibold block" data-target="2300">0</span>
                        <h3 className="text-lg mt-2 font-light">සිසුන්</h3>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl text-white text-center shadow-lg transition-transform duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                        <span className="counter text-4xl font-semibold block" data-target="90">0</span>
                        <h3 className="text-lg mt-2 font-light">ගුරුවරුන්</h3>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl text-white text-center shadow-lg transition-transform duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                        <span className="counter text-4xl font-semibold block" data-target="120">0</span>
                        <h3 className="text-lg mt-2 font-light">සේවා කාලය - වසර</h3>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl text-white text-center shadow-lg transition-transform duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
                        <span className="counter text-4xl font-semibold block" data-target="94">0</span>
                        <h3 className="text-lg mt-2 font-light">පන්ති කාමර</h3>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Counter
