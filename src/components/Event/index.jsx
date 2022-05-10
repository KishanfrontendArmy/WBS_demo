import React, { useEffect } from "react";
import "./event.css";
import Header from "../Header";
import Herobanner from "../Herobanner";
import Testimonial from "../Testimonial";
import AboutSummit from "../aboutSummit";
import Speaker from "../Speakers";
import DiscussionTopic from "../DiscussionTopics";
import WOW from 'wowjs';
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



  return (
    <>
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
