import React, { FC, useEffect, useRef, useState } from 'react'

import './title.scss'

import { dataFirstTitle, dataSecondTitle } from '../../variables/variables'


type Props = {
    activeSlide: number
}

const Title:FC<Props> = ({activeSlide}) => {
    const firstTitleRef = useRef<HTMLHeadingElement | null>(null)
    const secondTitleRef = useRef<HTMLHeadingElement | null>(null)


    useEffect(() => {

        let duration = 35


        const intercal = setInterval(() => {
            if (Number(dataFirstTitle[activeSlide]) > Number(firstTitleRef.current.textContent) && Number(dataSecondTitle[activeSlide]) > Number(secondTitleRef.current.textContent)) {

                
                firstTitleRef.current.textContent = (parseInt(firstTitleRef.current.textContent) + 1).toString();
                secondTitleRef.current.textContent = (parseInt(secondTitleRef.current.textContent) + 1).toString();
            } else {
                clearInterval(intercal)
            }
        }, duration)

        const intercal1 = setInterval(() => {
            if (Number(dataFirstTitle[activeSlide]) < Number(firstTitleRef.current.textContent) && Number(dataSecondTitle[activeSlide]) < Number(secondTitleRef.current.textContent)) {


                firstTitleRef.current.textContent = (parseInt(firstTitleRef.current.textContent) - 1).toString();
                secondTitleRef.current.textContent = (parseInt(secondTitleRef.current.textContent) - 1).toString();
        
            } else {
                clearInterval(intercal1)
            }
        }, duration)



    }, [activeSlide])


    return (
        <div className="circle__titles">
            <h1 className="hero__title-date__blue" ref={firstTitleRef}>1984</h1>
            <h1 className="hero__title-date__purple" ref={secondTitleRef}>1988</h1>
        </div>
    )
}

export default Title
