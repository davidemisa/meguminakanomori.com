/*
* Author: Wisely Themes
* Author URI: http://themeforest.net/user/wiselythemes
* Theme Name: Beat
* Version: 1.0.5
*/

/* global Modernizr:true, google:true, myEvents:true, myPlaylist:true, RichMarker:true */

var Beat = {

	initialized: false,
	mobMenuFlag: false,
	wookHandler: null,
	wookOptions: null,
	scrollPos: 0,
	sendingMail: false,
	myLatlng: null,
    enMonths: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    itMonths: [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
    ],
    enWeekDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    itWeekDays: [
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
        "Domenica"
    ],
    jpnWeekDays: [
        "（月）",
        "（火）",
        "（水）",
        "（木）",
        "（金）",
        "（土）",
        "（日）"
    ],

	init: function() {
		"use strict";
		
		var $tis = this;
		
		if ($tis.initialized){
			return;
		}
		
		$tis.initialized = true;
		$tis.construct();
		$tis.events();
	},

	construct: function() {
		"use strict";
		
		var $tis = this;
		
		/**
		 * Navigation
		 */
		$tis.navigation();
		
		/**
		 * Dinamically create the menu for mobile devices
		 */
		$tis.createMobileMenu();
		
		/**
		 * Social stream items navigation
		 */
		$tis.socialStream();
		
		/**
		 * Create Mp3 Player
		 */
		$tis.createMp3Player();
		
		/**
		 * Activate placeholder in older browsers
		 */
		$('input, textarea').placeholder();
		
		/**
		 * Initialize Google Maps and populate with concerts locations
		 */
		$tis.googleMap();
		
		/**
		 * Start FlexSlider
		 */
		$tis.startFlexSlider();
		
		/**
		 * Start NiceScroll
		 */
		$tis.startNiceScroll();
		
		/**
		 * Get latest tweets
		 */
		$tis.getLatestTweets();
		
		/**
		 * Get Instagram feed
		 */
		$tis.getInstagram();
		
		/**
		 * Create PrettyPhoto links
		 */
		$("a[data-gal^='prettyPhoto']").prettyPhoto({theme:'beat', hook:'data-gal'});
		
		/**
		 * Get Facebook feed
		 */
		$tis.getFacebook();
	},

	events: function() {
		"use strict";
		var $tis = this;
		
		/**
		 * Check if browser is a mobile device
		 */
		$tis.isMobile();
		
		/**
		 * Functions called on window resize
		 */
		$tis.windowResize();
		
		/**
		 * Resize logo on window resize
		 */
		$tis.resizeLogo();
		
		/**
		 * Overlay open/close buttons
		 */
		$tis.overlayButtons();
		
		/**
		 * Resize embed videos
		 */
		$tis.resizeVideos();
		
		/**
		 * Contact form submit
		 */
		$tis.contactForm();
		
		/**
		 * Capture buttons click event
		 */
		$tis.buttons();
		
	},
	
	navigation: function() {
		"use strict";
		
		$('#nav li a, .nav-logo').bind('click',function(event){
			var navActive = $(this);
			var scroll = 0;
			
			if (navActive.attr('href') !== "#home"){
				scroll = $(navActive.attr('href')).offset().top -65;
			}
			
			$('html, body').stop().animate({
				scrollTop: scroll
			}, 1500,'easeInOutExpo', function(){
				navActive.blur();
			});
			
			event.preventDefault();
		});
		
		$('.nav-section').waypoint('sticky', {
			handler: function(dir) {
				if(dir === "down"){
					$(this).css({opacity:0});
					$(this).animate({opacity:1}, 500);
				}
			},
			offset: -250
		});

		$('#logo').waypoint(function(dir) {
				if(dir === "down"){
					$(".nav-section .nav-logo").css({visibility: 'visible', opacity:1});
				} else {
					$(".nav-section .nav-logo").css({visibility: 'hidden', opacity:0});
				}
		}, { offset: -65 });
			
		$("section").waypoint(function(direction) {
			var tis = $(this);
			if (direction === "up"){ tis = tis.prev(); }
			$("#nav a").removeClass("active");
            var id = tis.attr("id");
            if(id) {
                $('nav a[href="#' + id.split("-")[0] + '"]').addClass("active");
            }
		}, { offset: '50%' });
	},
	
	createMobileMenu: function(w) {
		"use strict";
		var $tis = this;
		
		if ( w !== null ){
			w = $(window).innerWidth();
		}
		
		if (w <= 751 && !$tis.mobMenuFlag) {
			var select = document.createElement('select');
			var first = document.createElement('option');

			first.innerHTML = 'Menu';
			first.setAttribute('selected', 'selected');
			select.setAttribute('id', 'mobile-nav');
			select.appendChild(first);

			var nav = document.getElementById('nav');
			var loadLinks = function(element, hyphen, level, firstSkipped) {

				var e = element;
				var children = e.children;

				for(var i = 0; i < e.children.length; ++i) { //skipping first child

					var currentLink = children[i];

					switch(currentLink.nodeName) {
						case 'A':
                            if(firstSkipped) {
                                var option = document.createElement('option');
                                option.innerHTML = (level++ < 1 ? '' : hyphen) + currentLink.innerHTML;
                                option.value = $(currentLink).attr('href');
                                select.appendChild(option);
                            } else {
                                firstSkipped = true
                            }
							break;
						default:
							if(currentLink.nodeName === 'UL') {
								if (level >= 2 ){
									hyphen += hyphen;
								}
							}
							firstSkipped = loadLinks(currentLink, hyphen, level, firstSkipped);
							break;
					}
				}
                
                return firstSkipped;
			};

			loadLinks(nav, '- ', 0, false);

			nav.appendChild(select);

			var mobileNavChange = function(navActive) {
				var scroll = 0;
					
				if (navActive !== "#home" && navActive !== "Menu"){
					scroll = $(navActive).offset().top -65;
				}
				
				$('html, body').stop().animate({
					scrollTop: scroll
				}, 1500,'easeInOutExpo');
			};
			
			var mobileNav = document.getElementById('mobile-nav');

			if(mobileNav.addEventListener) {
				mobileNav.addEventListener('change', function () {
					mobileNavChange(mobileNav.options[mobileNav.selectedIndex].value);
				});
			} else if(mobileNav.attachEvent) {
				mobileNav.attachEvent('onchange', function () {
					mobileNavChange(mobileNav.options[mobileNav.selectedIndex].value);
				});
			} else {
				mobileNav.onchange = function () {
					mobileNavChange(mobileNav.options[mobileNav.selectedIndex].value);
				};
			}
			
			$tis.mobMenuFlag = true;
		}
	},
	
	socialStream: function() {
		"use strict";
		var $tis = this;
		
		var initialItems = 6,
			items = $('#social-stream-items li'),
			numItems = items.length,
			numPages = Math.ceil(numItems/initialItems);
		
		//Create navigation bullets
		var nav = document.createElement('ol');
			
		nav.setAttribute('id', 'social-stream-nav');
		
		for(var i=0; i<numPages; i++){
			var elem = document.createElement('li');
			elem.setAttribute('data-filter', 'page'+(i+1) );
			nav.appendChild(elem);
		}
		
		$('#social-stream').after(nav);
		
		
		//Add data-filter-class to each social stream item
		var page = 1;
		items.each(function(i){
			if ( i+1 > page * initialItems){
				page++;
			}
			
			this.setAttribute('data-filter-class', '["page' + page + '"]');
		});
		
		
		//Items show animation
		var itemsAnim = function(activeFilter){
				$('#social-stream').addClass('hideShadow');
				
				items.filter(function() { 
					return $(this).data('filter-class').toString() === activeFilter.toString();
				}).each(function(i){
					var $this = $(this);
					if ( i<initialItems ){					
						setTimeout(function() {
							$this.addClass("enabled");
						}, 200*i);
					}
				});
				
				setTimeout(function() {
					$('#social-stream').removeClass('hideShadow');
				}, 200*(initialItems-1));
			};
		
	
		// Prepare layout options.
		$tis.wookOptions = {
			autoResize: true, // This will auto-update the layout when the browser window is resized.
			container: $('#social-stream'), // Optional, used for some extra CSS styling
			offset: 1, // Optional, the distance between grid items
			itemWidth: 350 // Optional, the width of a grid item
		};

		// Get a reference to your grid items.
		$tis.wookHandler = $('#social-stream-items li');
		var filters = $('#social-stream-nav li');

		// Call the layout function.
		$tis.wookHandler.wookmark($tis.wookOptions);

		/**
		 * When a filter is clicked, toggle it's active state and refresh.
		 */
		var itemFilter;
		var onClickFilter = function(event) {
			var item = $(event.currentTarget),
				activeFilters = [];
			
			itemFilter = item.data('filter');
			
			if (!item.hasClass('active')) {
				filters.removeClass('active');
			} else {
				return false;
			}
			item.toggleClass('active');

			// Filter by the currently selected filter
			if (item.hasClass('active')) {
				
				items.filter(function() { 
					return $(this).data('filter-class').toString() !== itemFilter.toString();
				}).removeClass("enabled");
				
				activeFilters.push(itemFilter);
			}

			$tis.wookHandler.wookmarkInstance.filter(activeFilters);
			itemsAnim(itemFilter);
			$.waypoints('refresh');
		};

		// Capture filter click events.
		filters.click(onClickFilter);
	
		$("#social-stream-nav li").eq(0).click();
	},
	
	createMp3Player: function() {
		"use strict";
		
		$(document).ready(function(){
			$('#music-player').ttwMusicPlayer(myPlaylist, {
				autoPlay:true,
				currencySymbol:'',
				buyText:'',
				tracksToShow:1000,
				/*ratingCallback:function(index, playlistItem, rating){
					//some logic to process the rating, perhaps through an ajax call
				},*/
				jPlayer:{
					swfPath:'js/jplayer'
				}
			});
		});
	},
	
	getEventDate: function(event) {
        var result =
        '<div data-translatable>' +
            this.enWeekDays[event.weekDay - 1] + ' ' + event.day + ' ' + this.enMonths[event.month - 1] + ', ' + event.year + ' at ' + event.hour + ':' + event.minute + ' *' +
            this.itWeekDays[event.weekDay - 1] + ' ' + event.day + ' ' + this.itMonths[event.month - 1] + ' ' + event.year + ' ore ' + event.hour + ':' + event.minute + ' *' +
            event.year + '年 ' + event.month + '月 ' + event.day + '日' + this.jpnWeekDays[event.weekDay - 1] + event.hour + '：' + event.minute + '開演' +
        '</div>';
        return result;
    },
    
	googleMap: function() {
		"use strict";
		
		if ( typeof myEvents === 'undefined' || myEvents.length === 0){
			return false;
		}
		
		var $tis = this;
		var color = "#f06363",
			hidePastEvents = false; //If true, the events that took place won't show on the list of concerts
									//and its marker on the map won't be created
		
		var styles = [
			{
				stylers: [
					{ hue: color },
					{ saturation: -50 },
					{ lightness: -5}

				]
			},
			{
				featureType: "administrative",
				elementType: "labels.text.fill",
				stylers: [
					{ saturation: 20 },
					{ lightness: -70}
				]
			},
			{
				featureType: "poi",
				elementType: "geometry.fill",
				stylers: [
					{ hue: color },
					{ saturation: 30 },
					{ lightness: -25}
				]
			},

			{
				featureType: "landscape",
				elementType: "geometry",
				stylers: [
					{ saturation: 30 },
					{ lightness: -15 }
				]
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{ lightness: 40 }
				]
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{ hue: color },
					{ saturation: 15 },
					{ lightness: 20 }

				]
			},
			
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [
					{ hue: color },
					{ saturation: 25 },
					{ lightness: -40}
				]
			},
			{
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [
					{ saturation: 10 },
					{ lightness: -20}
				]
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [
					{ hue: color },
					{ saturation: 30 },
					{ lightness: -30}
				]
			}
		];
		
		var styledMap = new google.maps.StyledMapType(styles, {name: "Beat"});
		
		var dates = {
			convert:function(d) {
				return (
					d.constructor === Date ? d :
					d.constructor === Array ? new Date(d[0],d[1],d[2]) :
					d.constructor === Number ? new Date(d) :
					d.constructor === String ? new Date(d) :
					typeof d === "object" ? new Date(d.year,d.month-1,d.day,d.hour,d.minute) :
					NaN
				);
			},
			compare:function(a,b) {
				return (
					isFinite(a=this.convert(a).valueOf()) &&
					isFinite(b=this.convert(b).valueOf()) ?
					(a>b)-(a<b) :
					NaN
				);
			}
		};
			
		for(var i=0; i < myEvents.length; i++){
			myEvents[i].date = new Date(myEvents[i].year, myEvents[i].month, myEvents[i].day, myEvents[i].hour, myEvents[i].minute, 0);
		}
		
		function sortAsc(a, b) {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		}
		
		myEvents.sort(sortAsc);
		
		var upcomingConcert = myEvents[0];
		
		var currentdate = new Date();

		for(i = 0; i < myEvents.length; i++){
			var concert = myEvents[i];
			
			if(dates.compare(concert,currentdate) == -1 && hidePastEvents){
				delete myEvents[i];
			}
			
			if (dates.compare(concert,currentdate) == 1 ){
				upcomingConcert = myEvents[i];
				break;
			}
		}
		
		$(".ccounter").ccountdown(upcomingConcert.year,upcomingConcert.month,upcomingConcert.day,upcomingConcert.hour,upcomingConcert.minute);
        $("#events-info .date").html($tis.getEventDate(upcomingConcert));
		$("#events-info .location").html(upcomingConcert.location);
		if ( typeof upcomingConcert.buyTicketURL !== 'undefined' && upcomingConcert.buyTicketURL != "" ){
			$("#events-info #buyTicketsBtn").attr('href', upcomingConcert.buyTicketURL);
			$("#events-info #buyTicketsBtn").show();
		} else {
			$("#events-info #buyTicketsBtn").hide();
		}
		
		$tis.myLatlng = new google.maps.LatLng(upcomingConcert.latitude, upcomingConcert.longitude-0.01);
		
		var mapOptions = {
			center:  $tis.myLatlng,
			zoom: 6,
			scrollwheel: false,
			panControl:false,
			mapTypeControl:false,
			zoomControl:true,
			zoomControlOptions: {
				position:google.maps.ControlPosition.RIGHT_CENTER
			}
		};
		
		$tis.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		$tis.map.mapTypes.set('map_style', styledMap);
		$tis.map.setMapTypeId('map_style');

        google.maps.event.addListenerOnce($tis.map, 'idle', function(){
            translate();
        });
        
		var createMarker = function(obj){
			var lat = obj.latitude, 
				lng = obj.longitude,
				year = obj.year,
				day = obj.day,
				info = obj.infoWindow;
			
			var infowindow = new google.maps.InfoWindow({
				content: '<div class="infoWindow">' + info + '</div>'
			});
			
			var marker = new RichMarker({
				position: new google.maps.LatLng(lat, lng),
				map: $tis.map,
				anchorPoint: new google.maps.Point(29,-68),
				shadow: 'none',
				content: 
                '<div class="marker" data-translatable>' +
                    '<span>' +
                        '<div class="day">' + day +' </div>' +
                        '<div class="month">' + $tis.enMonths[obj.month - 1].slice(0,3) +' </div>' +
                        '<div class="year">' + year +' </div>' +
                    '</span>' +
                    '<span>' +
                        '<div class="day">' + day +' </div>' +
                        '<div class="month">' + $tis.itMonths[obj.month - 1].slice(0,3) +' </div>' +
                        '<div class="year">' + year +' </div>' +
                    '</span>' +
                    '<span>' +
                        '<div class="day">' + year +' </div>' +
                        '<div class="month">' + obj.month +' / ' + obj.day +' </div>' +
                        '<div class="year">' + $tis.jpnWeekDays[obj.weekDay - 1] +' </div>' +
                    '</span>' +
                '</div>'
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open($tis.map, marker);
                translate();
			});
		};
		
		for(i = myEvents.length-1; i >= 0; i--){
			if ( myEvents[i] == undefined ){
				continue;
			}
			
			var event = myEvents[i];
			createMarker(event);
			$('#complete-list #list').prepend(
                '<div class="completeInfo" data-id="' + i + '">' +
                    '<div class="completeDate">' +
                        $tis.getEventDate(event) +
                    '</div>' +
                    '<div class="completeLocation">' +
                        event.location +
                    '</div>' +
                '</div>'
            );
		}
	},
	
	startFlexSlider:function() {
		"use strict";
		
		$('.flexslider').flexslider({
			animation: "slide",
			maxItems: 1,
			prevText: "",
			nextText: "",
			controlNav: false,
			before: function(slider) {
						slider.slides.eq(slider.currentSlide).animate({opacity:0},200);
						slider.slides.eq(slider.animatingTo).css({opacity:0}).animate({opacity:1},800);
					}
		});
	},
	
	startNiceScroll:function() {
		"use strict";
		
		$(document).ready(function(){
			$("html").niceScroll({
				styler:"fb",
				autohidemode:true,
				cursorcolor:"#c2c2c2",
				cursoropacitymax:"0.7",
				cursorborder:"0px solid #000",
				horizrailenabled:false,
				zindex:"1001"
			});
			
			if (!$.browser.mobile) {
				$("#music-player .tracklist").niceScroll({
					cursorcolor:"#c2c2c2", 
					cursoropacitymax:"0.7",
					cursorborder:"0px solid #000",
					railpadding:{top:0,right:3,left:0,bottom:0}
				});
			}
			
			$("#complete-list").niceScroll({
				cursorcolor:"#c2c2c2", 
				cursoropacitymax:"0.7",
				cursorborder:"0px solid #000",
				railpadding:{top:0,right:3,left:0,bottom:0},
				zindex:"999"
			});
			
			$(".gallery-scroller").niceScroll({
				cursorcolor:'#f06363',
				cursorwidth:'20px',
				background:'#1F2326',
				cursorborder:'0px solid #1F2326',
				zindex:'999',
				autohidemode:false,
				enablemousewheel:false
			});
		});
		
		$("#music-player").one("mouseenter mouseleave", function(){
			$("#music-player .tracklist").getNiceScroll().resize();
		});
		
		$("#complete-list").on("mouseenter mouseleave", function(){
			$("#complete-list").getNiceScroll().resize();
		});
	},
	
	getLatestTweets: function() {
		"use strict";
		
		var username = 'MNakanomori', //replace with your own Twitter username
			bandName = 'Megumi';	//replace with your Band Name
			
		$('.tweet').html('<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
		
		var twitterBox = document.createElement('div');
		twitterBox.setAttribute('id', 'twitter-box');
		
		$('body').append(twitterBox);
		
		$("#twitter-box").css({display:'none'});
		
		try {
			$("#twitter-box").tweet({
				username: username,
				modpath: 'twitter/',
				count: 8,
				loading_text: 'Loading tweets...',
				template: '<h3>' + bandName + ' <a href="http://twitter.com/{screen_name}" target="_blank">@{screen_name}</a><br/><a href="http://twitter.com/{screen_name}/statuses/{tweet_id}/" target="_blank" class="time">{tweet_relative_time}</a></h3><div class="text">{text}</div>'
			});
		} catch(err) {
			console.log("Your twitter account is misconfigured.");
		}
		
		var index = 0,
			len = $(".tweet").length;
		
		$("#twitter-box li").each(function(){
			if (index < len ){
				$(".tweet").eq(index).html($(this).html());
				index++;
			} else {
				return false;
			}
		});
		
		$("#twitter-box").remove();
	},
	
	getInstagram:function() {
		"use strict";
		
		$('.instagram').html('<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
		
		$.ajax({
			type: 'post',
			url: 'instagram/instagram.php',
			contentType: 'application/json',
			dataType: 'json',
			success: function(json){
				var feed = $.parseJSON(json),
					len = $(".instagram").length,
					index = 0,
					feedLen = 0;
				
				if( feed !== '' ){
					for(var key in feed.data){
						if (feed.data.hasOwnProperty(key)) {
							feedLen++;
						}
					}
				}
						
				for (var i = 0; i < feedLen; i++){
					if (index < len ){
						$(".instagram").eq(index).html('<a href="' + feed.data[i].link + '" target="_blank"><img src="' + feed.data[i].images.standard_resolution.url + '" alt="" /></a>');
						index++;
					} else {
						return false;
					}
				}
			},
			error: function(){
				//console.log("Error getting Instagram feed");
			}
		});
	},
	
	getFacebook:function() {
		"use strict";
		
		function timeDifference(current, previous) {

			var msPerMinute = 60 * 1000;
			var msPerHour = msPerMinute * 60;
			var msPerDay = msPerHour * 24;
			var msPerMonth = msPerDay * 30;
			var msPerYear = msPerDay * 365;

			var elapsed = current - previous;
			
			if (elapsed < msPerMinute) {
				 return Math.round(elapsed/1000) + ' seconds ago';   
			}

			else if (elapsed < msPerHour) {
				 return Math.round(elapsed/msPerMinute) + ' minutes ago';   
			}

			else if (elapsed < msPerDay ) {
				 return Math.round(elapsed/msPerHour ) + ' hours ago';   
			}

			else if (elapsed < msPerMonth) {
				return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
			}

			else if (elapsed < msPerYear) {
				return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
			}

			else {
				return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
			}
		}
		
		function getPictureUrl(id, link) {
			if ( typeof id !== 'undefined'){
				return '<img src="https://graph.facebook.com/' + id + '/picture?type=normal" alt="" />';
            } else if ( typeof link !== 'undefined'){
				var url,
					aux = link.match(/url=([^&]+)/);
				if ( aux != null ){
					url = decodeURIComponent(aux[1]);
				} else {
					url = link;
				}
				
				url = url.replace(/_s.png/gi,"_n.png");
				url = url.replace(/_s.jpg/gi,"_n.jpg");
				url = url.replace(/_s.jpeg/gi,"_n.jpeg");
				url = url.replace(/_s.gif/gi,"_n.gif");
				
				return '<img src="' + url + '" alt="" />';
			} else {
				return "";
			}
		}
		
		function getLinkUrl(id, link) {
			if ( link.match(/www.facebook.com/g) ){				
				return link;
			} else {
				return "https://www.facebook.com/" + id;
			}
		}
		
		$('#social-stream .facebook').html('<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
		
		var xhr = $.ajax({
			type: 'post',
			url: 'facebook/getfeed.php',
			contentType: 'application/json',
			dataType: 'json',
			success: function(json){
				
				if (json == null){ 
					console.log("Error accessing Facebook feed");
				} else {
					var feed = json.feed,
						len = $(".facebook").length,
						index = 0,
						feedLen = json.feed.data.length,
						message = '',
						time = new Date().getTime();
					
					for (var i = 0; i < feedLen; i++){
						if (index < len ){
							if (feed.data[i].type === 'link' || feed.data[i].type === 'photo' || feed.data[i].type === 'video'){
								
								if ( feed.data[i].message != undefined ){
									message = feed.data[i].message;
								} else  if ( feed.data[i].story != undefined ){
									message = feed.data[i].story;
								} else  if ( feed.data[i].description != undefined ){
									message = feed.data[i].description;
								}
								
								if ( message.length > 300 ){
									message = message.slice(0,300) + "...";
								}
								
								$("#social-stream .facebook").eq(index).html('<a href="' + getLinkUrl(feed.data[i].id, feed.data[i].link) + '" target="_blank">' + getPictureUrl(feed.data[i].object_id, feed.data[i].picture) + '</a><div class="text"><h3>' + feed.data[i].from.name + ' &nbsp;<span>' + timeDifference(time, feed.data[i].created_time*1000) + '</span></h3>' + message + '</div>');
								index++;
							}
						} else {
							return false;
						}
					}
				}
			},
			error: function(){
				console.log("Error getting Facebook feed");
			}
		});
	},
	
	windowResize:function() {
		"use strict";
		
		var $tis = this;
		
		$(window).resize(function() {
			var w = $(window).innerWidth();
			
			$tis.resizeLogo(w);
			$tis.createMobileMenu(w);
		});
	},
	
	resizeLogo:function(w) {
		"use strict";
		
		if ( w !== null ){
			w = $(window).innerWidth();
		}
		
		$("#logo").css({maxWidth: w + 'px'});
	},

    openItemsOverlay: function(element) {
        var $tis = this;
		$tis.openItemOverlay(element, 'news-details', '#news-overlay');
		$tis.openItemOverlay(element, 'collaboration-details', '#collaborations-overlay');
    },

	openItemOverlay: function(element, detailData, overlayId) {
		var $tis = this;
		var details = element.parent().data(detailData) || element.data(detailData) || element.next().data(detailData);
		if ( details !== undefined && details !== null ){
			$tis.populateOverlayItems(details, overlayId);
		}
	},

	overlayButtons: function() {
		"use strict";
		var $tis = this;
		
		$(".open-overlay").click(function(e){
			e.preventDefault();
			
			$tis.openItemsOverlay($(this));

			var page = $("#" + $(this).data('overlay-id'));
			
			$tis.scrollPos = $(window).scrollTop();
			
			var transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				},
				// animation end event name
				transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
				
			if ( transEndEventName === undefined){
				page.addClass('moveFromBottom');
				
				$("#header, section, #footer").hide();
				$("#music-player .tracklist").getNiceScroll().hide();
					
				$('html, body').animate({scrollTop: 0}, 0);
				page.css({position:'absolute'});
			
			} else {
				page.addClass('moveFromBottom').one( transEndEventName, function() {
					$("#header, section, #footer, .nicescroll-rails").hide();
					$(".nicescroll-rails:first").show();
					$("#music-player .tracklist").getNiceScroll().hide();
					
					$('html, body').animate({scrollTop: 0}, 0);
					$(this).css({position:'absolute'});
				});
			}
			
			page.on("mouseenter mouseleave", function(){
				$("html").getNiceScroll().resize();
			});
		});

		$(".close-overlay").click(function(){
			var page = $('.page-overlay');

			page.css({position:'fixed'});

			$("#header, section, #footer, .nicescroll-rails").show();
			$("#music-player .tracklist").getNiceScroll().show();

			$('html, body').animate({scrollTop: $tis.scrollPos}, 0);

			page.removeClass('moveFromBottom');
		});
	},

    populateOtherOverlayItems: function(mainItemId, selector) {
        var $tis = this;
        var otherItems = $(selector + " .other-news");
        otherItems.empty();

        var withDate = true,
            dataField = "data-news-details",
            itemList = orderedNews;
        if(selector.indexOf("collaborations") >= 0) {
            withDate = false;
            dataField = "data-collaboration-details";
            itemList = collaborations;
        }

        var otherCounter = 0;
        itemList.forEach(function(element, index, array){
            if(element.id !== mainItemId) {
                var otherItem = "<li " + (otherCounter > 2 ? "class=\"disabled\"" : "") + " " + dataField + "='" + JSON.stringify([element]) + "'>" +
                                    "<div class=\"other-news-img-wrap\">" +
                                        (withDate ? "<div class=\"date\" data-translatable data-no-cache>" + element.date + "</div>" : "") +
                                        "<img src=\"" + element.imgSmall + "\" alt=\"\" />" +
                                    "</div>" +
                                    "<div class=\"other-news-details\">" +
                                        "<h4 data-translatable data-no-cache>" + element.title + "</h4>" +
                                        "<p data-translatable data-no-cache>" + element.intro + "</p>" +
                                    "</div>" +
                                "</li>";

                otherItems.append(otherItem);
                otherCounter++;
            }
        });

        if(otherCounter > 2) {
            $(".load-more-btn").show();
        } else {
            $(".load-more-btn").hide();
        }

        // Capture Other News element click event.
        $(".other-news li").click(function(){
            $(".page-overlay .progress").css({top: $(window).scrollTop() + $(window).height()/2 + 'px'});
            $(".page-overlay .loading, .page-overlay .progress").show(100);
            $tis.openItemsOverlay($(this));
        });
    },

	populateOverlayItems: function(itemContent, selector) {
		"use strict";
		var $tis = this;
		var itemDetails = typeof itemContent === "string" ? JSON.parse(itemContent) : itemContent;

		$(selector + ' .news-img-wrap .date').html(itemDetails[0].date);
		$(selector + ' .news-img-wrap .title h3').html(itemDetails[0].title);
		$(selector + ' .news-img-wrap img').remove();
		$(selector + ' .news-img-wrap').append('<img src="' + itemDetails[0].imgLarge + '" alt="" />');

        var txtElem = $(selector +' .news-txt');
        txtElem.html("");
	
		if (!itemDetails[0].txt){
			return false;
		}
		
		var aux;
		for(var i=0; i < itemDetails[0].txt.length; i++){
			aux = itemDetails[0].txt[i];
			
			for(var key in aux) {
				if (aux.hasOwnProperty(key)) {
					var value = aux[key];
					
					if ( value !== undefined ){
						switch (key) {
							case 'title':
								txtElem.append('<h3 data-translatable data-no-cache>' + value + '</h3>');
								break;
								 
							case 'txt':
								txtElem.append('<p style="margin-top: 20px" data-translatable data-no-cache>' + value + '</p>');
								break;
								 
							case 'img':
								if(aux.hasOwnProperty('quote')){
									txtElem.append('<img src="' + value + '" alt="" class="right col-sm-6" />');
								} else {
									txtElem.append('<img src="' + value + '" alt="" width="100%" />');
								}
								break;
								 
							case 'quote':
								if(aux.hasOwnProperty('img')){
									txtElem.append('<span class="quote half" data-translatable data-no-cache>' + value + '</span>');
								} else {
									txtElem.append('<span class="quote" data-translatable data-no-cache>' + value + '</span>');
								}
								break;
								 
							case 'vimeo':
								txtElem.append('<div class="center clearfix videoEmbed" style="width:100%;"><iframe src="' + value + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
								break;
								 
							case 'youtube':
								txtElem.append('<div class="center clearfix videoEmbed" style="width:100%;"><iframe src="' + value + '?wmode=opaque" frameborder="0" allowfullscreen></iframe></div>');
								break;
						}
					}
				}
			}
		}

        $tis.populateOtherOverlayItems(itemDetails[0].id, selector);
        translate();
        $tis.resizeVideos();
		$(".page-overlay .loading, .page-overlay .progress").delay(1000).hide(100);
	},
	
	resizeVideos: function(){
		"use strict";
		
		var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
			$fluidEl = $(".videoEmbed");
		
		$allVideos.each(function() {
			var $el = $(this);
			$el.attr('data-aspectRatio', $el.height() / $el.width()).removeAttr('height').removeAttr('width');
		});
		
		$(window).resize(function() {
			var newWidth = $fluidEl.width();
			
			$allVideos.each(function() {
				var $el = $(this);
				$el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
			});
		}).resize();
	},
	
	isMobile: function(){
		"use strict";
		
		(function(){(jQuery.browser=jQuery.browser||{}).mobile=(/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));})(navigator.userAgent||navigator.vendor||window.opera);
	},

    contactForm: function() {
        "use strict";
        var $tis = this;

        $("#contact_send").click(function(e){
            e.preventDefault();

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                name = $('#contact_name').val(),
                email = $('#contact_email').val(),
                subject = $('#contact_subject').val(),
                message = $('#contact_message').val(),
                html = "",
                error = false;

            if(name === ""){
                $('#contact_name').addClass('invalid');
                error = true;
            }else{
                $('#contact_name').removeClass('invalid');
                html = "name=" + name;
            }

            if(email === ""){
                $('#contact_email').addClass('invalid');
                error = true;
            }else if(re.test(email) === false){
                $('#contact_email').addClass('invalid');
                error = true;
            }else{
                $('#contact_email').removeClass('invalid');
                html += "&email="+ email;
            }

            if(subject === ""){
                $('#contact_subject').addClass('invalid');
                error = true;
            }else{
                $('#contact_subject').removeClass('invalid');
                html += "&subject=" + subject;
            }

            if(message === ""){
                $('#contact_message').addClass('invalid');
                error = true;
            }else{
                $('#contact_message').removeClass('invalid');
                html += "&message="+ message;
            }

            var showError = function(){
                var iClass = $('#contact_send i').attr("class");

                $('#contact_send i').removeClass(iClass).addClass('icon-remove').delay(1500).queue(function(next){
                    $(this).removeClass('icon-remove').addClass(iClass);
                    next();
                });
                $('#contact_send').addClass('btn-danger').delay(1500).queue(function(next){
                    $(this).removeClass('btn-danger');
                    next();
                });
            };

            if(!error && !$tis.sendingMail) {
                $tis.sendingMail = true;
                $('#contact_send i').addClass('icon-cog icon-spin');
                $('#contact_send').addClass('disabled');

                $.ajax({
                    type: 'POST',
                    url: 'contact.php',
                    data: html,
                    success: function(msg){
                        $('#contact_send i').removeClass('icon-cog icon-spin');
                        $('#contact_send').removeClass('disabled');

                        if (msg === 'ok'){
                            var iClass = $('#contact_send i').attr("class");

                            $('#contact_send i').removeClass(iClass).addClass('icon-ok').delay(1500).queue(function(next){
                                $(this).removeClass('icon-ok').addClass(iClass);
                                next();
                            });
                            $('#contact_send').addClass('btn-success').delay(1500).queue(function(next){
                                $(this).removeClass('btn-success');
                                next();
                            });
                            $('#form-contact')[0].reset();
                        }else{
                            showError();
                        }

                        $tis.sendingMail = false;
                    },
                    error: function(){
                        $('#contact_send i').removeClass('icon-cog icon-spin');
                        $('#contact_send').removeClass('disabled');

                        showError();
                        $tis.sendingMail = false;
                    }
                });
            } else{
                showError();
            }

            return false;
        });
    },
	
	buttons: function(){
		"use strict";
		var $tis = this;
		
		// Capture 'See Location' Button click event.
		$("#seeLocation").click(function(e){
			e.preventDefault();
			
			$tis.map.setCenter($tis.myLatlng);
			$tis.map.setZoom(14);
		});
		
		// Capture 'Complete List' Button click event.
		$("#complete-list-btn").click(function(){
			$('#complete-list').animate({opacity:1, height:'350px'}, 300).addClass('enabled');
			$('#counter-info, .buttons-area').toggleClass('disabled');
		});
		
		// Capture 'Close Complete List' click event.
		$(".close-complete-list").click(function(){
			$('#complete-list').animate({opacity:0, height:'0px'}, 300, function(){
				$(this).removeClass('enabled');
			});
			$('#counter-info, .buttons-area').toggleClass('disabled');
		});
		
		// Capture 'Complete List' Item click event.
		$(".completeInfo").click(function(){
			var id = parseInt($(this).data('id'), null);
		
			$tis.map.setCenter(new google.maps.LatLng(myEvents[id].latitude, myEvents[id].longitude-0.01));
			$tis.map.setZoom(11);
		});

		// Capture Other News 'Load More' Button click event.
		$(".load-more-btn").click(function(){
			$('.other-news li.disabled').css({display:'inline-block'});
			setTimeout(function() {
				$('.other-news li').removeClass("disabled");
			}, 200);
			$(this).hide(300);
		});
	}
};

Beat.init();