import React from 'react';
import './testimonial.css';
import "./swiper.min.css";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'

import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper';
import { TestimonialData } from '../../data';
SwiperCore.use([Navigation, Scrollbar, Autoplay]);

const Testimonial = () => {
    return (

        <section className="testimonials">
            <div className="testimonials_inr_box">
                <div className="cube_box_1">
                    <img src="" alt="" />
                </div>
                <div className="title_testi title_box">
                    <h2>TOP TESTIMONIALS THAT WILL MAKE YOU WANT TO ATTEND WBS!</h2>
                </div>
                <div className='testi_video_slider swiper'>
                    <Swiper slidesPerView={1}
                        navigation={{
                            nextEl: ".testi_video_slider_arrow .swiper-button-next",
                            prevEl: ".testi_video_slider_arrow .swiper-button-prev"
                        }}
                        // breakpoints={sliderForSingleBreakPoint}
                        className="swiper-wrapper">
                        {TestimonialData && TestimonialData.length > 0 && TestimonialData.map((data, index) => {
                            return (
                                <SwiperSlide key={`swiper-slide testi_video_slide_item ${index}`} className="swiper-slide testi_video_slide_item" >
                                    <iframe src={data.link} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </SwiperSlide>
                            )
                        })}

                        <div className="testi_video_slider_arrow">
                            <div className="swiper-button-next">
                                <img src="/image/right-arrow.png" alt="" />
                            </div>
                            <div className="swiper-button-prev">
                                <img src="/image/left-arrow.png" alt="" />
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;