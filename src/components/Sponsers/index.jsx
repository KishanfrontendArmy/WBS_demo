import React from 'react';
import './sponser.css';
import { SponserData } from '../../data';

const Sponser = () => {
    return (
        <section className="sponsors">
            <div className="sponsors_inr">
                <div className="title_box_small">
                    <h2>SPONSORS</h2>
                </div>
                {SponserData && SponserData.length > 0 && SponserData.map((data, index) => {
                    return (
                        <div key={`sponsors_item ${index}`} className="sponsors_item">
                            <img src={data.image} alt="" />
                        </div>

                    )
                })}
            </div>
        </section>

    )
}

export default Sponser