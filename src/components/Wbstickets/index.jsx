import React from 'react';
import './wbstickets.css';
import { Tickets } from "../../data";
import { WhyAttendData } from '../../data';

const WbsTickets = () => {
    return (
        <div className="parellax_bg">
            <div className="container">
                <section className="tickets_wbs">
                    <div className="tickets_wbs_title">
                        <h2>TICKETS TO WBS DUBAI</h2>
                    </div>
                    <div className="tickets_wbs_list d-flex align-items-start">
                        {Tickets && Tickets.length > 0 && Tickets.map((data, index) => {
                            return (
                                <div key={`tickets_wbs_price_box ${index}`} className="tickets_wbs_price_box">
                                    <div className="tickets_wbs_price_box_top">
                                        <div className="tickets_wbs_price_box_top_text">
                                            <h5 className="russo-one">{data.title}</h5>
                                            <h3>{data.price}</h3>
                                            <div className="a_btn a_btn_fill btn_white">
                                                <a href="javascript:void(0)">Book Tickets</a>
                                            </div>
                                            <p>{data.date}</p>
                                        </div>
                                    </div>
                                    <div className="tickets_wbs_price_points">
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
                            )
                        })}
                    </div>
                </section>
                <section className="why_attend">
                    <div className="why_attend_title">
                        <h2>WHY ATTEND?</h2>
                    </div>
                    <div className="why_attend_list">
                        {WhyAttendData && WhyAttendData.length > 0 && WhyAttendData.map((data, index) => {
                            return (
                                <div key={`why_attend_box_icon ${index}`} className="why_attend_box">
                                    <div className="why_attend_box_top d-flex align-items-center">
                                        <div className="why_attend_box_icon d-flex align-items-center justify-content-center">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <h3>{data.title}</h3>
                                    </div>
                                    <p>{data.discription} <a href={data.link} target="_blank" rel="noopener noreferrer">{`Read more >>`}</a></p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>

    )
}

export default WbsTickets;