import React from 'react';
import './footer.css';
import { Footerimage, Footerdiscription, Footermenu, Footermenu1 } from '../../data';

const Footer = () => {
    return (


        <footer className="footer">
            <div className="container">
                <div className="footer_inr d-flex justify-content-between">
                    <div className="ft_left">
                        <div className="ft_logo">
                            <a href="#">
                                <img src="/image/ft_logo.png" alt="" />
                            </a>
                        </div>
                        {Footerdiscription && Footerdiscription.length > 0 && Footerdiscription.map((data, index) => {
                            return (
                                <div key={`footer_inr ${index}`}>
                                    <p>{data.title}</p>

                                    <p>{data.title1}</p>
                                </div>
                            )

                        })}
                        <div className="ft_social_media">

                            <ul className="d-flex align-items-center">
                                {Footerimage && Footerimage.length > 0 && Footerimage.map((data, index) => {
                                    return (
                                        <li key={`ft_social_media ${index}`}>
                                            <a href="#">
                                                <img src={data.image} alt="" />
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="ft_right d-flex align-items-start justify-content-between">

                        <div className="ft_address">

                            <h4>ADDRESS</h4>
                            <p>Office 55, Unit 190, 13th floor, The One Tower, Barsha Heights, Tecom, Dubai, United Arab Emirates</p>
                            <p>Registered under License No. 1039072 in Dubai, United Arab Emirates</p>

                        </div>
                        <div className="ft_right_menu">
                            <h4>MORE TRESCON</h4>
                            <ul>
                                {Footermenu && Footermenu.length > 0 && Footermenu.map((data, index) => {
                                    return (
                                        <li key={`ft_right_menu ${index}`}><a href="#">{data.heading}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="ft_right_menu">
                            <h4>ABOUT TRESCON</h4>
                            <ul>
                                {Footermenu1 && Footermenu1.length > 0 && Footermenu1.map((data, index) => {
                                    return (
                                        <li key={`ft_right ${index}`}><a href="#">{data.about}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft_copyright">
                <p>© 2022 WBS events conferences & seminars organizing est. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer