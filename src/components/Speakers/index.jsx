import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './speaker.css';
import { SpeakerData } from '../../data';
import * as $ from 'jquery';

const Speaker = () => {
    const [step, setStep] = useState(1);
    const [showSpeaker, setShowSpeaker] = useState(8);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [showLink, setShowLink] = useState(false);

    const loadMore = () => {
        setStep((step + 1));
    }

    const speakerHandler = (body) => {
        setSelectedSpeaker(body);
    }

    const checkResolution = () => {
        const width = window.innerWidth ? window.innerWidth : $(window).width();
        if(width < 768) {
            setShowLink(true);
        } else {
            setShowLink(false);
        }
    }

    useEffect(() => {
        checkResolution();
        window.addEventListener('resize', () => {
            checkResolution();
        })
    }, [])

    return (
        <section className="speakers relative page-section" id="speakerslink">
            <div className="container">
                <div className="speakers_inr">
                    <div className="title_box_small wow fadeInUp">
                        <h2>SPEAKERS</h2>
                        <p>Meet early adopters, highly influential and established opinion leaders from blockchain & crypto fraternity</p>
                    </div>
                    <div className="speakers_list_otr row" id="myList" >

                        {SpeakerData?.map((data, index) => {
                            if (index < (step * showSpeaker)) {
                                return (
                                    <div key={`speaker_img ${index}`} className="speaker_box col-12 col-sm-6 col-md-4 col-lg-3 px-1 wow fadeInUp" data-wow-delay={data.time}>
                                        <div className="speaker_img">
                                            <img className="img-fluid" src={data.image} alt="" />
                                            <div className="speaker_plus">
                                                {data?.discription &&
                                                    <button type="button" data-bs-toggle="modal" data-bs-target="#speaker_model_1" onClick={() => speakerHandler(data)}>
                                                        +
                                                    </button>
                                                }
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
                            } else {
                                return null;
                            }
                        })}

                    </div>


                    <div className="speaker_model_list">
                        <div className="modal fade speaker_model_otr" id="speaker_model_1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="speaker_model_1_Title" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div key={`speaker_model_box`} className="modal-content speaker_model_box">
                                    <button type="button" className="speaker_model_close" data-bs-dismiss="modal" aria-label="Close">
                                        <span>+</span>
                                    </button>
                                    <div className="speaker_model_box_inr row d-flex align-items-start justify-content-between">
                                        <div className="speaker_model_left_box col-sm-12 col-md-5 col-lg-4">
                                            <img className="img-fluid" src={selectedSpeaker?.image} alt="" />
                                        </div>

                                        <div className="speaker_model_right_box col-sm-12 col-md-7 col-lg-8">
                                            <h5 id="speaker_model_1_Title">{selectedSpeaker?.name}</h5>
                                            <strong>{selectedSpeaker?.jobtitle} <br />{selectedSpeaker?.companyname}</strong>
                                            <p>{selectedSpeaker?.discription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {SpeakerData?.length > (showSpeaker * step) && (
                        <div className="a_btn a_btn_fill btn_orange wow fadeInUp">
                            {!showLink ? 
                                <a id="loadMore" onClick={loadMore}>
                                    VIEW MORE speakers
                                    <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="13px" height="12px">
                                        <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M6.277,11.406 L0.148,0.791 L12.406,0.791 L6.277,11.406 Z" />
                                    </svg>
                                </a>
                            :
                                <Link to="/speakers" onClick={() => {window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                    /* you can also use 'auto' behaviour
                                       in place of 'smooth' */
                                  });}}>
                                    See All Speakers
                                </Link>
                            }
                        </div>
                    )}
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