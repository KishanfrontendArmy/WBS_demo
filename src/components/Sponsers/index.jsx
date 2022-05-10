import React from 'react';
import './sponser.css';
import { SponserData } from '../../data';

const Sponser = () => {
    return (
        <section className="sponsors page-section" id="sponsorslink">
            <div className="sponsors_inr">
                <div className="title_box_small wow fadeInUp">
                    <h2>SPONSORS</h2>
                </div>
                {SponserData && SponserData.length > 0 && SponserData.map((data, index) => {
                    return (
                        <div key={`sponsors_item ${index}`} className="sponsors_item wow fadeInUp">
                            <img className="img-fluid" src={data.image} alt="" />
                        </div>

                    )
                })}
            </div>
        </section>

    )
}

export default Sponser