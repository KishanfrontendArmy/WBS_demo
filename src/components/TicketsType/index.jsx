import React from "react";
import './TicketsType.css';

function TicketsType(props) {
  return (
    <>
      {console.log(props?.data?.topclass)}
      <div className="tickets_wbs_col wow fadeInDown" data-wow-delay={props.delayticket}>
        <div className="tickets_wbs_upper">
          <h3>{props.data.title}</h3>
          <div className="price_box">{props.data.price}</div>
          <a href="#." className="a_btn">
            BUY TICKETS
          </a>
          <div className="tickets-date">{props.data.date}</div>
          <div className={`tickets_standard_top_icon ${props?.data?.topclass} wow zoomIn`}>
            <img src={props.data.topicon} alt="" />
          </div>
          <div className={`tickets_standard_bottom_left ${props?.data?.bottomclass} wow zoomIn`} >
            <img src={props.data.bottomicon} alt="" />
          </div>
        </div>
        <div className="tickets_list">
          <span class="top_shape"></span>
          <ul class="wow fadeInDown">
            {props.data.include && props.data.include.length > 0 && props.data.include.map((data, index) => {
              return (
                <li className="true_check" key={index}>{data}</li>
              )
            })}
            {props.data.exclude && props.data.exclude.length > 0 && props.data.exclude.map((data, index) => {
              return (
                <li className="false_check" key={index}>{data}</li>
              )
            })}

          </ul>
        </div>
      </div>
    </>
  );
}

export default TicketsType;
