import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';
import * as $ from 'jquery';
import { headerMenu } from '../../data';
import Button from '../Button';

const Header = () => {
    useEffect(() => {
        var sections = $('.page-section'), 
        nav = $('.header_main'), 
        nav_height = nav.outerHeight();
        $('.header_right ul li:first a').addClass('active');
        $('.page-section:first').addClass('active');
        $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('.header_right a').removeClass('active');
            sections.removeClass('active');
            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

            }
        });
        });
        nav.find('.header_right a').on('click', function () {
        var jQueryel = $(this)
            , id = jQueryel.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 16
        }, 500);
        return false;
        });
    })
    return (
        <header className="header_main">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container justify-content-between align-items-center">
                    <div className="header_left">
                        <Link to="/" style={{color: '#fff'}}>
                        <h6>
                            <span><strong>22</strong><sup>nd</sup> Edition</span>
                            #WBSDubai
                        </h6>
                        </Link>
                    </div>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header_right flex-grow-0" id="navbarNav">
                            {(window.location.pathname === '/') ? 
                                <ul className="navbar-nav d-flex justify-content-between align-items-center" >
                                    <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
                            :
                                <ul className="navbar-nav d-flex justify-content-between align-items-center" >
                                    <li className="nav-item">
                                        <Link className="nav-link p-0 active" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth className="nav-link p-0" to="/#speakerslink">
                                            SPEAKERS
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth className="nav-link p-0" to="/#testimonialslink">
                                            TESTIMONIALS
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth className="nav-link p-0" to="/#sponsorslink">
                                            SPONSORS
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth className="nav-link p-0" to="/#medialink">
                                            MEDIA
                                        </Link>
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
                            }
                        <Button name="Enquire" type="a_btn_bdr btn_white_bdr" href={headerMenu.enquire.url}/>
                        <Button name="Book Tickets" type="a_btn_fill btn_orange" href="#bookticketslink"/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header