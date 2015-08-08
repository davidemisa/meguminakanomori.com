$(function($){		
	$.supersized({
		// Functionality
		slide_interval      :   5000,		// Length between transitions
		transition          :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed	:	2000,		// Speed of transition
												   
		// Components							
		slide_links			:	'false',
		slides 				:  	[		// Slideshow Images
                                        // TODO aggiungere altre foto
										{image : 'img/background/piano_keyboard.jpg'},
										{image : 'img/background/inside_piano.jpg'}
										//{image : 'http://placehold.it/1920x1143'}
								]
	});
});