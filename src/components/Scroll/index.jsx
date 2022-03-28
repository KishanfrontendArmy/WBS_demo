import React, { useEffect } from 'react';
import './scroll.css';
import WOW from 'wowjs';

const Scroll = () => {


    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    })
    return (
        <>
            <div className="more_sec">
                <a href="#coverage_sec_scroll">
                    <svg width="34" height="56" viewBox="0 0 34 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17V39C1 47.8366 8.16344 55 17 55C25.8366 55 33 47.8366 33 39V17Z" stroke="#E42E35" stroke-width="2" />
                        <path class="bottom_line" d="M17 49V37" stroke="#E42E35" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </a>
            </div>
            <div className="container">
                <div className="scroll-box">
                    <h1 class="word bounce" data-text="Pleases Scroll Down">Pleases Scroll Down</h1>
                </div>
            </div>
        </>
    )
}

export default Scroll;