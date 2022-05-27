import React from 'react';
import './aboutsummit.css';
import Button from '../Button';
import { AbountSummit } from '../../data';

const AboutSummit = () => {
    return (
        <section className="about_summit relative page-section">
            <div className="container">
                <div className="about_summit_inr row flex-wrap relative align-items-start">
                    <div className="about_summit_single-cube wow zoomIn">
                        <span data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-30}'>
                            <img className="img-fluid" src="/image/single-cube-new-1.png" alt="" />
                        </span>
                    </div>
                    <div className="about_summit_left col-12 col-lg-7 pe-5 wow fadeInLeft">
                        <div className="title_box col-11">
                            <h2>WBS - WORLD'S LONGEST RUNNING & MOST-ELITE BLOCKCHAIN SUMMIT SERIES</h2>
                        </div>
                        <strong className="russo-one">Connect with the elite blockchain & crypto experts, investors & HNIs from around the world.</strong>
                        <p>Take a break from your normal working week, and explore two days of unconventional networking with 1000+ senior-level professionals from governments and enterprises along with curated investors and crypto influencers.</p>
                        <p>Designed in an intimate luxurious setting, we make sure all the spotlight is on you to help you raise funds for your ICOs/IEOs/STOs/IDOs or reduce your sales cycle like no other event!</p>
                        <div className="about_summit_left_btn_box_otr row m-0">
                            <div className="about_summit_btn_box col-12 col-sm-6 col-md-3 p-0">
                                <Button href={AbountSummit.sponsorUrl} type="a_btn_fill btn_orange" name="Sponsor" target="_blank" />
                                
                                {/* <div className="a_btn a_btn_fill btn_orange">
                                    <a href={AbountSummit.sponsorUrl} target="_blank" rel="noreferrer">Sponsor</a>
                                </div> */}
                                <p>Explore sponsorship opportunities</p>
                            </div>
                            <div className="about_summit_btn_box col-12 col-sm-6 col-md-4">
                                <Button href="#bookticketslink" type="a_btn_bdr btn_white_bdr" name="Book Tickets"/>
                                {/* <div className="a_btn a_btn_bdr btn_white_bdr">
                                    <a href="#bookticketslink">Book Tickets</a>
                                </div> */}
                                <p>Reserve your tickets for upcoming events at special prices</p>
                            </div>
                        </div>
                    </div>
                    <div className="about_summit_right col-12 col-lg-5 wow fadeInRight">
                        <div className="scale_img_animation">
                            <img className="img-fluid" src="/image/about-summit-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_summit_bottom-cube wow zoomIn">

                <span data-parallax='{"scale": 0.8, "x": 20, "y": -20, "rotateZ":-30}'>
                    <img className="img-fluid" src="/image/cube-6-png.png" alt="" />
                </span>
            </div>
        </section>
    )
}

export default AboutSummit