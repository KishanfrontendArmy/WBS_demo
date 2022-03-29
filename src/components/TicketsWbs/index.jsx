import React, { useEffect } from 'react'
import "./TicketsWbs.css"
import TicketsType from "../TicketsType/index";
import { Tickets } from "../../data";
import $ from "jquery";

function TicketsWbs(data) {
  useEffect(() => {
    //scorl animation js
    var $single_portfolio_img = $('.top_shape');
    var $window = $(window);

    function scroll_addclass() {
      var window_height = $(window).height() - 150;
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($single_portfolio_img, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
          $element.addClass('is_show');

        }
      });
    }
    $window.on('scroll resize', scroll_addclass);
    $window.trigger('scroll');
  })
  return (

    <>
      <div className="tickets_wbs">
        {/* Tickets from data.js and render it into map for three tickets */}
        {
          Tickets && Tickets.length > 0 && Tickets.map((data, index) => {
            return (
              <TicketsType data={data} key={index} />
            )
          })
        }
      </div>
    </>
  )
}

export default TicketsWbs;