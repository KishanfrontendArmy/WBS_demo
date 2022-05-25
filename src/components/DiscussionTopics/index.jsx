import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './discussiontopic.css';
import { DiscussionTopicData } from '../../data';

const DiscussionTopic = () => {
    const sliderForSingleBreakPoint = {
        320: {
            slidesPerView: 1,
            autoHeight: true,
        },
        480: {
            slidesPerView: 2,
            autoHeight: false,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1025: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        }
    }
    const brekpoint = {
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:3
        },
        1025:{
            items:4
        },
        1400:{
            items:5
        }
    }
    return (

        <section className="discussion_topics page-section">
            <div className="container">
                <div className="discussion_topics_inr">
                    <div className="title_box_small wow fadeInUp">
                        <h2>DISCUSSION TOPICS</h2>
                    </div>
                    <div className="discussion_topics_slider swiper">
                        <OwlCarousel className='owl-carousel owl-theme' 
                            loop={true}
                            margin={14} 
                            nav={false}
                            navigation={false}
                            responsive={brekpoint}
                            autoPlay={true}
                        >
                            {DiscussionTopicData?.map((data, index) => {
                                return (
                                    <div className="discussion_topics_slide_item d-flex align-items-center justify-content-start flex-column wow fadeInRight" data-wow-delay={data.time} >
                                        <div className="discussion_topics_img">
                                            <img className='img-fluid' data-parallax='{"scale":1.2}' src={data.image} alt="" />
                                        </div>
                                        <p>{data.discription}</p>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DiscussionTopic