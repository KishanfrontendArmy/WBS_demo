import React from 'react';
import './speaker.css';
import { SpeakerData } from '../../data';
import { SpeakermodalData } from '../../data';

const Speaker = () => {
    return (
        <section className="speakers">
            <div className="container">
                <div className="speakers_inr">
                    <div className="title_box_small">
                        <h2>SPEAKERS</h2>
                        <p>Meet early adopters, highly influential and established opinion leaders from blockchain & crypto fraternity</p>
                    </div>
                    <div className="speakers_list_otr">
                        {SpeakerData && SpeakerData.length > 0 && SpeakerData.map((data, index) => {
                            return (

                                <div key={`speaker_img ${index}`} className="speaker_box">
                                    <div className="speaker_img">
                                        <img src={data.image} alt="" />
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


                    <div class="speaker_model_list">
                        <div class="modal fade speaker_model_otr" id="speaker_model_1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="speaker_model_1_Title" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                {SpeakermodalData && SpeakermodalData.length > 0 && SpeakermodalData.map((data, index) => {
                                    return (
                                        <div key={`speaker_model_box ${index}`} class="modal-content speaker_model_box">
                                            <button type="button" class="speaker_model_close" data-bs-dismiss="modal" aria-label="Close">
                                                <span>+</span>
                                            </button>
                                            <div class="speaker_model_box_inr d-flex align-items-start justify-content-between">
                                                <div class="speaker_model_left_box">
                                                    <img src={data.image} alt="" />
                                                </div>
                                                <div class="speaker_model_right_box">
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

                    <div className="a_btn a_btn_fill btn_orange">
                        <a href="javascript:void(0)">
                            VIEW MORE speakers
                            <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="13px" height="12px">
                                <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M6.277,11.406 L0.148,0.791 L12.406,0.791 L6.277,11.406 Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Speaker