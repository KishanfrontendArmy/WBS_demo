import React from 'react';
import './discussiontopic.css';
import { DiscussionTopicData } from '../../data';
import "./swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);


const DiscussionTopic = () => {
    return (

        <section className="discussion_topics page-section">
            <div className="container">
                <div className="discussion_topics_inr">
                    <div className="title_box_small wow fadeInUp">
                        <h2>DISCUSSION TOPICS</h2>
                    </div>
                    <div className="discussion_topics_slider swiper">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={14}
                            loop={true}
                            // loop={true}
                            // autoplay={{
                            //     delay: 3500,
                            //     disableOnInteraction: false,
                            // }}
                            pagination={{
                                el: ".discussion_topics_slider .swiper-pagination",
                                dynamicBullets: true,
                            }}
                            className="swiper-wrapper">
                            {DiscussionTopicData && DiscussionTopicData.length > 0 && DiscussionTopicData.map((data, index) => {
                                return (
                                    <SwiperSlide key={`discussion_topics_slide_item ${index}`}>
                                        <div className="swiper-slide discussion_topics_slide_item d-flex align-items-center justify-content-center flex-column wow fadeInRight" data-wow-delay={data.time} >
                                            <div className="discussion_topics_img">
                                                <img className='img-fluid' data-parallax='{"scale":1.2}' src={data.image} alt="" />
                                            </div>
                                            <p>{data.discription}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>



    )
}
export default DiscussionTopic