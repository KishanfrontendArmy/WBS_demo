import React from 'react';
import './blockchaintrends.css';
import "./swiper.min.css";
import { BlockchainTrendsData, BlockchainSessionsData } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, Autoplay]);

const BlockchainTrends = () => {
    defineLordIconElement(loadAnimation);
    return (
        <>

            <section className="blockchain_trends relative page-section">
                <div className="container">
                    <div className="title_box col-md-10 mx-auto wow fadeInUp">
                        <h2>Be the first <br />to catch the wind of <br /><strong className="text_org">emerging Blockchain trends</strong></h2>
                    </div>
                    <div className="blockchain_trends_slider  row align-items-center flex-wrap">
                        <div className="blockchain_trends_image_slider col-md-9 swiper wow fadeInLeft">
                            <Swiper slidesPerView={1}
                                loop={true}
                                allowTouchMove={false}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: " .blockchain_trends_button_next ",
                                    prevEl: " .blockchain_trends_button_prev "
                                }}
                                scrollbar={{
                                    el: ".swiper-scrollbar",
                                }}

                                // breakpoints={sliderForSingleBreakPoint}
                                className="swiper-wrapper">
                                {BlockchainTrendsData && BlockchainTrendsData.length > 0 && BlockchainTrendsData.map((data, index) => {
                                    return (

                                        <SwiperSlide key={`blockchain_trends_image_slide_box ${index}`} className="swiper-slide blockchain_trends_image_slide_box" >
                                            <img src={data.image} alt="" />
                                            <div className="scale_img_animation">
                                                <div class="session_title_img">
                                                    <img className='img-fluid' src={data.textimage} alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                        <div className="blockchain_trends_text_slider_otr col-md-4">
                            <div thumbsslider="" className="blockchain_trends_text_slider swiper">
                                <Swiper slidesPerView={1}
                                    loop={true}
                                    allowTouchMove={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={{
                                        nextEl: " .blockchain_trends_button_next ",
                                        prevEl: ".blockchain_trends_button_prev"
                                    }}
                                    scrollbar={{
                                        el: ".swiper-scrollbar",
                                    }}
                                    className="swiper-wrapper">
                                    {BlockchainTrendsData && BlockchainTrendsData.length > 0 && BlockchainTrendsData.map((data, index) => {
                                        return (
                                            <SwiperSlide key={`blockchain_trends_text_slide_box ${index}`} className="swiper-slide blockchain_trends_text_slide_box wow fadeInRight" data-wow-delay="0.3s">
                                                <h3>{data.heading}</h3>
                                                <p>{data.headingtext}</p>
                                                <p>{data.headingtext1}</p>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>

                            <div className="blockchain_trends_button_box d-flex justify-content-end wow zoomIn">
                                <div className="blockchain_trends_button_next">
                                    <lord-icon src="https://cdn.lordicon.com/iuenvtrd.json" trigger="hover" colors="primary:#ffffff,secondary:#ffffff"> </lord-icon>
                                </div>
                                <div className="blockchain_trends_button_prev">
                                    <lord-icon src="https://cdn.lordicon.com/iuenvtrd.json" trigger="hover" colors="primary:#ffffff,secondary:#ffffff"> </lord-icon>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="blockchain_trends_sessions d-flex justify-content-between relative">
                        <div className="sessions_list col-12 col-lg-5 wow fadeInLeft">
                            {/* <!-- <h2>Insightful Sessions</h2> --> */}
                            <h5>Present your blockchain & crypto solutions to investors, SMEs, enterprises and governments.</h5>
                            <p>Connect with prospective business partners in an exclusive innovation-focused event with an access to interactive sessions, networking areas, breakouts and meeting spaces.
                            </p>
                            <div className="a_btn a_btn_fill btn_orange">
                                {/* <Link to={'/'}>
                                    Become a Sponsor
                                </Link> */}
                                <a href="#">Become a Sponsor</a>
                            </div>
                        </div>
                        <div className="blockchain_trends_quotes col-12 col-lg-6 wow fadeInRight relative">
                            <div className="blockchain_trends_coins_otr wow zoomIn">
                                <div className="blockchain_trends_coins">
                                    <img data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-15}' className="img-fluid" src="/image/coins_icon1.png" alt="" />
                                </div>
                            </div>
                            <div className="blockchain_trends_quotes_icon">
                                <img className="img-fluid" src="/image/quotes_icon_org.png" alt="" />
                            </div>
                            <div className="blockchain_trends_quotes_slider swiper">
                                <Swiper slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={{
                                        nextEl: " .blockchain_trends_quotes_slider_next ",
                                        prevEl: " .blockchain_trends_quotes_slider_prev "
                                    }}
                                    scrollbar={{
                                        el: ".swiper-scrollbar",
                                        loop: true,
                                    }}

                                    // breakpoints={sliderForSingleBreakPoint}
                                    className="swiper-wrapper">
                                    {BlockchainSessionsData && BlockchainSessionsData.length > 0 && BlockchainSessionsData.map((data, index) => {
                                        return (

                                            <SwiperSlide key={`blockchain_trends_quotes_slide_item ${index}`} className="swiper-slide blockchain_trends_quotes_slide_item" >
                                                <div className="blockchain_trends_quote">
                                                    <h3> {data.startdiscription} <span>{data.innderdiscription}</span> {data.enddiscription}</h3>
                                                </div>
                                                <div className="blockchain_trends_quote_detail">
                                                    <div className="blockchain_trends_quote_detail_img">
                                                        <img className="img-fluid" src="/image/blockchain_trends_quote_detail_img.png" alt="" />
                                                    </div>
                                                    <div className="blockchain_trends_quote_detail_box">
                                                        <h4>{data.name}</h4>
                                                        <p>{data.position}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                                <div className="blockchain_trends_quotes_slider_btns">
                                    <div className="blockchain_trends_quotes_slider_next">
                                        <img className="img-fluid" src="/image/left_arrow_blue.png" alt="" />
                                    </div>
                                    <div className="blockchain_trends_quotes_slider_prev">
                                        <img className="img-fluid" src="/image/right_arrow_blue.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blockchain-cube-bottom wow zoomIn">
                    <span >
                        <img data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-15}' className="img-fluid" src="/image/cube-12.png" alt="" />
                    </span>
                </div>
            </section>
        </>
    )
}

export default BlockchainTrends;