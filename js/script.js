// Slideshow functionality
let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let transitioning = false;

// Next/previous controls
function plusSlides(n) {
    if (transitioning) return; // Prevent multiple clicks during transition
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    if (transitioning) return; // Prevent multiple clicks during transition
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    transitioning = true;
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Remove active class from current slide and dot
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Add active class to new slide and dot
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].className += " active";
    
    // Reset transitioning flag after transition completes
    setTimeout(() => {
        transitioning = false;
    }, 800); // Match this with the CSS transition duration
}

// Initialize slideshow when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Show first slide immediately
    if (slides.length > 0) {
        slides[0].classList.add("active");
        dots[0].className += " active";
    }
    
    // Auto advance slides
    setInterval(function() {
        if (!transitioning) {
            plusSlides(1);
        }
    }, 5000);
});

;(function ($) {

	'use strict';
	
 // SCROLL TO TOP
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.backtop').addClass('reveal');
    } else {
        $('.backtop').removeClass('reveal');
    }
});
 
	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:6,
		        slidesToScroll: 6,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow:4,
		        slidesToScroll: 4
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical:true,
		verticalSwiping:true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap-2').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:2,
		        slidesToScroll:2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});



	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
			// styles: style_array_here
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	var google_map_canvas = $('#map-canvas');

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	// Counter

	$('.counter-stat span').counterUp({
	      delay: 10,
	      time: 1000
	  });

		
 // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

})(jQuery);

// Sticky Header
(function($) {
  'use strict';
  
  // Add sticky class on scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('.navigation').addClass('sticky');
    } else {
      $('.navigation').removeClass('sticky');
    }
  });

  // Smooth scroll for navigation
  $('.nav-link').on('click', function(event) {
    var $anchor = $(this);
    var headerHeight = $('.navigation').outerHeight();
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - headerHeight
    }, 1000);
    event.preventDefault();
  });

  // Close mobile menu on click
  $('.navbar-nav .nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  
})(jQuery);
