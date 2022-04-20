import React from 'react';
import './aboutsummit.css';

const AboutSummit = () => {
    return (
        <section className="about_summit">
            <div className="container">
                <div className="about_summit_inr d-flex align-items-start justify-content-between flex-wrap">
                    <div className="about_summit_left col-6">
                        <div className="title_box">
                            <h2>WBS - WORLD'S LONGEST RUNNING & MOST-ELITE BLOCKCHAIN SUMMIT SERIES</h2>
                        </div>
                        <strong className="russo-one">Connect with the elite blockchain & crypto experts, investors & HNIs from around the world.</strong>
                        <p>Take a break from your normal working week, and explore two days of unconventional networking with 1000+ senior-level professionals from governments and enterprises along with curated investors and crypto influencers.</p>
                        <p>Designed in an intimate luxurious setting, we make sure all the spotlight is on you to help you raise funds for your ICOs/IEOs/STOs/IDOs or reduce your sales cycle like no other event!</p>
                        <div className="about_summit_left_btn_box_otr">
                            <div className="about_summit_btn_box">
                                <div className="a_btn a_btn_fill btn_orange">
                                    <a href="javascript:void(0)">Sponsor</a>
                                </div>
                                <p>Explore sponsorship opportunities</p>
                            </div>
                            <div className="about_summit_btn_box">
                                <div className="a_btn a_btn_bdr btn_white_bdr">
                                    <a href="javascript:void(0)">Book Tickets</a>
                                </div>
                                <p>Reserve your tickets for upcoming events at special prices</p>
                            </div>
                        </div>
                    </div>
                    <div className="about_summit_right col-5">
                        <img src="/image/about-summit-img.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSummit