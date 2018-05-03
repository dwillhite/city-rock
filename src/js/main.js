//main js

// google analytics tracking script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-82132645-1', 'auto');
ga('send', 'pageview');


//automatically update copyright datae
var copyright = new Date().getFullYear();
$('#copy span').html(copyright);

//name animation
/*
$('.name').on('mouseover', function() {
    var d = $('.name');
    TweenMax.to(d, 2, {y:-395, x: -75});
    d.css('position', 'fixed');
    d.css('font-size', '1em');
    d.css('font-family', 'Oxygen');
});

 $('.name').on('scroll', function() {
     var d = $('.name');
     TweenMax.to(d, 2, {y:-395, x: -75});
     d.css('position', 'fixed');
     d.css('font-size', '1em');
     d.css('font-family', 'Oxygen');
     console.log('first scroll');
 });

 document.getElementsByClassName('name').onscroll = function() {
        console.log("scrolling");
};
*/
/*
var d = $('.name');
d.css('font-size', '2em');
$(function() {
    var controller = new ScrollMagic.Controller();
    var d = $('.name');
    d.css('font-size', '2em');
    TweenMax.set(d, {y:-20, x:1});

    var firstScroll = new TweenMax.to(d, 3, {y:-395, x: -75});d.css('position', 'fixed');
        d.css('font-size', '1em');
        d.css('font-family', 'Oxygen');

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '.clear',
        offset: -400,
        duration: 400
    })
    .setTween(firstScroll)
    //.addIndicators()
    .addTo(controller);
})
*/
/*
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
//    offset: 10, //start scene after scrolling for 100px
//    duration: 40  //pin the element for 400px of scrolling
//    triggerElement: '.name' // point of execution
});


.setPin('.main-nav'); // the element we want to pin
// Add Scene to ScrollMagic Controller
controller.addScene(scene);
var tlCurtain = new TimelineMax();
var d = $('.name');
TweenMax.to(d, 2, {y:-395, x: -75});
d.css('position', 'fixed');
d.css('font-size', '1em');
d.css('font-family', 'Oxygen');
*/
// displays mobile navigation on click the hamburger


// var mobileNav = $('.main-nav'),
//     screen = $(window);

// $('#hamburger').on('click', toggleMenu);

// function toggleMenu(){

//     if ($(mobileNav).css('display') === 'none') {
//     	$(mobileNav).show();
//         xShow();
//     } else {
//     	$(mobileNav).hide();
//         hamShow();
//     }
//   }

//   //hides the mobile menu so not to obstruct the page view
//   $('a').on('click', function() {
//       console.log(screen.width());
//       if (screen.width() < 768) {
//           $(mobileNav).hide();
//           hamShow();
//       }else {
//           $(mobileNav).show();
//       }
//   });

// //animate hamburger to X
//   function xShow() {
//       var top = $('#top-line'),
//           middle = $('#middle-line'),
//           bottom = $('#bottom-line');

//          // top.css('opacity', '0');
//           TweenMax.to(top, 2.25, {y: -100, rotation:360});
//           TweenMax.to(middle, 0.5, {rotation:45});
//           TweenMax.to(bottom, 0.5, {y: -7,rotation:-45});
//   }
//   //animate back to hamburger
//   function hamShow() {
//       var top = $('#top-line'),
//           middle = $('#middle-line'),
//           bottom = $('#bottom-line');

//           //top.css('opacity', '1');
//           TweenMax.fromTo(top, 2.25, {y: -100, rotation:360}, {y: 0, rotation:-360});
//           TweenMax.to(middle, 0.5, {rotation:180});
//           TweenMax.to(bottom, 0.5, {y: 0,rotation:-180});
//   }





