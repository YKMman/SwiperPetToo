import React, { FC, Ref } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import './slider.scss'



interface Props  {
    sliderRef: Ref<SwiperRef>,
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>
}


const Slider:FC<Props> = ({sliderRef, setActiveSlide} ) => {

    const handleSlide = (swiper: any) => {
        setActiveSlide(swiper.activeIndex)
        console.log(swiper)
    }


    return (
        <div className='slider'>
            <Swiper
                ref={sliderRef}
                className="mySwiper swiper-h"
                onSlideChange={(swiper) => handleSlide(swiper)}
                direction='vertical'
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                >
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={'horizontal'}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={'horizontal'}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={'horizontal'}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={'horizontal'}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={'horizontal'}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        direction={'horizontal'}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news">
                                <h2 className="news__title">2015</h2>
                                <p className="news__text">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
