import React from 'react';
import './blockchaintrends.css';
import "./swiper.min.css";
import { BlockchainTrendsData, BlockchainSessionsData } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, Autoplay]);

const BlockchainTrends = () => {
    return (
        <>

            <section className="blockchain_trends">
                <div className="container">
                    <div className="title_box">
                        <h2>Be the first <br />to catch the wind of <br /><strong className="text_org">emerging Blockchain trends</strong></h2>
                    </div>
                    <div className="blockchain_trends_slider  d-flex align-items-center flex-wrap">
                        <div className="blockchain_trends_image_slider swiper">
                            <Swiper slidesPerView={1}
                                navigation={{
                                    nextEl: " .blockchain_trends_button_next ",
                                    prevEl: " .blockchain_trends_button_prev "
                                }}
                                scrollbar={{
                                    el: ".swiper-scrollbar",
                                    draggable: true,
                                }}

                                // breakpoints={sliderForSingleBreakPoint}
                                className="swiper-wrapper">
                                {BlockchainTrendsData && BlockchainTrendsData.length > 0 && BlockchainTrendsData.map((data, index) => {
                                    return (

                                        <SwiperSlide key={`blockchain_trends_image_slide_box ${index}`} className="swiper-slide blockchain_trends_image_slide_box" >
                                            <img src={data.image} alt="" />
                                            <div className="session_title_img">
                                                <img src={data.textimage} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                        <div className="blockchain_trends_text_slider_otr">
                            <div thumbsslider="" className="blockchain_trends_text_slider swiper">
                                <Swiper slidesPerView={1}
                                    navigation={{
                                        nextEl: " .blockchain_trends_button_next ",
                                        prevEl: ".blockchain_trends_button_prev"
                                    }}
                                    scrollbar={{
                                        el: ".swiper-scrollbar",
                                        draggable: true,
                                    }}
                                    speed={1000}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true,
                                    }}
                                    // breakpoints={sliderForSingleBreakPoint}
                                    className="swiper-wrapper">
                                    {BlockchainTrendsData && BlockchainTrendsData.length > 0 && BlockchainTrendsData.map((data, index) => {
                                        return (
                                            <SwiperSlide key={`blockchain_trends_text_slide_box ${index}`} className="swiper-slide blockchain_trends_text_slide_box" >
                                                <h3>{data.heading}</h3>
                                                <p>{data.headingtext}</p>
                                                <p>{data.headingtext1}</p>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>

                            <div className="blockchain_trends_button_box d-flex justify-content-end">
                                <div className="blockchain_trends_button_prev">
                                    <img src="/image/left_arrow_white.png" alt="" />
                                </div>
                                <div className="blockchain_trends_button_next">
                                    <img src="/image/right_arrow_white.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="blockchain_trends_sessions d-flex justify-content-between">
                        <div className="sessions_list col-5">
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
                        <div className="blockchain_trends_quotes col-6">
                            <div className="blockchain_trends_quotes_icon">
                                <img src="/image/quotes_icon_org.png" alt="" />
                            </div>
                            <div className="blockchain_trends_quotes_slider swiper">
                                <Swiper slidesPerView={1}
                                    navigation={{
                                        nextEl: " .blockchain_trends_quotes_slider_next ",
                                        prevEl: " .blockchain_trends_quotes_slider_prev "
                                    }}
                                    scrollbar={{
                                        el: ".swiper-scrollbar",
                                        draggable: true,
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
                                                        <img src="/image/blockchain_trends_quote_detail_img.png" alt="" />
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
                                        <img src="/image/left_arrow_blue.png" alt="" />
                                    </div>
                                    <div className="blockchain_trends_quotes_slider_prev">
                                        <img src="/image/right_arrow_blue.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlockchainTrends;