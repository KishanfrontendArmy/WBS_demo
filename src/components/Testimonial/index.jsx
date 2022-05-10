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

        <section className="testimonials relative page-section" id="testimonialslink">
            <div className="testimonials_cube-1 ">
                {/* <!-- <canvas id="c"></canvas> --> */}
                <span >
                    <img data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-30}' className="img-fluid" src="/image/cube-6-png.png" alt="" />
                </span>
            </div>
            <div className="container">
                <div className="testimonials_inr_box row">
                    <div className="title_testi title_box col-12 col-md-8 mx-auto wow fadeInUp relative">
                        <h2>TOP TESTIMONIALS THAT WILL MAKE YOU WANT TO ATTEND WBS!</h2>
                        <div className="title_testi_icon_right wow zoomIn">
                            <img className="img-fluid" data-parallax='{"scale": 1.2, "x": 50, "y": -15, "rotateZ":30}' src="/image/single_quabe_1.png" />
                        </div>
                    </div>
                    <div className="row">
                        <div className='testi_video_slider swiper col-12 col-md-10 mx-auto'>
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

                                <div className="testi_video_slider_arrow wow zoomIn">
                                    <div className="swiper-button-next" data-parallax='{"x": 30, "y": 0}'>
                                        <img className="img-fluid" src="/image/right-arrow.png" alt="" />
                                    </div>
                                    <div className="swiper-button-prev" data-parallax='{"x": -30, "y": 0}'>
                                        <img className="img-fluid" src="/image/left-arrow.png" alt="" />
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;