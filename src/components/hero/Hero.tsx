import React, { useEffect, useRef, useState } from 'react'
import { SwiperRef } from 'swiper/react';

import './hero.scss'

import Circle from '../circle/Circle'
import Slider from '../slider/Slider';
import Title from '../title/Title';
import { titlesForPoints } from '../../variables/variables';



const Hero = () => {
    const sliderRef = useRef<SwiperRef>(null)
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [allSlidesLength, setAllSlidesLength] = useState<number>(0);



    useEffect(() => {
        setActiveSlide(sliderRef.current.swiper.activeIndex)
        setAllSlidesLength(sliderRef.current.swiper.slides.length)
    })


    const handleNext = () => {
        sliderRef.current.swiper.slideNext()
        setActiveSlide((prev) => prev + 1)
    }


    const handlePrev = () => {
        sliderRef.current.swiper.slidePrev()
        setActiveSlide((prev) => prev - 1)
    }


    return (
        <section className='hero'>
            <div className='hero__container container'>
                <h2 className="hero__title-history">
                    Исторические
                    даты
                </h2>
                <Circle activeSlide={activeSlide} allSlidesLength={allSlidesLength} sliderRef={sliderRef} setActiveSlide={setActiveSlide}/>
                <Title activeSlide={activeSlide}/>
                <div className="controllers">
                    <div className='swiper-title'>{titlesForPoints[activeSlide]}</div>
                    <span className="count">0{activeSlide + 1}/0{allSlidesLength}</span>
                    <div className="controllers__btn">
                        <button className="button-prev swiper-controller" onClick={handlePrev} disabled={activeSlide === 0 ? true : false}>&lt;</button>
                        <button className="button-next button-next-too swiper-controller" onClick={handleNext} disabled={activeSlide === 5 ? true : false}>&gt;</button>
                    </div>
                </div>


                <Slider sliderRef={sliderRef} setActiveSlide={setActiveSlide} />

            </div>
        </section>
    )
}

export default Hero
