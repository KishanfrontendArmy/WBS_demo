$(document).ready(function () {
    $('.header_right a').bind('click', function (e) {
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



// get target div and the text to animate
var target = $(".bounce"),
    targetText = target[0]?.dataset?.text;
if(targetText?.length > 0) {
// animate each letter individually
for (j = 0; j < targetText.length; j++) {
    var letterDiv = "<div data-wow-delay=\"" + (j * 0.1).toFixed(2) + "s\"  className=\"letter wow bounceIn\">" + targetText[j] + "</div>";
    $(letterDiv).appendTo(target.last());
}
}


// Init WOW.js and get instance
var wow = new WOW();
wow.init();



