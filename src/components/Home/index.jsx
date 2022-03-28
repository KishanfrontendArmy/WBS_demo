import React, { useEffect } from "react";
import "./Home.css";
import Scroll from "../Scroll";
import Title from "../../components/Title/index";
import ShowCase from "../../components/ShowCase/index";
import TicketsWbs from "../../components/TicketsWbs/index";
import BadgeList from "../../components/BadgeList/index";
import leftImage from "../../assets/Image/media_left_img.svg";
import rightImage from "../../assets/Image/media_right_img.svg";
import WOW from 'wowjs';

function Home() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })

  return (
    <>
      {/* <section className="scroll-section">
        <Scroll />
      </section> */}

      <section className="coverage_sec" id="coverage_sec_scroll">
        <div className="coverage_icon_top wow zoomIn" data-wow-delay=".3s">
          <svg data-parallax='{"x": 0, "y": -50}' width="161" height="133" viewBox="0 0 161 133" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_2)">
              <path d="M160.19 132.34H0L80.1 0L160.19 132.34ZM8.87 127.34H151.32L80.1 9.66L8.87 127.34Z" fill="white" />
              <path d="M41.34 109.04L80.1 45L118.85 109.04H41.34Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="160.19" height="132.34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="coverge_close_share_left wow zoomIn" data-wow-delay=".3s">
          <svg data-parallax='{"x": 100, "y": -50, "rotateZ":0}' width="213" height="213" viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_7)">
              <path d="M168.24 212.31L106.16 150.23L44.08 212.31L0 168.24L62.08 106.16L0 44.08L44.08 0L106.16 62.08L168.24 0L212.31 44.08L150.23 106.16L212.31 168.24L168.24 212.31ZM7.07 168.24L44.07 205.24L106.15 143.16L168.23 205.24L205.23 168.24L143.15 106.16L205.23 44.08L168.23 7.08L106.16 69.15L44.08 7.07L7.08 44.07L69.16 106.15L7.07 168.24Z" fill="white" />
              <path d="M199.03 31.82H194.03V56.33H199.03V31.82Z" fill="white" />
              <path d="M199.03 155.98H194.03V180.76H199.03V155.98Z" fill="white" />
              <path d="M184.88 17.68H179.88V70.47H184.88V17.68Z" fill="white" />
              <path d="M184.88 141.84H179.88V194.91H184.88V141.84Z" fill="white" />
              <path d="M170.74 3.54H165.74V84.62H170.74V3.54Z" fill="white" />
              <path d="M170.74 128.17H165.74V208.79H170.74V128.17Z" fill="white" />
              <path d="M156.6 17.68H151.6V98.76H156.6V17.68Z" fill="white" />
              <path d="M156.6 113.56H151.6V194.64H156.6V113.56Z" fill="white" />
              <path d="M142.46 31.82H137.46V180.5H142.46V31.82Z" fill="white" />
              <path d="M128.31 45.96H123.31V166.82H128.31V45.96Z" fill="white" />
              <path d="M114.17 60.1H109.17V152.2H114.17V60.1Z" fill="white" />
              <path d="M100.03 57.45H95.03V155.32H100.03V57.45Z" fill="white" />
              <path d="M85.89 42.85H80.89V169.47H85.89V42.85Z" fill="white" />
              <path d="M71.75 28.11H66.75V183.61H71.75V28.11Z" fill="white" />
              <path d="M57.6 116.77H52.6V197.75H57.6V116.77Z" fill="white" />
              <path d="M57.6 13.97H52.6V95.64H57.6V13.97Z" fill="white" />
              <path d="M43.46 130.81H38.46V205.66H43.46V130.81Z" fill="white" />
              <path d="M43.46 6.65H38.46V81.5H43.46V6.65Z" fill="white" />
              <path d="M29.32 144.7H24.32V191H29.32V144.7Z" fill="white" />
              <path d="M29.32 20.79H24.32V67.35H29.32V20.79Z" fill="white" />
              <path d="M15.18 34.93H10.18V53.68H15.18V34.93Z" fill="white" />
              <path d="M15.18 158.49H10.18V176.87H15.18V158.49Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_7">
                <rect width="212.31" height="212.31" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="container">
          <div className="coverage_sec_otr" >
            <div className="title-box wow fadeInUP" data-wow-delay=".5s" >
              <h2 data-parallax='{"x": 0, "y": -50}'>MEDIA SHOWCASE AND COVERAGE</h2>
            </div>
            <ShowCase />
          </div>
        </div>
      </section>

      <section className="tickets_wbs_sec">
        <div className="tickets_wbs_top_right_icon wow zoomIn">
          <svg xmlns="http://www.w3.org/2000/svg" data-parallax='{"x": -130, "y": 0}' viewBox="0 0 608.33 103.26"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Ñëîé_1" data-name="Ñëîé 1"><polygon class="cls-1" points="608.33 85.97 560.95 63.8 509.64 87.8 458.32 63.8 407.01 87.8 355.7 63.8 304.38 87.8 253.07 63.8 201.76 87.8 150.44 63.8 99.13 87.8 47.81 63.8 0 86.16 0 101.61 47.81 79.26 99.13 103.26 150.44 79.26 201.76 103.26 253.07 79.26 304.38 103.26 355.7 79.26 407.01 103.26 458.32 79.26 509.64 103.26 560.95 79.26 608.33 101.42 608.33 85.97" /><polygon class="cls-1" points="608.33 54.06 560.95 31.9 509.64 55.9 458.32 31.9 407.01 55.9 355.7 31.9 304.38 55.9 253.07 31.9 201.76 55.9 150.44 31.9 99.13 55.9 47.81 31.9 0 54.26 0 69.71 47.81 47.35 99.13 71.36 150.44 47.35 201.76 71.36 253.07 47.35 304.38 71.36 355.7 47.35 407.01 71.36 458.32 47.35 509.64 71.36 560.95 47.35 608.33 69.52 608.33 54.06" /><polygon class="cls-1" points="608.33 22.16 560.95 0 509.64 24 458.32 0 407.01 24 355.7 0 304.38 24 253.07 0 201.76 24 150.44 0 99.13 24 47.81 0 0 22.36 0 37.81 47.81 15.46 99.13 39.45 150.44 15.46 201.76 39.45 253.07 15.46 304.38 39.45 355.7 15.46 407.01 39.45 458.32 15.46 509.64 39.45 560.95 15.46 608.33 37.62 608.33 22.16" /></g></g>
          </svg>
        </div>
        <div className="container">
          <div class="title-box wow fadeInUp" data-wow-delay=".5s">
            <Title data-parallax='{"x": 0, "y": -50}' title="TICKETS TO WBS DUBAI" />
          </div>
          <TicketsWbs />
        </div>
      </section>

      <section
        className="media_coverage_sec_round counter_list"
        id="counter_list_otr"
      >
        <div className="media_sec_right_icon  wow zoomIn">
          <img src={rightImage} data-parallax='{"x": 0, "y": 100}' alt="fff" />
        </div>
        <div className="media_sec_left_icon  wow zoomIn">
          <img src={leftImage} data-parallax='{"x": 0, "y": 100}' alt="" />
        </div>
        <div className="container_small">
          <div className="media_coverage_sec_round_inr">
            <div class="title-box  wow fadeInUp" data-wow-delay=".5s">
              <Title data-parallax='{"x": 0, "y": -10}' title="MEDIA SHOWCASE AND COVERAGE" />
            </div>
            <BadgeList />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
