import React from 'react';
import './eventmanage.css';
import { EventManageData } from '../../data';

const EventManage = () => {
    return (
        <section className="event_manage_by">
            <div className="container">
                {EventManageData && EventManageData.length > 0 && EventManageData.map((data, index) => {
                    return (

                        <div key={`event_manage_by ${index}`}>
                            <div className="event_manage_by_title">
                                <h2 className="d-flex align-items-center justify-content-center">Event manage by
                                    <div className="trescon_logo">
                                        <img src={data.headingimage} alt="" />
                                    </div>
                                </h2>
                            </div>
                            <div className="event_manage_by_inr d-flex align-items-center justify-content-between flex-wrap">
                                <div className="event_manage_by_left col-6">
                                    <img src={data.centerimage} alt="" />
                                </div>
                                <div className="event_manage_by_right col-6 ps-5">
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
        </section>

    )
}

export default EventManage