import React, { useEffect, useState } from "react";
import "./showCase.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { ShowCaseData } from "../../data";
import WOW from 'wowjs';
function ShowCase() {
  const [focus, setFocus] = React.useState(false);

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })

  return (
    <>
      <div className="coverage_row">
        {ShowCaseData &&
          ShowCaseData.length &&
          ShowCaseData.map((data, index) => {
            return (
              <div className="coverage_col wow fadeInDown" data-wow-delay={data.delay} key={index}>
                <div className="coverage_box">
                  <div className="counter-box">
                    <div className="counter">
                      <CountUp
                        start={focus ? 0 : null}
                        end={data.title}
                        duration={2}
                        redraw={true}
                      >
                        {({ countUpRef }) => (
                          <VisibilitySensor onChange={(isVisible) => {
                            if (isVisible) { setFocus(true); }
                          }}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </div>
                    <span>{data.sign}</span>
                  </div>
                  <h6>{data.description}</h6>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ShowCase;
