import React from 'react';
import './footer.css';
import { Footerimage, Footerdiscription, Footermenu, Footermenu1 } from '../../data';

const Footer = () => {
    return (


        <footer className="footer">
            <div className="container">
                <div className="footer_inr d-flex row justify-content-between">
                    <div className="ft_left col-md-3">
                        <div className="ft_logo wow fadeInUp">
                            <a href="/">
                                <img className="img-fluid" src="/image/ft_logo.png" alt="" />
                            </a>
                        </div>
                        {Footerdiscription && Footerdiscription.length > 0 && Footerdiscription.map((data, index) => {
                            return (
                                <div key={`footer_inr ${index}`}>
                                    <p className="wow fadeInUp">{data.title}</p>

                                    <p className="wow fadeInUp">{data.title1}</p>
                                </div>
                            )

                        })}
                        <div className="ft_social_media wow fadeInUp">

                            <ul className="d-flex align-items-center">
                                {Footerimage && Footerimage.length > 0 && Footerimage.map((data, index) => {
                                    return (
                                        <li key={`ft_social_media ${index}`}>
                                            <a href={data.url} target="_blank" rel="noreferrer">
                                                <img className="img-fluid" src={data.image} alt="" />
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="ft_right d-flex align-items-start justify-content-between wow fadeInUp">

                        <div className="ft_address col-md-5">

                            <h4>ADDRESS</h4>
                            <p>Office 55, Unit 190, 13th floor, The One Tower, Barsha Heights, Tecom, Dubai, United Arab Emirates</p>
                            <p>Registered under License No. 1039072 in Dubai, United Arab Emirates</p>

                        </div>
                        <div className="ft_right_menu col-auto">
                            <h4>MORE TRESCON</h4>
                            <ul>
                                {Footermenu && Footermenu.length > 0 && Footermenu.map((data, index) => {
                                    return (
                                        <li key={`ft_right_menu ${index}`}>
                                            <a href={data.url} target="_blank" rel="noreferrer">{data.heading}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="ft_right_menu  col-auto">
                            <h4>ABOUT TRESCON</h4>
                            <ul>
                                {Footermenu1 && Footermenu1.length > 0 && Footermenu1.map((data, index) => {
                                    return (
                                        <li key={`ft_right ${index}`}>
                                            <a href={data.url} target="_blank" rel="noreferrer">{data.about}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft_copyright wow fadeInUp">
                <p>© 2022 WBS events conferences & seminars organizing est. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer