import React from 'react';
import './discussiontopic.css';
import "./swiper.min.css";
import { DiscussionTopicData } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);


const DiscussionTopic = () => {
    return (

        <section className="discussion_topics">
            <div className="container">
                <div className="discussion_topics_inr">
                    <div className="title_box_small">
                        <h2>DISCUSSION TOPICS</h2>
                    </div>
                    <div className="discussion_topics_slider swiper">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={14}
                            pagination={{
                                el: ".discussion_topics_slider .swiper-pagination",
                                dynamicBullets: true,
                            }}
                            className="swiper-wrapper">
                            {DiscussionTopicData && DiscussionTopicData.length > 0 && DiscussionTopicData.map((data, index) => {
                                return (
                                    <SwiperSlide key={`discussion_topics_slide_item ${index}`}>
                                        <div className="swiper-slide discussion_topics_slide_item d-flex align-items-center justify-content-center flex-column" >
                                            <div className="discussion_topics_img">
                                                <img src={data.image} alt="" />
                                            </div>
                                            <p>{data.discription}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>



    )
}
export default DiscussionTopic