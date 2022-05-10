import React, { useState } from 'react';
import './speaker.css';
import { SpeakerData } from '../../data';
import { SpeakermodalData } from '../../data';

const Speaker = () => {
    const [speakers, setSpeakers] = useState(SpeakerData);

    const loadMore = () => {
        setSpeakers([...speakers, ...SpeakerData]);
    }

    return (
        <section className="speakers relative page-section" id="speakerslink">
            <div className="container">
                <div className="speakers_inr">
                    <div className="title_box_small wow fadeInUp">
                        <h2>SPEAKERS</h2>
                        <p>Meet early adopters, highly influential and established opinion leaders from blockchain & crypto fraternity</p>
                    </div>
                    <div className="speakers_list_otr row" id="myList" >

                        {speakers && speakers.length > 0 && speakers.map((data, index) => {
                            console.log("dataImage",data.image);
                            return (

                                <div key={`speaker_img ${index}`} className="speaker_box col-12 col-sm-6 col-md-4 col-lg-3 px-1 wow fadeInUp" data-wow-delay={data.time}>
                                    <div className="speaker_img">
                                        <img className="img-fluid" src={data.image} alt="" />
                                        <div className="speaker_plus">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#speaker_model_1">
                                                +
                                            </button>
                                            {/* <a href={data.link}>
                                                +
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="speaker_name">
                                        <h3>{data.name}</h3>
                                    </div>
                                    <div className="speaker_position">
                                        <p>{data.position}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    <div className="speaker_model_list">
                        <div className="modal fade speaker_model_otr" id="speaker_model_1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="speaker_model_1_Title" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                {SpeakermodalData && SpeakermodalData.length > 0 && SpeakermodalData.map((data, index) => {
                                    console.log("data-->",data.image)
                                    return (
                                        <div key={`speaker_model_box ${index}`} className="modal-content speaker_model_box">
                                            <button type="button" className="speaker_model_close" data-bs-dismiss="modal" aria-label="Close">
                                                <span>+</span>
                                            </button>
                                            <div className="speaker_model_box_inr row d-flex align-items-start justify-content-between">
                                                <div className="speaker_model_left_box col-sm-12 col-md-5 col-lg-4">
                                                    <img className="img-fluid" src={data.image} alt="" />
                                                </div>
                                                
                                                <div className="speaker_model_right_box col-sm-12 col-md-7 col-lg-8">
                                                    <h5 id="speaker_model_1_Title">{data.name}</h5>
                                                    <strong>{data.jobtitle} <br />{data.companyname}</strong>
                                                    <p>{data.discription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="a_btn a_btn_fill btn_orange wow fadeInUp">
                        <a id="loadMore" onClick={loadMore}>
                            VIEW MORE speakers
                            <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="13px" height="12px">
                                <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M6.277,11.406 L0.148,0.791 L12.406,0.791 L6.277,11.406 Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="speakers-cube-bottom wow zoomIn">
                <span >
                    <img data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-30}' className="img-fluid" src="/image/cube-6-png.png" alt="" />
                </span>
            </div>
        </section>

    )
}

export default Speaker