import React, { useEffect, useState } from "react";
import "./event.css";
import WOW from 'wowjs';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';
import Header from "../Header";
import Herobanner from "../Herobanner";
import Testimonial from "../Testimonial";
import AboutSummit from "../aboutSummit";
import Speaker from "../Speakers";
import DiscussionTopic from "../DiscussionTopics";
import Podcasts from "../Podcats";
import BlockchainTrends from "../Blockchaintrends";
import WbsTickets from "../Wbstickets/index";
import BadgeShowCase from "../BadgeShowcase";
import WhoAttend from "../whoattend";
import Sponser from "../Sponsers";
import EventManage from "../Eventmanage";
import Footer from "../Footer";
import MediaCoverage from "../mediacoverage";


function Event() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true)
    }
    else if (scrolled <= 400) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);


  return (
    <>
      <Button className="Top_icon" style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>
        <img src="/image/bottom_up.svg" alt="" />
        {/* <FaArrowCircleUp onClick={scrollToTop} /> */}
      </Button>
      <Header />
      <Herobanner />
      <Testimonial />
      <MediaCoverage />
      <AboutSummit />
      <Speaker />
      <DiscussionTopic />
      <Podcasts />
      <BlockchainTrends />
      <WbsTickets />
      <BadgeShowCase />
      <WhoAttend />
      <Sponser />
      <EventManage />
      <Footer />
    </>
  );
}

export default Event;
