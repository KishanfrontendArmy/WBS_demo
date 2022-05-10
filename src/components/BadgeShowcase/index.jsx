import React from 'react';
import './badgeshowcase.css';
import { Badges } from "../../data";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const BadgeShowCase = () => {
    const [focus, setFocus] = React.useState(false);

    return (


        <section className="media_coverage_img_sec d-flex align-items-center justify-content-end flex-wrap page-section" id="medialink">
            <div className="media_coverage_left">
                <div className="title_box wow fadeInUp">
                    <h2>MEDIA <br />SHOWCASE<br /> AND COVERAGE</h2>
                </div>
                <div className="media_coverage_img_sec_list d-flex align-items-center flex-wrap" id="media_sec_counter">
                    {Badges.map((data, index) => {
                        return (
                            <div key={index} className="media_coverage_item wow zoomIn" data-wow-delay={data.time}>
                                <div className="number_box">
                                    <strong><CountUp
                                        start={focus ? 0 : null}
                                        end={data.count}
                                        duration={2}
                                        redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {
                                                if (isVisible) { setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp><span>{data.total}</span></strong>
                                </div>
                                <p>{data.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="media_coverage_right  wow fadeInRight">
                <img className="img-fluid" src="/image/media_coverage_img.jpg" alt="" />
            </div>
        </section>


    )
}

export default BadgeShowCase