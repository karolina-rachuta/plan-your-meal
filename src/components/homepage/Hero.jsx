import React, { useState } from 'react';
import Slide1 from '../../assets/pexels-ella-olsson-572949-1640774.jpg';
import Slide2 from '../../assets/pexels-ella-olsson-572949-1640775.jpg';
import Slide3 from '../../assets/pexels-ella-olsson-572949-1640777.jpg';
function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: Slide1, text: 'Plan Your Meals, Save Your Time' },
        { image: Slide2, text: 'Healthy Choices Made Easy' },
        { image: Slide3, text: 'Turn Meal Planning into a Habit' },
    ];
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    return (
        <div className="hero__container container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero__slide ${
                        index === currentSlide ? 'active' : ''
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <h1>{slide.text}</h1>
                </div>
            ))}
            <button className="hero__button prev" onClick={prevSlide}>
                &#8249;
            </button>
            <button className="hero__button next" onClick={nextSlide}>
                &#8250;
            </button>
        </div>
    );
}

export default Hero;
