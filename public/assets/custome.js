//scorl animation js
// var $single_portfolio_img = $('.top_shape');
// var $window = $(window);

// function scroll_addclass() {
//     var window_height = $(window).height() - 150;
//     var window_top_position = $window.scrollTop();
//     var window_bottom_position = (window_top_position + window_height);

//     $.each($single_portfolio_img, function () {
//         var $element = $(this);
//         var element_height = $element.outerHeight();
//         var element_top_position = $element.offset().top;
//         var element_bottom_position = (element_top_position + element_height);

//         //check to see if this current container is within viewport
//         if ((element_bottom_position >= window_top_position) &&
//             (element_top_position <= window_bottom_position)) {
//             $element.addClass('is_show');

//             //   console.log(element_top_position, 'top-position');
//             //   console.log(window_bottom_position, 'bottom-position');
//             //   console.log(window_top_position, 'window_top_position');
//             //   console.log(element_height, 'element-height');
//             //   console.log(element_bottom_position, 'element_bottom_position');
//             //   console.log(window_height, 'windown-height');
//         }
//     });
// }

// $window.on('scroll resize', scroll_addclass);
// $window.trigger('scroll');



// get target div and the text to animate
var target = $(".bounce"),
    targetText = target[0].dataset.text;

// animate each letter individually
for (j = 0; j < targetText.length; j++) {
    var letterDiv = "<div data-wow-delay=\"" + (j * 0.1).toFixed(2) + "s\"  class=\"letter wow bounceIn\">" + targetText[j] + "</div>";
    $(letterDiv).appendTo(target.last());
}


$(document).ready(function () {
    $('a').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        var target = $($(this).attr('href'));
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {

        });
        return false;
    });
});
