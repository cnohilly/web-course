/**
Created by cnohilly on 11/9/2021
 */

var bestialCD = 899;
var barbedCD = 0;
var barbedCharge = 2;
var frenzy = 0;


for (let i = 15; i < 900; i++){
	if (frenzy > 0){
		frenzy--;
	} else {
		console.log("Frenzy is not active.");
	}
	if(barbedCharge < 2){
		if (barbedCD <= 0){
			console.log("Barbed Shot charge gained at: " + i/10 + " seconds");
			barbedCharge++;
			if(barbedCharge < 2){
				barbedCD = 110;
			}
		} else {
			barbedCD--;
		}
	} else {
		console.log("Two charges of Barbed Shot");
	}
	if (bestialCD <= 0){
		console.log("Bestial CD Reset at " + i/10 + " seconds");
		break;
	} else {
		bestialCD--;
	}
	if (frenzy <= 5){
		if (barbedCharge > 0){
			if(barbedCharge == 2){
				barbedCD = 110;
			}
			frenzy = 80;
			barbedCharge--;
			bestialCD-=120;
			console.log("Barbed Shot casted at " + i/10 + " seconds");
			console.log("Bestial CD at: " + bestialCD + " remaining");
			console.log("Frenzy set to: " + frenzy);
		}
	}

}

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
			console.log("display");
			submenu.fadeIn(300);
		}
		submenu.on('mouseleave',function(){
			console.log("trigger");
			submenu.fadeOut(300);
		});
	});


	$('.ui-image').on('mouseenter',function(e){
		var el = $(e.currentTarget);
		var action = el.attr('id');
		console.log()

		switch(action){
			case "chatbox": 
			case "unitframes": 	$('#chatbox').css("opacity","100%");
								$('#unitframes').css("opacity","100%");
								break;
			case "weakauras1": $('#weakauras1').css("opacity",'100%');
			break;
			case "weakauras2": $('#weakauras2').css("opacity","100%");
			break;
		}
		$('.ui-image').on('mouseleave',function(){
			var leaveAction = $(this).attr('id');
			switch(leaveAction){
				case "chatbox": 
				case "unitframes":	$('#chatbox').css("opacity",initialImageOpacity);
									$('#unitframes').css("opacity",initialImageOpacity);
									break;
				case "weakauras1": $('#weakauras1').css("opacity",initialImageOpacity);
				break;
				case "weakauras2": $('#weakauras2').css("opacity",initialImageOpacity);
				break;
			}
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

