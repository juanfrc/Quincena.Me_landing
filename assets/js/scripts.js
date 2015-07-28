
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});	
	
    /*
        Background slideshow
    */    
    $('.top-content').backstretch([
                                   "assets/img/backgrounds/1.jpg"
                                 // , "assets/img/backgrounds/2.jpg"
                                 // , "assets/img/backgrounds/3.jpg"
                                 ], {duration: 3000, fade: 750});
    
    $('.more-features-container').backstretch("assets/img/backgrounds/2.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/3.jpg");
    $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
    	$('.testimonials-container').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
    
	/*
	    Modals
	*/
	// $('.launch-modal').on('click', function(e){
	// 	e.preventDefault();
	// 	$( '#' + $(this).data('modal-id') ).modal();
	// });

		// $("#registration-form").submit(function(event) {
  // 		$('#myModal').modal('toggle')
  // 		alert( "Handler for .submit() called." );
  // 		// event.preventDefault();
		// });

		// $( "#confirmation-button" ).click(function() {
  // 			$("#registration-form").submit();
		// });


		$( "#registration-form").submit(function( event ) {
			var self = this;
			$('#myModal').modal('toggle')
			event.preventDefault();
			$( '#myModal' ).click(function() {
				self.submit();
			});
		});

		$( "#registration-form2" ).submit(function( event ) {
			var self = this;
			$('#myModal').modal('toggle')
			event.preventDefault();
			$( '#myModal' ).click(function() {
				self.submit();
			});
		});


	/*
	    Subscription form
	*/	
	// $('.subscribe form').submit(function(e) {
	// 	e.preventDefault();
	//     var postdata = $('.subscribe form').serialize();
	//     $.ajax({
	//         type: 'POST',
	//         url: 'assets/subscribe.php',
	//         data: postdata,
	//         dataType: 'json',
	//         success: function(json) {
	//             if(json.valid == 0) {
	//                 $('.success-message').hide();
	//                 $('.error-message').hide();
	//                 $('.error-message').html(json.message);
	//                 $('.error-message').fadeIn('fast', function(){
	//                 	$('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	//             			$(this).removeClass('animated shake');
	//             		});
	//                 });
	//             }
	//             else {
	//                 $('.error-message').hide();
	//                 $('.success-message').hide();
	//                 $('.subscribe form').hide();
	//                 $('.success-message').html(json.message);
	//                 $('.success-message').fadeIn('fast', function(){
	//                 	$('.top-content').backstretch("resize");
	//                 });
	//             }
	//         }
	//     });
	// });
});


jQuery(window).load(function() {
	
	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
	/*
		Hidden images
	*/
	// $(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});


