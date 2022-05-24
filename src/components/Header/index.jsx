import React from 'react';
import './header.css';

import { headerMenu } from '../../data';

const Header = () => {

    return (
        <header className="header_main">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container justify-content-between align-items-center">
                    <div className="header_left">
                        <h6>
                            <span><strong>22</strong><sup>nd</sup> Edition</span>
                            #WBSDubai
                        </h6>
                    </div>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header_right flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-between align-items-center" >
                            <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav"  >
                                <a className="nav-link p-0 active" aria-current="page" href="#bannerlink">Home</a>
                            </li>
                            <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                                <a className="nav-link p-0" href="#speakerslink">SPEAKERS</a>
                            </li>
                            <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                                <a className="nav-link p-0" href="#testimonialslink">TESTIMONIALS</a>
                            </li>
                            <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                                <a className="nav-link p-0" href="#sponsorslink">SPONSORS</a>
                            </li>
                            <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                                <a className="nav-link p-0" href="#medialink">MEDIA</a>
                            </li>
                            <li className="nav-item dropdown" id="navbarNavDarkDropdown">
                                <a className="nav-link p-0 dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                                    GALLERY
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">test 1</a></li>
                                    <li><a className="dropdown-item" href="#">Test 2</a></li>
                                    <li><a className="dropdown-item" href="#">Test 3</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="a_btn a_btn_bdr btn_white_bdr">
                            <a href={headerMenu.enquire.url} target="_blank" rel="noreferrer">Enquire</a>
                        </div>
                        <div className="a_btn a_btn_fill btn_orange" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                            <a href="#bookticketslink">Book Tickets</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header