import React from 'react';
import './mediacoverage.css';
import { ShowCaseData } from "../../data";

const MediaCoverage = () => {
    return (

        <section className="media_coverage">
            <div className="container">
                <div className="title_box_small">
                    <h2>MEDIA SHOWCASE AND COVERAGE</h2>
                </div>

                <div className="media_coverage_list d-flex align-items-center justify-content-center">
                    {ShowCaseData && ShowCaseData.length > 0 && ShowCaseData.map((data, index) => {
                        return (
                            <div key={`media_coverage_box ${index}`} className="media_coverage_box col">
                                <strong className="russo-one">{data.title}<span>{data.sign}</span></strong>
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