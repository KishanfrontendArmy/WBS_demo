import React from 'react';
import './badgeshowcase.css';
import { Badges } from "../../data";

const BadgeShowCase = () => {
    return (


        <section className="media_coverage_img_sec d-flex align-items-center justify-content-end flex-wrap">
            <div className="media_coverage_left">
                <div className="title_box">
                    <h2>MEDIA <br />SHOWCASE<br /> AND COVERAGE</h2>
                </div>
                <div className="media_coverage_img_sec_list d-flex align-items-center flex-wrap">
                    {Badges.map((data, index) => {
                        return (
                            <div key={index} className="media_coverage_item">
                                <strong>{data.count}<span>{data.total}</span></strong>
                                <p>{data.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="media_coverage_right">
                <img src="/image/media_coverage_img.jpg" alt="" />
            </div>
        </section>


    )
}

export default BadgeShowCase