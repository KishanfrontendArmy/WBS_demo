import React from 'react';
import './mediacoverage.css';
import { ShowCaseData } from "../../data";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const MediaCoverage = () => {
    const [focus, setFocus] = React.useState(false);

    return (

        <section className="media_coverage relative page-section">
            <div className="media_single_quabe_3 wow zoomIn">
                <img className="img-fluid" data-parallax='{"scale": 0.9, "x": 30, "y": 0, "rotateZ":30}' src="/image/single_quabe_3.png" alt="" />
                <canvas id="d"></canvas>
            </div>

            <div className="container">
                <div className="title_box_small wow fadeInUp relative">
                    <h2>MEDIA SHOWCASE AND COVERAGE</h2>
                    <div className="media_coins_icon wow zoomIn">
                        <img className="img-fluid" data-parallax='{"scale": 0.9, "x": 30, "y": 0, "rotateZ":30}' src="/image/coins_icon.png" alt="" />
                    </div>
                </div>
                <div className="media_coverage_list d-flex align-items-start justify-content-center relative" id="counter">
                    {ShowCaseData && ShowCaseData.length > 0 && ShowCaseData.map((data, index) => {
                        return (
                            <div key={`media_coverage_box ${index}`} className="media_coverage_box col-auto wow zoomIn">
                                <div className="media_number">
                                    <strong className="russo-one"> <CountUp
                                        start={focus ? 0 : null}
                                        end={data.title}
                                        duration={2}
                                        redraw={true}
                                    >
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {
                                                if (isVisible) { setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp><span>{data.sign}</span></strong>
                                </div>
                                <p>{data.description}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </section>



    )
}

export default MediaCoverage;