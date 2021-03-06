$(function() {

	if(matchMedia){
		var screen = window.matchMedia("(max-width:767px)");
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen){
		if(screen.matches){
			var widthScroll = $(".tab-list, .scroll-services").children().length; // Кол-во блоков
			var result = 1;
			for(var i = 1; i <= widthScroll; i++){
				result = widthScroll * 215 + 30;
			}
			$(".tab-list, .scroll-services").css( "width", result );
		}
		else{
			$(".tab-list, .scroll-services").css( "width", "" );
		}
	}

	$(document).ready(function() {
		$("#services1").hover(
			function(){
				$(this).attr("src", "img/services-animate/services1.gif");
			},
			function(){
				$(this).attr("src", "img/services-animate/stacic-services1.jpg");
			}
			);
		$("#services2").hover(
			function(){
				$(this).attr("src", "img/services-animate/services2.gif");
			},
			function(){
				$(this).attr("src", "img/services-animate/stacic-services2.jpg");
			}
			);
		$("#services3").hover(
			function(){
				$(this).attr("src", "img/services-animate/services3.gif");
			},
			function(){
				$(this).attr("src", "img/services-animate/stacic-services3.jpg");
			}
			);
		$("#services4").hover(
			function(){
				$(this).attr("src", "img/services-animate/services4.gif");
			},
			function(){
				$(this).attr("src", "img/services-animate/stacic-services4.jpg");
			}
			);
		$("#services5").hover(
			function(){
				$(this).attr("src", "img/services-animate/services5.gif");
			},
			function(){
				$(this).attr("src", "img/services-animate/stacic-services5.jpg");
			}
			);
		$("#services6").hover(
			function(){
				$(this).attr("src", "img/services-animate/services6.gif");
			},
			function(){
				$(this).attr("src", "img/services-animate/stacic-services6.jpg");
			}
			);
		$("#services7").hover(
			function(){
				$(this).attr("src", "img/services-animate/services7.gif");
			},
			function(){
				$(this).attr("src", "img/services-animate/stacic-services7.jpg");
			}
			);
	});

	// if(matchMedia){
	// 	var screen = window.matchMedia("(max-width:767px)");
	// 	screen.addListener(changes);
	// 	changes(screen);
	// }
	// function changes(screen){
	// 	if(screen.matches){
	// 		var widthScroll = $(".scroll-services").children().length; // Кол-во блоков
	// 		var result = 1;
	// 		for(var i = 1; i <= widthScroll; i++){
	// 			result = widthScroll * 215 + 30;
	// 		}
	// 		$(".scroll-services").css( "width", result );
	// 	}
	// 	else{
	// 		$(".scroll-services").css( "width", "" );
	// 	}
	// }

	$('.open-menu').click(function(){
		$('.header-menu .menu').slideToggle();
	});

	// Scroll
	// $(".scroll-down").mPageScroll2id({
	// 	//offset: 60
	// });

	$('.our-work__carousel').owlCarousel({
		loop:true,
		nav:true,
		dots: true,
		autoplay: false,
		autoplayTimeout:5000,
		//animateOut: 'fadeOut',
		//margin: 50,
		navText : ['<i class="icon-to-left"></i>','<i class="icon-to-right"></i>'],
		autoplayHoverPause:true,
		smartSpeed: 750,
		items: 1,
		// responsive:{
		// 	0:{
		// 		items:1
		// 	},
		// 	600:{
		// 		items:1
		// 	},
		// 	800:{
		// 		items:2
		// 	},
		// 	990:{
		// 		items:2
		// 	},
		// 	1000:{
		// 		items:3
		// 	},
		// 	1200:{
		// 		items:4
		// 	},
		// }
	});

	// var waypoint = new Waypoint({
	// 			element: $('.our-work'),
	// 			handler: function() {
	// 				alert('Ok');
	// 			},
	// 			offset: '20%'
	// 		});

	$(".tab_item").not(":first").hide();
	$(".wrapper__we-do .tab").click(function() {
		$(".wrapper__we-do .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// Tabs
	tabs();
	$('#tab-list li').click(function() {
		var obj = $(this);
		var container = obj.parents('#tab-container');
		var index = obj.index();
		$('#tab-list li', container).removeClass('active').eq(index).addClass('active');
		$('#tab-pane #pane', container).hide().removeClass('active').eq(index).fadeIn().addClass('active');
	});
	function tabs() {
		$('#tab-container').each(function() {
			$('#tab-list li', this).eq(0).addClass('active');
			$('#tab-pane #pane', this).eq(0).fadeIn().addClass('active');
		});
	}

});
