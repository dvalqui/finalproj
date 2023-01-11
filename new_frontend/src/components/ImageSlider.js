import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ImageSlider = ({ slides, women, setSelectedWoman }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const selectWoman = (event) => {
        const foundWoman = women.find((woman) => event.target.value === woman.name)
        setSelectedWoman(foundWoman)
    }


    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <Link to="/selected" >
                                <input type='image' src={slide.image}

                                    onClick={selectWoman}
                                    alt='woman' className='image'
                                    value={slide.name} />
                            </Link>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;