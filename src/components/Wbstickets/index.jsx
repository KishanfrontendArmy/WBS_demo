import React, { useEffect } from 'react';
import './wbstickets.css';
import { Tickets } from "../../data";
import { WhyAttendData } from '../../data';

const WbsTickets = () => {

    const Automoreless = (index, checked) => {
        console.log(checked)
        WhyAttendData.map((res, ind) => {
            if (ind !== index) {
                document.querySelector('.more_less_testi_input' + ind).checked = false;
            } else {
                if (checked) {
                    document.querySelector('.more_less_testi_input' + index).checked = true;
                } else {
                    document.querySelector('.more_less_testi_input' + index).checked = false;
                }
            }
        })
    }
    return (
        <div className="parellax_bg relative  w2 page-section" id="bookticketslink">
            <div className="container">
                <section className="tickets_wbs">
                    <div className="tickets_wbs_title wow fadeInUp" data-wow-delay="0.2s">
                        <h2>TICKETS TO WBS DUBAI</h2>
                    </div>
                    <div className="tickets_wbs_list row align-items-start">
                        <div className="tickets_wbs_price_box col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="tickets_wbs_price_box_bg">
                                <div className="tickets_wbs_price_box_top">
                                    <div className="standard_icon_1 wow zoomIn">
                                        <span data-parallax='{"x": 50, "y": -30, "scale": 0.9}'>
                                            <img src="/image/standicon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="standard_icon_2 wow zoomIn">
                                        <span data-parallax='{"x": -30, "y": 20, "scale": 1.1}'>
                                            <img src="/image/standicon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="standard_icon_3 wow zoomIn">
                                        <span data-parallax='{"x": 30, "y": -30, "scale": 1.1}'>
                                            <img className="img-fluid" src="/image/cube-fill.png" alt="" />
                                        </span>
                                    </div>

                                    <div className="tickets_wbs_price_box_top_text">
                                        <h5 className="russo-one">STANDARD</h5>
                                        <h3>US$ 295</h3>
                                        <div className="a_btn a_btn_fill btn_white">
                                            <a href="#.">Book Tickets</a>
                                        </div>
                                        <p>Valid till February 15, 2022</p>
                                    </div>
                                </div>
                                <div className="tickets_wbs_price_points">
                                    <span className="top_shape"></span>
                                    <div className="tickets_wbs_price_point_item">
                                        <ul>
                                            <li className="right_point">Conference access</li>
                                            <li className="right_point">Executive luncheons on both days</li>
                                            <li className="right_point">Networking coffee breaks</li>
                                            <li className="right_point">Exhibition area</li>
                                            <li className="cancel_point">After-party access</li>
                                            <li className="cancel_point">VIP and speaker lounge access</li>
                                            <li className="cancel_point">Access to pre-event investor dinner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tickets_wbs_price_box col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="tickets_wbs_price_box_bg">
                                <div className="tickets_wbs_price_box_top">
                                    <div className="business_icon_1 wow zoomIn">
                                        <span data-parallax='{"x": 20, "y": 30, "scale": 0.9}'>
                                            <img className="img-fluid" src="/image/business_icon1.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="business_icon_2 wow zoomIn">
                                        <span data-parallax='{"x": -30, "y": -20, "scale": 1.1}'>
                                            <img className="img-fluid" src="/image/business_icon2.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="business_icon_3 wow zoomIn">
                                        <span data-parallax='{"x": 15, "y": -15, "scale": 1.1}'>
                                            <img className="img-fluid" src="/image/business_icon3.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="tickets_wbs_price_box_top_text">
                                        <h5 className="russo-one">BUSINESS</h5>
                                        <h3>US$ 595</h3>
                                        <div className="a_btn a_btn_fill btn_white">
                                            <a href="#.">Book Tickets</a>
                                        </div>
                                        <p>Valid till February 15, 2022</p>
                                    </div>
                                </div>
                                <div className="tickets_wbs_price_points">
                                    <span className="top_shape"></span>
                                    <div className="tickets_wbs_price_point_item">
                                        <ul>
                                            <li className="right_point">Conference access</li>
                                            <li className="right_point">Executive luncheons on both days</li>
                                            <li className="right_point">Networking coffee breaks</li>
                                            <li className="right_point">Exhibition area</li>
                                            <li className="right_point">After-party access</li>
                                            <li className="cancel_point">VIP and speaker lounge access</li>
                                            <li className="cancel_point">Access to pre-event investor dinner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tickets_wbs_price_box col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="tickets_wbs_price_box_bg">
                                <div className="tickets_wbs_price_box_top">
                                    <div className="vip_icon_1 wow zoomIn">
                                        <span data-parallax='{"x": 30, "y": -30, "scale": 0.9}'>
                                            <img className="img-fluid" src="/image/vip-icon.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="vip_icon_2 wow zoomIn">
                                        <span data-parallax='{"x": -30, "y": 20, "scale": 1.1}'>
                                            <img className="img-fluid" src="/image/vip-icon.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="vip_icon_3 wow zoomIn">
                                        <span data-parallax='{"x": 30, "y": -30, "scale": 1.1}'>
                                            <img className="img-fluid" src="/image/vip-icon.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="tickets_wbs_price_box_top_text">
                                        <h5 className="russo-one">VIP</h5>
                                        <h3>US$ 995</h3>
                                        <div className="a_btn a_btn_fill btn_white">
                                            <a href="#.">Book Tickets</a>
                                        </div>
                                        <p>Valid till February 15, 2022</p>
                                    </div>
                                </div>
                                <div className="tickets_wbs_price_points">
                                    <span className="top_shape"></span>
                                    <div className="tickets_wbs_price_point_item">
                                        <ul>
                                            <li className="right_point">Conference access</li>
                                            <li className="right_point">Executive luncheons on both days</li>
                                            <li className="right_point">Networking coffee breaks</li>
                                            <li className="right_point">Exhibition area</li>
                                            <li className="right_point">After-party access</li>
                                            <li className="right_point">VIP and speaker lounge access</li>
                                            <li className="right_point">Access to pre-event investor dinner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why_attend">
                    <div className="why_attend_title wow fadeInUp">
                        <h2>WHY ATTEND?</h2>
                    </div>

                    <div className="col-12 col-xl-12 col-xxl-10 mx-auto">
                        <div className="why_attend_list row">
                            {WhyAttendData && WhyAttendData.length > 0 && WhyAttendData.map((data, index) => {
                                return (
                                    <div key={`why_attend_box ${index}`} className="why_attend_box col-12 col-md-6 wow fadeInUp" data-wow-delay={data.time}>
                                        <div className="why_attend_box_bg">

                                            <div className="why_attend_box_top d-flex align-items-center">
                                                <div className="why_attend_box_icon d-flex align-items-center justify-content-center">
                                                    <img className="img-fluid" src={data.image} alt="" />
                                                </div>
                                                <h3>{data.title}</h3>
                                            </div>
                                            <input type="checkbox" id={`read-more-box${(index)}`} onClick={(e) => Automoreless(index, e.target.checked)} className={`more_less_testi_input more_less_testi_input${index}`} name="accordion-footer-item" />
                                            <div className="content-box">
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>

                                            </div>
                                            <label htmlFor={`read-more-box${(index)}`} className="more_less_testi_more_btn"></label>


                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </section>
            </div>
            <div className="parellax-cube-top wow zoomIn">
                <span data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":15}' style={{ display: "inline-block" }}>
                    <img className="img-fluid" src="/image/cube-13.png" alt="" />
                </span>
            </div>
        </div>
    )
}

export default WbsTickets;