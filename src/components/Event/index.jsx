import React, { useEffect, useState, Suspense } from "react";
import "./event.css";
import WOW from 'wowjs';
import { Button } from './Styles';
import Header from "../Header";
import Herobanner from '../Herobanner';

// const Herobanner = React.lazy(() => import("../Herobanner"));
const Testimonial = React.lazy(() => import('../Testimonial'));
const MediaCoverage = React.lazy(() => import('../mediacoverage'));
const AboutSummit = React.lazy(() => import('../aboutSummit'));
const Speaker = React.lazy(() => import("../Speakers"));
const DiscussionTopic = React.lazy(() => import("../DiscussionTopics"));
const Podcasts = React.lazy(() => import("../Podcats"));
const BlockchainTrends = React.lazy(() => import("../Blockchaintrends"));
const WbsTickets = React.lazy(() => import("../Wbstickets/index"));
const BadgeShowCase = React.lazy(() => import("../BadgeShowcase"));
const WhoAttend = React.lazy(() => import("../whoattend"));
const Sponser = React.lazy(() => import("../Sponsers"));
const EventManage = React.lazy(() => import("../Eventmanage"));
const Footer = React.lazy(() => import("../Footer"));

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
      </Button>
      <Header />
      {/* <Suspense fallback={<></>}> */}
        <Herobanner />
      {/* </Suspense> */}
      <Suspense fallback={<></>}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<></>}>
        <MediaCoverage />
      </Suspense>
      <Suspense fallback={<></>}>
        <AboutSummit />
      </Suspense>
      <Suspense fallback={<></>}>
        <Speaker />
      </Suspense>
      <Suspense fallback={<></>}>
        <DiscussionTopic />
      </Suspense>
      <Suspense fallback={<></>}>
        <Podcasts />
      </Suspense>
      <Suspense fallback={<></>}>
        <BlockchainTrends />
      </Suspense>
      <Suspense fallback={<></>}>
        <WbsTickets />
      </Suspense>
      <Suspense fallback={<></>}>
        <BadgeShowCase />
      </Suspense>
      <Suspense fallback={<></>}>
        <WhoAttend />
      </Suspense>
      <Suspense fallback={<></>}>
        <Sponser />
      </Suspense>
      <Suspense fallback={<></>}>
        <EventManage />
      </Suspense>
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Event;
