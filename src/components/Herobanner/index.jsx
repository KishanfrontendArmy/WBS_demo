import React from 'react';
import './herobanner.css';

const Herobanner = () => {
    return (
        <section className="hero_banner">
            <div className="hero_banner_inr">
                <div className="hero_banner_video">
                    <img src="/image/hero_banner.png" alt="" />
                </div>
                <div className="hero_banner_text">
                    <div className="hero_banner_text_banner">
                        <div className="hero_banner_event_presents_logo">
                            <img src="/image/hero_banner_presents_box.jpg" alt="" />
                        </div>
                        <div className="hero_banner_event_sponsor_logo">
                            <img src="/image/hero_banner_sponser_box.jpg" alt="" />
                        </div><div className="hero_banner_event_logo">
                            <img src="/image/hero_banner_event_img.png" alt="" />
                        </div>
                        <div className="hero_banner_event_co_host_logo">
                            <img src="/image/hero_banner_cohosted_box.jpg" alt="" />
                        </div>
                        <div className="hero_banner_event_poweredby_logo">
                            <img src="/image/hero_banner_powerdby_box.jpg" alt="" />
                        </div>

                    </div>
                    <div className="hero_banner_text_inr d-flex flex-wrap align-items-center">
                        <div className="hero_banner_text_left">
                            <h1>CRYPTO <sup>.</sup> DEFI <sup>.</sup> NFT <sup>.</sup> METAVERSE</h1>
                        </div>
                        <div className="hero_banner_text_right d-flex flex-column col-3">
                            <div className="add_calender">
                                <a href="javascript:void(0)" className="text_link text_link_org">Add to Calendar</a>
                            </div>
                            <div className="a_btn a_btn_bdr btn_org_bdr">
                                <a href="javascript:void(0)">Enquire Now</a>
                            </div>
                            <div className="a_btn a_btn_fill btn_orange">
                                <a href="javascript:void(0)">Book Tickets</a>
                            </div>
                            <small>Reserve your tickets for upcoming events at special prices</small>
                            <div className="fill_img_box">
                                <img src="/image/limited seats.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herobanner