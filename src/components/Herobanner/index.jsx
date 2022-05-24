import React from 'react';
import './herobanner.css';
import { headerMenu } from '../../data'

const Herobanner = () => {
    return (
        <section className="hero_banner parallax-window w1 page-section" data-parallax="scroll" data-image-src="/image/hero_banner-new1.jpg" id="bannerlink">
            <div className="hero_banner_inr">
                <div className="hero_banner_video">
                    <img className="img-fluid" src="/image/hero_banner.png" alt="" />
                </div>
                <div className="hero_banner_text">
                    <div className="container">
                        <div className="hero_banner_text_inr row">
                            <div className="hero_banner_text_banner col-12 col-md-8 mx-auto">
                                <div className="hero_banner_event_presents_logo wow fadeInDown" data-wow-delay=".4s">
                                    <img className="img-fluid" data-parallax='{"x": 0, "y": -30}' src="/image/hero_banner_presents_box.jpg" alt="" />
                                </div>
                                <div className="hero_banner_event_sponsor_logo wow fadeInLeft" data-wow-delay=".6s">
                                    <img className="img-fluid" data-parallax='{"x": -30, "y": 0}' src="/image/hero_banner_sponser_box.jpg" alt="" />
                                </div>
                                <div className="hero_banner_event_logo wow zoomIn" data-wow-delay=".2s">
                                    <img className="img-fluid" data-parallax='{"scale":0.8}' src="/image/hero_banner_event_img.png" alt="" />
                                </div>
                                <div className="hero_banner_event_co_host_logo wow fadeInRight" data-wow-delay=".8s">
                                    <img className="img-fluid" data-parallax='{"x": 30, "y": 0}' src="/image/hero_banner_cohosted_box.jpg" alt="" />
                                </div>
                                <div className="hero_banner_event_poweredby_logo wow fadeInUp" data-wow-delay="1s">
                                    <img className="img-fluid" data-parallax='{"x": 0, "y": 30}' src="/image/hero_banner_powerdby_box.jpg" alt="" />
                                </div>
                            </div>
                            <div className="hero_banner_text_inr d-flex flex-wrap align-items-start row ">
                                <div className="hero_banner_text_left col-12 col-md-6 offset-md-2 py-2 px-0 me-3 wow fadeInLeft">
                                    <h1>CRYPTO <sup>.</sup> DEFI <sup>.</sup> NFT <sup>.</sup> METAVERSE</h1>
                                </div>
                                <div className="hero_banner_text_right d-flex flex-column col-12 col-md-2 ms-4 wow fadeInRight">
                                    <div className="add_calender">
                                        <div className="dropdown">
                                            <a className="text_link text_link_org dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                Add to Calendar
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                <li>
                                                    <a href="#." download="" className="dropdown-item">
                                                        <span className="fab fa-apple"></span>Apple
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#." download="" className="dropdown-item">
                                                        <span className="fab fa-google"></span>
                                                        Google
                                                        <span className="stats">(online)</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#." download="" className="dropdown-item">
                                                        <span className="fas fa-envelope"></span>
                                                        Outlook
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="a_btn a_btn_bdr btn_org_bdr">
                                        <a href={headerMenu.enquire.url} target="_blank" rel="noreferrer">Enquire Now</a>
                                    </div>
                                    <div className="a_btn a_btn_fill btn_orange">
                                        <a href="#bookticketslink">Book Tickets</a>
                                    </div>
                                    <small>Reserve your tickets for upcoming events at special prices</small>
                                    <div className="fill_img_box">
                                        <img className="img-fluid" src="/image/limited seats.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herobanner