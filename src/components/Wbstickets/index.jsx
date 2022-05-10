import React, { useEffect } from 'react';
import './wbstickets.css';
import { Tickets } from "../../data";
import { WhyAttendData } from '../../data';

const WbsTickets = () => {

    const Automoreless = (index) => {
        WhyAttendData.map((res, ind) => {
            if (ind !== index) {
                document.querySelector('.more_less_testi_input' + ind).checked = false;
            } else {
                document.querySelector('.more_less_testi_input' + index).checked = true;
            }
        })
    }

    return (
        <div className="parellax_bg relative parallax-window w2 page-section" data-parallax="scroll" data-image-src="/image/parellax_bg_img.png" id="bookticketslink">
            <div className="container">
                <section className="tickets_wbs">
                    <div className="tickets_wbs_title wow fadeInUp" data-wow-delay="0.2s">
                        <h2>TICKETS TO WBS DUBAI</h2>
                    </div>
                    <div className="tickets_wbs_list d-flex align-items-start">
                        {Tickets && Tickets.length > 0 && Tickets.map((data, index) => {
                            return (
                                <div key={`tickets_wbs_price_box ${index}`} className="tickets_wbs_price_box col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={data.time}>
                                    <div class="tickets_wbs_price_box_bg" >
                                        <div class="tickets_wbs_price_box_top">
                                            <div class="business_icon_1 wow zoomIn">
                                                <span data-parallax='{"x": 20, "y": 30, "scale": 0.9}'>
                                                    <img class="img-fluid" src={data.img1} alt="" />
                                                </span>
                                            </div>
                                            <div class="business_icon_2 wow zoomIn">
                                                <span data-parallax='{"x": -30, "y": -20, "scale": 1.1}'>
                                                    <img class="img-fluid" src={data.img2} alt="" />
                                                </span>
                                            </div>
                                            <div class="business_icon_3 wow zoomIn">
                                                <span data-parallax='{"x": 15, "y": -15, "scale": 1.1}'>
                                                    <img class="img-fluid" src={data.img3} alt="" />
                                                </span>
                                            </div>
                                            <div className="tickets_wbs_price_box_top_text">
                                                <h5 className="russo-one">{data.title}</h5>
                                                <h3>{data.price}</h3>
                                                <div className="a_btn a_btn_fill btn_white">
                                                    <a href="#">Book Tickets</a>
                                                </div>
                                                <p>{data.date}</p>
                                            </div>
                                        </div>
                                        <div className="tickets_wbs_price_points">
                                            <span class="top_shape"></span>
                                            <div className="tickets_wbs_price_point_item">
                                                <ul>
                                                    {data.include && data.include.length > 0 && data.include.map((data, index) => {
                                                        return (
                                                            <li className="right_point" key={index}>{data}</li>
                                                        )
                                                    })}
                                                    {data.exclude && data.exclude.length > 0 && data.exclude.map((data, index) => {
                                                        return (
                                                            <li className="cancel_point" key={index}>{data}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className="why_attend">
                    <div className="why_attend_title  wow fadeInUp">
                        <h2>WHY ATTEND?</h2>
                    </div>
                    <div className="col-12 col-md-8 col-lg-10 mx-auto">
                        <div className="why_attend_list row">
                            {WhyAttendData && WhyAttendData.length > 0 && WhyAttendData.map((data, index) => {
                                return (
                                    <div className="why_attend_box col-12 col-md-6 wow fadeInUp" data-wow-delay={data.time}>
                                        <div className="why_attend_box_bg">

                                            <div className="why_attend_box_top d-flex align-items-center">
                                                <div className="why_attend_box_icon d-flex align-items-center justify-content-center">
                                                    <img className="img-fluid" src={data.image} alt="" />
                                                </div>
                                                <h3>{data.title}</h3>
                                            </div>
                                            <input type="checkbox" id={`read-more-box${(index)}`} onClick={() => Automoreless(index)} className={`more_less_testi_input more_less_testi_input${index}`} name="accordion-footer-item" />
                                            <div className="content-box">
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>
                                                <p>{data.discription} </p>

                                            </div>
                                            <label for={`read-more-box${(index)}`} className="more_less_testi_more_btn"></label>


                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
            <div class="parellax-cube-top wow zoomIn">
                <span >
                    <img data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":15}' class="img-fluid" src="/image/cube-13.png" alt="" />
                </span>
            </div>
        </div>

    )
}

export default WbsTickets;