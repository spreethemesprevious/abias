/*
Theme Name:  Abias - Multipurpose Personal Portfolio Templete
Theme URI: http://tf.mdsumonmia.com/html/abias
Author URI: https://themeforest.net/user/webglib
*/
jQuery(document).ready(function($){
  
/*
      Table Index       
========================
1. Preloader
2. Responsive Menu
3. Slick Slider
4. Parallax
5. Progressbar Animation
6. Particle Animation
7. Work Completed Animation
8. Button Hover Effect
9. Portfolio Filtering
10. Hover Animation
11. Grid Home
12. Data Background
13. CountDown
14. Creative 2 Scrollable
15. Back to Top
16. Contact Us Form
*/

  "use strict";
  
/*=====| 1. Preloader |=====*/
  var loader = function() {
    setTimeout(function() { 
      if($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();
  
/*=====| 2. Responsive Menu |=====*/
  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
    meanMenuClose: "X",
    meanMenuCloseSize: "18px",
    meanExpand: "+",
    meanContract: "-",
    onePage: true,
  });

  // One page nav
  if ($('.one-page-nav').length > 0 ) {
    $('#nav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
    });
  };

/*=====| 12. Data Background |=====*/
  $("[data-background").each(function(){
    $(this).css("background-image","url("+$(this).attr("data-background") + ") ")
  })

});
// Document.ready function end here

/*=====| 15. Back to Top |=====*/
var btn = $('.scroll-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});


// Sticky Menu

(function(){

  var doc = document.documentElement;
  var w = window;

  var thresold = 200;
  var toggled;

  var curScroll = prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = prevDirection = 0;

  var header = document.getElementById('stickynav');

  var checkScroll = function() {

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    } else { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggled = toggleHeader();
    }
    if (toggled) {
      prevDirection = curDirection;
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function() {
    toggled = true;
    if (direction === 2) { 
      header.classList.add('hide');
    } else if (direction === 2 && curScroll > thresold) {
      header.classList.add('hide');
    } else if (direction === 1 && curScroll < thresold) {
      header.classList.remove('show');
    } else if (direction === 1) {
      header.classList.remove('hide');
      header.classList.add('show');
    } 
    else {
      toggled = false;
    }
    return toggled;
  };
  
  window.addEventListener('scroll', checkScroll);

})();