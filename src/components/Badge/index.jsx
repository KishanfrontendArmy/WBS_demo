import React from "react";
import "./Badge.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Badge(props) {
  const [focus, setFocus] = React.useState(false);

  return (
    <>
      <div className="media_coverage_item_box wow bounceIn" data-wow-delay={props.delaybadge}>
        <h3>
          <div className="counter" data-count="28">
            <CountUp
              start={focus ? 0 : null}
              end={props.count}
              duration={2}
              redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                  if (isVisible) { setFocus(true); }
                }}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </div>
          <span>{props.total}</span>
        </h3>
        <p>{props.Description}</p>
      </div>
    </>
  );
}

export default Badge;
