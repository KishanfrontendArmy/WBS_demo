import React, { useEffect, useState } from 'react';
import './whoattend.css';
import $ from "jquery";
import { blockchainSummit } from '../../data';

const WhoAttend = () => {
    const [selected, setSelected] = useState(blockchainSummit[0]);

    useEffect(() => {
        $(".who_attends_tabs_box .nav-item button").click(function () {
            var position = $(this).parent().position();
            console.log(position);
            var width = $(this).parent().width();
            $(".who_attends_tabs_box .slider").css({ "left": + position.left, "width": width });
        });
        var actWidth = $(".who_attends_tabs_box .nav-item").find(".active").parent("li").width();
        var actPosition = $(".who_attends_tabs_box .nav-item .active").position();
        $(".who_attends_tabs_box .slider").css({ "left": + actPosition?.left, "width": actWidth });
    }, []);
    const handleSelection = (value) => {
        setSelected(value);
    }
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
                        <div class="slider"></div>
                        {blockchainSummit?.map((res, ind) => (
                            <li className="nav-item" role="presentation ">
                                <button type="button" onClick={() => handleSelection(res)} className={selected.name === res.name ? "nav-link tabbs_button active" : "nav-link tabbs_button"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                    {res.name}
                                </button>

                            </li>
                        ))}

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {selected.type === 0 &&
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="who_attends_sector p-0 d-flex align-items-center justify-content-between">
                                    {selected.child?.map((data, index) => {
                                        return (
                                            <div key={`who_attends_sector_item ${index}`} className="who_attends_sector_item" data-wow-delay={data.time}>
                                                <small> {data.Sector}</small>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        }
                        {selected.type === 1 &&
                            <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                <div className="who_attends_points">
                                    <ul className="d-flex align-items-center justify-content-between flex-wrap">
                                        {selected.child?.map((data, index) => {
                                            return (
                                                <li key={`who_attends_points ${index}`} className="col-12 col-sm-6 col-md-4">  {data.people}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhoAttend