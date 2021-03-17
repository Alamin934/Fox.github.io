$(document).ready(function(){
	
	/*=== Offcanvas NavBar jQuery Code ===*/
	$(function () {
	  $('[data-toggle="offcanvas"]').on('click', function () {
		$('.offcanvas-collapse').toggleClass('open')
	  })
	});
	/*===== Progress Bar Jquery Plugin =====*/
	$('svg.radial-progress').each(function( index, value ) { 
	  $(this).find($('circle.complete')).removeAttr( 'style' );
	});
	
	$(window).scroll(function(){
	  $('svg.radial-progress').each(function( index, value ) { 
		// If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
		if ( 
			$(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
			$(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
		) {
			// Get percentage of progress
			percent = $(value).data('percentage');
			// Get radius of the svg's circle.complete
			radius = $(this).find($('circle.complete')).attr('r');
			// Get circumference (2πr)
			circumference = 2 * Math.PI * radius;
			// Get stroke-dashoffset value based on the percentage of the circumference
			strokeDashOffset = circumference - ((percent * circumference) / 100);
			// Transition progress for 1.25 seconds
			$(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
		}
	  });
	}).trigger('scroll');
	/*==== Owl Carousel Slider ====*/
	$("#owl").owlCarousel(
		{
			items:1,
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:1000,
			autoplayHoverPause:true
		}
	);
	/*==== Contact Owl Carousel Slider ====*/
	$("#carousel").owlCarousel(
		{
			items:1,
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true
		}
	);
	/*==== CounterUp Plugin ====*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	/*==== Wow Js Plugin ====*/
    new WOW().init();
	/*===== IsoTope Jquery Plugin =====*/
	$('.element').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'fitRows'
	});
	
	$('#isoTope .nav-link').click(function(){
		$('#isoTope .nav-link').removeClass('active');
		$(this).addClass('active');
		
		var selector = $(this).attr('data-filter');
		$('.element').isotope({
			filter: selector
		});
		return false
	});
	/*===== Upper Button Scroll Start =====*/
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x > 700){
			$('#upper').fadeIn(500);
		}else{
			$('#upper').fadeOut(500);
		}
	});
	
	$('#upper').click(function(){
		$('html').animate({'scrollTop': 0},2000);
	});
	
});