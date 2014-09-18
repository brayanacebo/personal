jQuery(document).ready(function ($) {

/* SINGLE WORK ANIMATIONS ------------- */

$(".single_work_top h1").delay(300).animate({"opacity": "1", "top": "0em"}, 700);  
$(".single_work_top .line").delay(600).animate({"opacity": "1"}, 700);  
$(".single_work_top img").delay(500).animate({"opacity": "1", "left": "0em"}, 700);  

/* PRELOADER ------------- */

$(window).load(function() { // makes sure the whole site is loaded
      $("#status").delay(2000).fadeOut("slow"); // will first fade out the loading animation
      $("#preloader").delay(1600).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })
 
/* OFFCANVAS TOUCH NAVIGATION ------------- */

    $(window).load(function(){
      $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
      });
       $(".swipe-area").swipe({
            swipeStatus:function(event, phase, direction, distance, duration, fingers)
                {
                    if (phase=="move" && direction =="right") {
                         $(".container").addClass("open-sidebar");
                         return false;
                    }
                    if (phase=="move" && direction =="left") {
                         $(".container").removeClass("open-sidebar");
                         return false;
                    }
                }
        }); 
    });


/* SCROLL TO TOP ------------- */

$(document).ready(function() {
 
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

/* TESTIMONIALS UNSLIDER ------------- 

$(function() {
    $('.banner').unslider({
  speed: 500,               //  The speed to animate each slide (in milliseconds)
  delay: 5000,              //  The delay between slide animations (in milliseconds)//  A function that gets called after every slide animation
  keys: true,               //  Enable keyboard (left, right) arrow shortcuts
  dots: true,               //  Display dot navigation
  fluid: true              //  Support responsive design. May break non-responsive designs
});
});

/* SINGLE WORK SLIDES ------------- 

    $(function() {
      $('.work_slide').slidesjs({
        height:550,
        navigation: { active: false,effect: "fade"},
        pagination: { effect: "fade" },
        effect: { fade: { speed:800 } },
        play: { active:false, interval:3500, auto: true}
      });
    });

*/


$(document).ready(function() {
  $("img.unveil").unveil();
});


/* OWL CAROUSEL PROGRESS BAR */

$(document).ready(function() {
 
  var time = 7; // time in seconds
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 
    //Init the carousel
    $("#testimonial").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      autoHeight : true,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });
 
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //pause while dragging 
    function pauseOnDragging(){
      isPause = true;
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }
 
    //uncomment this to make pause on mouseover 
     $elem.on('mouseover',function(){
       isPause = true;
     })
     $elem.on('mouseout',function(){
       isPause = false;
     })
 
});


});
