$(function () {

	//contunue-project

	$('.contunue-project').click(function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$('.contunue-project').removeClass('active');
			$(this).addClass('active');
		}
	})

	$('.zoom-icon').click(function(){
		var imgLink = $(this).parent().prev('.project-photo').attr('src');
		$('.fs-popup-img').attr('src', imgLink);
		$('.full-screen-popup').addClass('open');
	})

	$('.full-screen-popup').click(function(){
		$(this).removeClass('open')
	})

	// Scrolling
	$('.nav-item a').click(function(e) {
		e.preventDefault();
		var thisEl = $(this).attr('href');
		var top = $(thisEl).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
	$('.mobile-nav').click(function() {
		$('.page-nav').toggleClass('open');
	})
});