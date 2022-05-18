import React, { useEffect, useState } from 'react';
import './whoattend.css';
import $ from "jquery";
import { WhoAttendData, WhoAttendPeopleData } from '../../data';

const WhoAttend = () => {
    useEffect(() => {
        $(".who_attends_tabs_box .nav-tabs a").click(function () {
            var position = $(this).parent().position();
            var width = $(this).parent().width();
            $(".who_attends_tabs_box .slider").css({ "left": + position.left, "width": width });
        });
        var actWidth = $(".who_attends_tabs_box .nav-tabs").find(".active").parent("li").width();
        var actPosition = $(".who_attends_tabs_box .nav-tabs .active").position();
        $(".who_attends_tabs_box .slider").css({ "left": + actPosition?.left, "width": actWidth });
    }, []);
    return (
        <section className="who_attends">
            <div className="container">
                <div className="who_attends_inr ">
                    <div className="title_box_small wow fadeInUp">
                        <h2>WHO ATTENDS WORLD BLOCKCHAIN SUMMIT</h2>
                    </div>
                    <p className="wow fadeInUp">Meet influential thought leaders, innovative solution providers and industry peers - all under one roof</p>

                </div>

                <div className="who_attends_tabs_box">
                    <ul className="who_attends_sector nav nav-pills d-flex justify-content-center" id="pills-tab" role="tablist">

                        <li className="nav-item" role="presentation ">
                            <button className="nav-link tabbs_button active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                SECTOR
                                <div class="slider"></div>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tabbs_button" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">PROFILE</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className="who_attends_sector p-0 d-flex align-items-center justify-content-between">
                                {WhoAttendData && WhoAttendData.length > 0 && WhoAttendData.map((data, index) => {
                                    return (
                                        <div key={`who_attends_sector_item ${index}`} className="who_attends_sector_item" data-wow-delay={data.time}>
                                            <small> {data.Sector}</small>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <div className="who_attends_points">
                                <ul className="d-flex align-items-center justify-content-between flex-wrap">
                                    {WhoAttendPeopleData && WhoAttendPeopleData.length > 0 && WhoAttendPeopleData.map((data, index) => {
                                        return (
                                            <li key={`who_attends_points ${index}`} className="col-12 col-sm-6 col-md-4">  {data.people}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhoAttend