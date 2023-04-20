import React, { useState } from 'react'
import { SliderData } from './Data';
import {
    SliderSection, SliderImage, SliderIconLeft,
    SliderIconRight, SliderCard
} from './ImageSliderStyles';

const ImageSlider = ({ slides }) => {
    // States, references
    const [current, setCurrent] = useState(0);

    // Method to change to the previous slide
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    // Method to change to the next slide
    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

    return (
        <>
            {Array.isArray(slides) && slides.length > 0 ? (
                <SliderSection>
                    <SliderIconLeft onClick={prevSlide} />
                    <SliderIconRight onClick={nextSlide} />
                    {SliderData.map((slide, idx) => {
                        return (
                            <SliderCard key={idx} active={idx === current ? true : false}>
                                {idx === current &&
                                    <SliderImage src={slide.image} alt={slide.alt} />}
                            </SliderCard>
                        )
                    })}
                </SliderSection>
            ) : null}
        </>
    )
}

export default ImageSlider