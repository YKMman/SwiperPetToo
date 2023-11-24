import React, { FC, useEffect, useRef, useState } from 'react'
import { SwiperRef } from 'swiper/react'

import './circle.scss'

import { titlesForPoints } from '../../variables/variables'


type Props = {
    activeSlide: number,
    allSlidesLength: number,
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>,
    sliderRef: React.MutableRefObject<SwiperRef>
}

const Circle: FC<Props> = ({activeSlide, allSlidesLength, setActiveSlide, sliderRef}) => {
    const circleRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        let rotateCircle = 360 - ((activeSlide + 1) * 60)
        circleRef.current.style.transform = `rotate(${rotateCircle}deg)`
    }, [activeSlide])


    const handleUpdateActive = (index:number) => {
        setActiveSlide(index)
        sliderRef.current.swiper.slideTo(index)
        sliderRef.current.swiper.update()
    }


    return (
        <div className="circle" ref={circleRef}>
            {
                Array.from(Array(allSlidesLength)).map((el, index) => {
                    const radius = circleRef.current.offsetWidth / 2
                    const angle = (2 * Math.PI / allSlidesLength) * index
                    const x = radius + radius * Math.cos(angle)
                    const y = radius + radius * Math.sin(angle)


                    let rotateDot = 360 - (360 - ((activeSlide + 1) * 60))

                    const dotActiveX = x - 17
                    const dotActiveY = y - 17
                    const dotX = x - 6
                    const dotY = y - 6

                    if (index === activeSlide) {
                        return (
                            <div key={index} className='dot-active' style={{left: dotActiveX, top: dotActiveY, transform: `rotate(${rotateDot}deg)`}}>
                                <span className='dot__index'>{index + 1}</span>
                                <h5 className='dot__title'>{titlesForPoints[index]}</h5>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className='dot' style={{left: dotX, top: dotY, transform: `rotate(${rotateDot}deg)`}} onClick={() => handleUpdateActive(index)}>
                                <span className='dot__index'>{index + 1}</span>
                                <h5 className='dot__title'>{titlesForPoints[index]}</h5>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}



export default Circle
