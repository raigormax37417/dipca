;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "slide",

			easing: "swing",
			direction: "vertical",

			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	// $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// $(window).resize(function(){
	  	// 	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// });

	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		counter();
		parallax();
		sliderMain();
		testimonialCarousel();
	});


}());
/* LIGHTBOX MODAL */
// Open the Modal
let elements = document.querySelectorAll(".btn-course");
let modalContent = document.getElementById('modalContent');

const sabino = {
	one: "images/sabino1.png",
	two: "images/sabino2.png",
	three: "images/sabino3.png",
	four: "images/sabino4.png"
}
const ojodeagua = {
	one: "images/ojodeagua1.png",
	two: "images/ojodeagua2.png",
	three: "images/ojodeagua3.png",
	four: "images/ojodeagua4.png"
}
const suchil = {
	one: "images/suchil1.png",
	two: "images/suchil2.png",
	three: "images/suchil3.png"
}
const ampliacion = {
	one: "images/ampliacion1.png",
	two: "images/ampliacion2.png",
	three: "images/ampliacion3.png"
}
const sanjosexoxo = {
	one: "images/sanjosexoxo1.png",
	two: "images/sanjosexoxo2.png",
	three: "images/sanjosexoxo3.png",
	four: "images/sanjosexoxo4.png"
}
const comesuchil = {
	one: "images/comesuchil1.png",
	two: "images/comesuchil2.png",
	three: "images/comesuchil3.png",
	four: "images/comesuchil4.png"
}
const carrizal = {
	one: "images/carrisal1.png",
	two: "images/carrisal2.png",
	three: "images/carrisal3.png",
	four: "images/carrisal4.png"
}
const naranja = {
	one: "images/naranja1.png",
	two: "images/naranja2.png",
	three: "images/naranja3.png"
}
const zaniza = {
	one: "images/zaniza1.png",
	two: "images/zaniza2.png",
	three: "images/zaniza3.png"
}
const cancha = {
	one: "images/cancha1.png",
	two: "images/cancha2.png",
	three: "images/cancha3.png",
	four: "images/cancha4.png"
}
const techado = {
	one: "images/tech1.png",
	two: "images/tech2.png",
	three: "images/tech3.png",
	four: "images/tech4.png"
}
const barda = {
	one: "images/barda1.png",
	two: "images/barda2.png",
}
const chicagua = {
	one: "images/chicagua1.png",
	two: "images/chicagua2.png",
	three: "images/chicagua3.png",
	four: "images/chicagua4.png",
	five: "images/chicagua5.png"
}
const tila = {
	one: "images/tila1.png",
	two: "images/tila2.png",
	three: "images/tila3.png",
	four: "images/tila4.png"
}
const cuartila = {
	one: "images/cuartila1.png",
	two: "images/cuartila2.png"
}
const sanjose = {
	one: "images/sanjose1.png",
	two: "images/sanjose2.png",
	three: "images/sanjose3.png",
	four: "images/sanjose4.png"
}
elements.forEach((element, index) => {
	element.addEventListener('click', function() {
		openModal();
		console.log(element, index);
		loadImages(index);
	});
})
function addObjectImages(object) {
	modalContent.innerHTML = "";
	const keys = Object.values(object);
	const objectLength = Object.values(object).length;
	let suma = 1;
	for(const key of keys) {
		if (suma === 1) {
			modalContent.innerHTML+= `<div class="mySlides" style="display: block;">
			<div class="numbertext">${suma} / ${objectLength}</div>
				<img alt="images-sabino" src="${key}" style="width:100%; max-height: 400px;">
			</div>`;
		}
		modalContent.innerHTML+= `<div class="mySlides">
				<div class="numbertext">${suma} / ${objectLength}</div>
				<img alt="images-sabino" src="${key}" style="width:100%; max-height: 400px;">
				</div>`;
				suma++;
	}
}
function loadImages(index) {
	switch (index) {
		case 0:
			addObjectImages(sabino);
		break;
		case 1:
			addObjectImages(ojodeagua);
		break;
		case 2: 
			addObjectImages(suchil);
		break;
		case 3: 
			addObjectImages(ampliacion);
		break;
		case 4: 
			addObjectImages(sanjosexoxo);
		break;
		case 5:
			addObjectImages(comesuchil);
		break;
		case 6: 
			addObjectImages(carrizal);
		break;
		case 7:
			addObjectImages(naranja);
		break;
		case 8:
			addObjectImages(zaniza);
		break;
		case 9:
			addObjectImages(cancha);
		break;
		case 10:
			addObjectImages(techado);
		break;
		case 11:
			addObjectImages(barda);
		break;
		case 12:
			addObjectImages(chicagua);
		break;
		case 13:
			addObjectImages(tila);
		break;
		case 14: 
			addObjectImages(cuartilla);
		break;
		case 15:
			addObjectImages(sanjose);
		break;
		default:
		break;
	}
}

function openModal() {
	document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
  }