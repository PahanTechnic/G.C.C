import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { sliderItems } from '../../utils';
import './ImprovedSlider.css';


const Hero = () => {

    const [isAnimating, setIsAnimating] = useState(false);
    const [items, setItems] = useState(() => reorderItems(sliderItems));
    const [resetAnimation, setResetAnimation] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(null);

    const listRef = useRef(null);
    const timeoutRef = useRef(null);
    const progressRef = useRef(null);

    const timeRunning = 2000;
    const timeAutoNext = 7000;

    function reorderItems(items) {
        const result = [...items];
        result.unshift(result.pop());
        return result;
    }

    const resetTimeRunningAnimation = () => {
        setResetAnimation(true);
        setTimeout(() => setResetAnimation(false), 10);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const newItems = [...items];
        newItems.push(newItems.shift());

        clearTimeout(timeoutRef.current);
        resetTimeRunningAnimation();

        timeoutRef.current = setTimeout(() => {
            setItems(newItems);
            setIsAnimating(false);
        }, timeRunning);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const newItems = [...items];
        newItems.unshift(newItems.pop());

        clearTimeout(timeoutRef.current);
        resetTimeRunningAnimation();

        timeoutRef.current = setTimeout(() => {
            setItems(newItems);
            setIsAnimating(false);
        }, timeRunning);
    };

    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

    const handleTouchMove = (e) => {
        if (!touchStart) return;
        const diff = touchStart - e.touches[0].clientX;
        if (Math.abs(diff) > 50) {
            setSwipeDirection(diff > 0 ? 'next' : 'prev');
        }
    };

    const handleTouchEnd = () => {
        if (swipeDirection === 'next') handleNext();
        else if (swipeDirection === 'prev') handlePrev();
        setTouchStart(0);
        setSwipeDirection(null);
    };

    const togglePause = () => setIsPaused(!isPaused);

    const jumpToSlide = (index) => {
        if (isAnimating || index === 1) return;
        const steps = index > 1 ? items.length - index + 1 : 1 - index;
        const newItems = [...items];
        for (let i = 0; i < Math.abs(steps); i++) {
            if (steps > 0) newItems.push(newItems.shift());
            else newItems.unshift(newItems.pop());
        }

        setIsAnimating(true);
        clearTimeout(timeoutRef.current);
        resetTimeRunningAnimation();

        timeoutRef.current = setTimeout(() => {
            setItems(newItems);
            setIsAnimating(false);
        }, timeRunning);
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                if (!isAnimating) handleNext();
            }, timeAutoNext);
            return () => clearInterval(interval);
        }
    }, [items, isAnimating, isPaused]);


    return (
        <div className="min-h-screen w-full font-sans relative overflow-hidden">
            <div
                className="carousel w-full h-screen relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    ref={progressRef}
                    className={`absolute top-0 left-0 h-1 bg-green-400 z-50 ${resetAnimation ? 'w-0' : 'animate-runningTime'}`}
                />

                <div className="list relative h-full" ref={listRef}>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`item absolute bg-cover bg-center shadow-lg ${index === 1 ? 'active' : ''
                                }`}
                            style={{ backgroundImage: `url(${item.image})` }}
                            onClick={() => index > 1 && jumpToSlide(index)}
                        >
                            {index === 1 && (
                                <div className="content absolute top-1/2 left-0 sm:left-12 md:left-24 transform -translate-y-1/2 w-full sm:w-5/6 md:w-3/4 lg:w-2/3 p-6 sm:p-0 text-left text-white z-30">
                                    <div className="title text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase font-bold text-green-400 animate-titleFadeIn">
                                        {item.title}
                                    </div>
                                    <div className="name text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase font-bold text-shadow animate-nameFadeIn">
                                        {item.name}
                                    </div>
                                    <div className="des mt-2 mb-4 text-sm sm:text-base md:text-lg ml-1 animate-desFadeIn max-w-md">
                                        {item.description}
                                    </div>
                                    <div className="btn ml-1 animate-btnFadeIn">
                                        <button className="px-4 py-2 mr-4 border-2 border-white text-sm sm:text-base hover:bg-green-400 transition">
                                            See More
                                        </button>
                                        <button className="px-4 py-2 bg-transparent text-green-400 border-2 border-white text-sm sm:text-base hover:bg-green-400 hover:text-white transition">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <div className="controls absolute bottom-6 left-0 right-0 z-40 flex justify-center items-center gap-4">
                    <button onClick={handlePrev} className="slider-btn">&lt;</button>
                    <button onClick={togglePause} className="slider-btn">
                        {isPaused ? "▶" : "❚❚"}
                    </button>
                    <button onClick={handleNext} className="slider-btn">&gt;</button>
                </div>

                {/* Indicators */}
                <div className="indicators absolute bottom-24 left-0 right-0 z-30 flex justify-center">
                    <div className="flex gap-2">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
          ${index === 1 ? 'bg-green-400 scale-150' : 'bg-white bg-opacity-50 hover:bg-opacity-100'}`}
                                onClick={() => jumpToSlide(index)}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Style Section */}
            <style>{`
             `}</style>
        </div>
    )
}

export default Hero
