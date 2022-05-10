import React from 'react';
import './eventmanage.css';
import { EventManageData } from '../../data';

const EventManage = () => {
    return (
        <section className="event_manage_by relative">
            <div className="container">
                {EventManageData && EventManageData.length > 0 && EventManageData.map((data, index) => {
                    return (

                        <div className='row' key={`event_manage_by ${index}`}>
                            <div className="event_manage_by_title col-md-9 offset-1 ps-5">
                                <h2 className="d-flex align-items-center wow fadeInUp">Event manage by
                                    <div className="trescon_logo">
                                        <img className="img-fluid" src={data.headingimage} alt="" />
                                    </div>
                                </h2>
                            </div>
                            <div className="event_manage_by_inr d-flex align-items-center justify-content-between flex-wrap">
                                <div className="event_manage_by_left col-12 col-xl-5 offset-1 wow fadeInLeft">
                                    <img src={data.centerimage} alt="" />
                                </div>
                                <div className="event_manage_by_right col-12 col-xl-6 wow fadeInRight">
                                    <h3>{data.heading}</h3>
                                    <p>{data.text1}</p>

                                    <p>{data.text2}</p>

                                    <p>{data.text3}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="event_manage_top_right_icon wow zoomIn">
                <span data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-30}' >
                    <img className="img-fluid" src="/image/cube-6-png.png" alt="" />
                </span>
            </div>
            <div className="event_manage_left_icon wow zoomIn">
                <span data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-30}'>
                    <img className="img-fluid" src="/image/cube-6-png.png" alt="" />
                </span>
            </div>
        </section>

    )
}

export default EventManage