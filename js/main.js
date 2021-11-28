/**
Created by cnohilly on 11/9/2021
 */

// var bestialCD = 899;
// var barbedCD = 0;
// var barbedCharge = 2;
// var frenzy = 0;


// for (let i = 15; i < 900; i++){
// 	if (frenzy > 0){
// 		frenzy--;
// 	} else {
// 		console.log("Frenzy is not active.");
// 	}
// 	if(barbedCharge < 2){
// 		if (barbedCD <= 0){
// 			console.log("Barbed Shot charge gained at: " + i/10 + " seconds");
// 			barbedCharge++;
// 			if(barbedCharge < 2){
// 				barbedCD = 110;
// 			}
// 		} else {
// 			barbedCD--;
// 		}
// 	} else {
// 		console.log("Two charges of Barbed Shot");
// 	}
// 	if (bestialCD <= 0){
// 		console.log("Bestial CD Reset at " + i/10 + " seconds");
// 		break;
// 	} else {
// 		bestialCD--;
// 	}
// 	if (frenzy <= 5){
// 		if (barbedCharge > 0){
// 			if(barbedCharge == 2){
// 				barbedCD = 110;
// 			}
// 			frenzy = 80;
// 			barbedCharge--;
// 			bestialCD-=120;
// 			console.log("Barbed Shot casted at " + i/10 + " seconds");
// 			console.log("Bestial CD at: " + bestialCD + " remaining");
// 			console.log("Frenzy set to: " + frenzy);
// 		}
// 	}

// }

function scrolltop() {
	var top = 0;
	if (typeof(window.pageYOffset) == "number") {
	  top = window.pageYOffset;
	} else if (document.body && document.body.scrollTop) {
	  top = document.body.scrollTop;
	} else if (document.documentElement && document.documentElement.scrollTop) {
	  top = document.documentElement.scrollTop;
	}
	return top;
  }

$(document).ready(function(){
	

	var initialImageOpacity = $('.ui-image').css("opacity");
	var initialUIOptionsBackgroundColor = $('#class-section ul li').css("background-color");
	var initialUIOptionsTextColor = $('#class-section ul li').css("color");
	var hoveredUIOptionsBackgroundColor = "white";
	var hoveredUIOptionsTextColor = "black";

	var el = document.getElementById('text');

	$(window).scroll(function(e){
		if(window.pageYOffset >= 100){
			$('#navigation-bar').css("position","fixed");
		} else {
			$('#navigation-bar').css("position","relative");
		}
	});

	$('#main-header').find('h1').addClass("Test");

	$('[data-trigger="dropdown"]').on('mouseenter',function(){
		var submenu = $(this).parent().find('.submenu');
		submenu.fadeIn(300);

		$('.profile-menu').on('mouseleave',function(){
			submenu.fadeOut(300);
		});
	});
	
	$('.navigation-button').on('mouseenter',function(e){
		var submenu = $(this).parent().parent().find('.navigation-submenu');
		if(submenu.css("display") == "none"){
			submenu.fadeIn(300);
		}
		submenu.on('mouseleave',function(){
			submenu.fadeOut(300);
		});
	});
 
	$('.class-option').on('mouseenter',function(e){
		$(this).css({"background-color":hoveredUIOptionsBackgroundColor, "color":hoveredUIOptionsTextColor});
		$('.class-option').on('mouseleave',function(){
			$(this).css({"background-color":initialUIOptionsBackgroundColor, "color":initialUIOptionsTextColor});
		});
	});

	var baseUIPaths = new Map();
	baseUIPaths.set('chatbox',$('img.chatbox').css('clip-path'));
	baseUIPaths.set('unitframes',$('img.unitframes').css('clip-path'));
	baseUIPaths.set('weakauras1',$('img.weakauras1').css('clip-path'));
	baseUIPaths.set('weakauras2',$('img.weakauras2').css('clip-path'));

	$('.class-option').on('click',function(e){
		var className = $(this)[0].innerText;
		console.log(className);
		$('.ui-base-image').attr("src","../content/WOWUI-"+className+".jpg");
		$('.ui-image').attr("src","../content/WOWUI-"+className+".jpg");
		switch(className){
			case 'Paladin': $('img.unitframes').css('clip-path',"polygon(27% 68%, 73% 68%, 73% 75%, 58.5% 75%, 58.5% 72%, 41.5% 72%, 41.5% 75%, 27% 75%)");
							$('img.weakauras1').css('clip-path',"polygon(58.5% 78%, 58.5% 72%, 41.5% 72%, 41.5% 78%)");
							$('img.weakauras2').css('clip-path',"polygon(60% 78%, 60% 82%, 40% 82%, 40% 78%)")
			break;
			default: 	$('img.unitframes').css('clip-path',baseUIPaths.get('unitframes'));
						$('img.weakauras1').css('clip-path',baseUIPaths.get('weakauras1'));
						$('img.weakauras2').css('clip-path',baseUIPaths.get('weakauras2'));
			break;
		}
	});

	$('.ui-image, .string-option').on('mouseenter',function(e){
		var el = $(e.currentTarget);
		var classes = el.attr('class').split(" ");
		$("img." + classes[1]).css("opacity",1);
		$("li." + classes[1]).css({"background-color":hoveredUIOptionsBackgroundColor, "color":hoveredUIOptionsTextColor});

		$('.ui-image, .string-option').on('mouseleave',function(){
			$("img." + classes[1]).css("opacity",0);
			$("li." + classes[1]).css({"background-color":initialUIOptionsBackgroundColor, "color":initialUIOptionsTextColor});
		});
	});

	$('#prepend, #append, #replace').on('click', function(e){
		var el = $(e.currentTarget);
		var action = el.attr('id');
		var content = $('#edit-text').val();
		console.log(content);

		switch(action){
			case "prepend": console.log("Prepend");
			$('#main-text').prepend('<p>' + content + '</p>');
			break;
			case "append": console.log("Append");
			$('#main-text').append('<p>' + content + '</p>');
			break;
			case "replace": console.log("Replace");
			$('#main-text').html('<p>' + content + '</p>');
			break;
			default: console.log("Nothing happened");
			break;
		}

		$('#edit-text').val('');
	});



});

