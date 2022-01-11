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
	if (typeof (window.pageYOffset) == "number") {
		top = window.pageYOffset;
	} else if (document.body && document.body.scrollTop) {
		top = document.body.scrollTop;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		top = document.documentElement.scrollTop;
	}
	return top;
}

$(document).ready(function () {


	var initialUIOptionsBackgroundColor = $('#class-section ul li').css("background-color");
	var initialUIOptionsTextColor = $('#class-section ul li').css("color");
	var hoveredUIOptionsBackgroundColor = "white";
	var hoveredUIOptionsTextColor = "black";

	var el = document.getElementById('text');

	$(window).scroll(function (e) {
		if (window.pageYOffset >= 100) {
			$('#navigation-bar').css("position", "fixed");
		} else {
			$('#navigation-bar').css("position", "relative");
		}
	});

	$('#main-header').find('h1').addClass("Test");

	$('[data-trigger="dropdown"]').on('mouseenter', function () {
		var submenu = $(this).parent().find('.submenu');
		submenu.fadeIn(300);

		$('.profile-menu').on('mouseleave', function () {
			submenu.fadeOut(300);
		});
	});

	$('.navigation-button').on('mouseenter', function (e) {
		var submenu = $(this).parent().parent().find('.navigation-submenu');
		if (submenu.css("display") == "none") {
			submenu.fadeIn(300);
		}
		submenu.on('mouseleave', function () {
			submenu.fadeOut(300);
		});
	});

	$('.class-option').on('mouseenter', function (e) {
		$(this).css({ "background-color": hoveredUIOptionsBackgroundColor, "color": hoveredUIOptionsTextColor });
		$('.class-option').on('mouseleave', function () {
			$(this).css({ "background-color": initialUIOptionsBackgroundColor, "color": initialUIOptionsTextColor });
		});
	});

	// Dynamically gets the default Clip-Paths that is used for most Class' UIs
	var defaultUIClipPaths = new Map();
	var uiImages = $('img.ui-image');
	var numElements = uiImages.length;
	for (let i = 0; i < numElements; i++) {
		imgClass = uiImages.attr('class').split(" ").pop();
		defaultUIClipPaths.set(imgClass, $('img.' + imgClass).css('clip-path'));
		uiImages.splice(0, 1);
	}

	// Used for classes that have a secondary power bar that would offset the UI
	var secondaryPowerUIClipPaths = new Map(defaultUIClipPaths);
	secondaryPowerUIClipPaths.set('unitframes', "polygon(27% 68%, 73% 68%, 73% 76%, 58.5% 76%, 58.5% 72%, 41.5% 72%, 41.5% 76%, 27% 76%)");
	secondaryPowerUIClipPaths.set('weakauras1', "polygon(58.5% 78%, 58.5% 72%, 41.5% 72%, 41.5% 78%)");
	secondaryPowerUIClipPaths.set('weakauras2', "polygon(60% 78%, 60% 82%, 40% 82%, 40% 78%)");

	var currentClass = 'Hunter';

	$('.class-option').on('click', function (e) {
		currentClass = $(this)[0].innerText;
		$('.ui-base-image').attr("src", "../content/WOWUI-" + currentClass + ".jpg");
		$('.ui-image').attr("src", "../content/WOWUI-" + currentClass + ".jpg");
		switch (currentClass) {
			case 'Paladin': for ([key, value] of secondaryPowerUIClipPaths.entries()) {
				$('img.' + key).css('clip-path', value);
			}
				break;
			default: for ([key, value] of defaultUIClipPaths.entries()) {
				$('img.' + key).css('clip-path', value);
			}
				break;
		}
	});

	$('.ui-image, .string-option').on('mouseenter', function (e) {
		var el = $(e.currentTarget);
		var classes = el.attr('class').split(" ");
		$("img." + classes[1]).css("opacity", 1);
		$("li." + classes[1]).css({ "background-color": hoveredUIOptionsBackgroundColor, "color": hoveredUIOptionsTextColor });

		$('.ui-image, .string-option').on('mouseleave', function () {
			$("img." + classes[1]).css("opacity", 0);
			$("li." + classes[1]).css({ "background-color": initialUIOptionsBackgroundColor, "color": initialUIOptionsTextColor });
		});
	});


	$('.string-option').on('click', function (e) {
		var stringName = $(this).attr('class').split(" ").pop();
		var text = $('.string-option.' + stringName)[0].textContent;
		$('.string-option.' + stringName)[0].textContent = "Copied!";
		setTimeout(function () { $('.string-option.' + stringName)[0].textContent = text }, 2e3);
		try {
			var wagoString = $('script.wago-string.' + stringName + '.' + currentClass.toLowerCase()).attr('src').split("/")[3];
		} catch (error) {
			return;
		}
		$('#wago-' + wagoString + " button").click();
	});

	$('#prepend, #append, #replace').on('click', function (e) {
		var el = $(e.currentTarget);
		var action = el.attr('id');
		var content = $('#edit-text').val();
		console.log(content);

		switch (action) {
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
