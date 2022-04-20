import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header_main">
            <div className="container">
                <div className="header_inr d-flex justify-content-between align-items-end">
                    <div className="header_left">
                        <h6>
                            <span><strong>22</strong><sup>nd</sup> Edition</span>
                            #WBSDubai
                        </h6>
                    </div>
                    <div className="header_right d-flex justify-content-between align-items-center">
                        <div className="menu">
                            <ul className="d-flex justify-content-between align-items-center">
                                <li><a href="javascript:void(0)">HOME</a></li>
                                <li><a href="javascript:void(0)">SPEAKERS</a></li>
                                <li><a href="javascript:void(0)">TESTIMONIALS</a></li>
                                <li><a href="javascript:void(0)">SPONSORS</a></li>
                                <li><a href="javascript:void(0)">MEDIA</a></li>
                                <li><a href="javascript:void(0)">GALLERY</a></li>
                            </ul>
                        </div>
                        <div className="a_btn a_btn_bdr btn_white_bdr">
                            <a href="javascript:void(0)">Enquire</a>
                        </div>
                        <div className="a_btn a_btn_fill btn_orange">
                            <a href="javascript:void(0)">Book Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header