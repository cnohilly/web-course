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

	// Dynamically gets the default Clip-Paths that is used for most Class' UIs
	var defaultUIClipPaths = new Map();
	var uiImages = $('img.ui-image');
	var numElements = uiImages.length;
	for (let i = 0; i < numElements; i++){
		imgClass = uiImages.attr('class').split(" ").pop();
		defaultUIClipPaths.set(imgClass,$('img.'+imgClass).css('clip-path'));
		uiImages.splice(0,1);
	}

	// Used for classes that have a secondary power bar that would offset the UI
	var secondaryPowerUIClipPaths = new Map(defaultUIClipPaths);
	secondaryPowerUIClipPaths.set('unitframes',"polygon(27% 68%, 73% 68%, 73% 76%, 58.5% 76%, 58.5% 72%, 41.5% 72%, 41.5% 76%, 27% 76%)");
	secondaryPowerUIClipPaths.set('weakauras1',"polygon(58.5% 78%, 58.5% 72%, 41.5% 72%, 41.5% 78%)");
	secondaryPowerUIClipPaths.set('weakauras2',"polygon(60% 78%, 60% 82%, 40% 82%, 40% 78%)");

	var currentClass = 'Hunter';

	$('.class-option').on('click',function(e){
		currentClass = $(this)[0].innerText;
		$('.ui-base-image').attr("src","../content/WOWUI-"+currentClass+".jpg");
		$('.ui-image').attr("src","../content/WOWUI-"+currentClass+".jpg");
		switch(currentClass){
			case 'Paladin': for ([key,value] of secondaryPowerUIClipPaths.entries()){
								$('img.'+key).css('clip-path',value);
							}
			break;
			default: 	for ([key, value] of defaultUIClipPaths.entries()){
							$('img.'+key).css('clip-path',value);
						}
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

	// $('.string-option div').append(document.createTextNode("Copied!"));

	$('.string-option').on('click',function(e){
		var stringName = $(this).attr('class').split(" ").pop();
		// $('.string-option.'+stringName+' div').css('display','block').fadeOut(1500);
		var text = $('.string-option.'+stringName)[0].textContent;
		$('.string-option.'+stringName)[0].textContent = "Copied!";
		setTimeout(function(){$('.string-option.'+stringName)[0].textContent=text},2e3);
		try {
			var wagoString = $('script.wago-string.'+stringName+'.'+currentClass.toLowerCase()).attr('src').split("/")[3];
		} catch(error){
			return;
		}
		$('#wago-'+wagoString+" button").click();
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

/*
function wagoCopy(e,o){o=o.code;var t;e&&e.querySelector&&(t=e.querySelector(".clickToCopyWago"));var n=document.createElement("textarea");n.style.cssText="position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:0;outline:none;boxShadow:none;background:transparent",n.value=o,document.body.appendChild(n),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),t&&(t.textContent="Copied!",setTimeout(function(){t.textContent="Click to copy"},3e3)),!0}catch(d){return document.body.removeChild(n),!1}}void 0===window.wagoCopy;var wago=wago||{};wago["crO9UEWH5c"]={"id":"rO9UEWH5c","name":"Dorkk - Hunter - ElvUI Profile","url":"https://wago.io/rO9UEWH5c","theme":{"buttonBG":"#000","buttonHover":"#040404","textColor":"rgba(255,255,255,.87)","logo":"https://media.wago.io/logo/57x57.png","logoHTML":"<a href=\"https://wago.io/rO9UEWH5c\"><img src=\"https://media.wago.io/logo/57x57.png\"></a>"},


"code":"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"};

document.write('<style>#wago-rO9UEWH5c a{display:inline;padding:0 2px;margin:0;border:0}#wago-rO9UEWH5c img{display:inline;padding:0;margin:0;border:0;height:50px}#wago-rO9UEWH5c button{display:inline;padding:4px 16px;min-width: 130px;background-color:#000;cursor:pointer;color:rgba(255,255,255,.87);border:0;text-align:center;vertical-align:top;border-radius:6px}#wago-rO9UEWH5c button:hover{background-color:#040404}#wago-rO9UEWH5c .clickToCopy{display:block;padding:0;margin:0;font-size:10px}#wago-rO9UEWH5c .wagoName{display:block;padding:0;margin:4px 0;font-weight:bold;font-size:13px}</style>');document.write('<span id="wago-rO9UEWH5c" class="wagoEmbed"><a href="https://wago.io/rO9UEWH5c"><img src="https://media.wago.io/logo/57x57.png"></a><button onclick="wagoCopy(this, wago[\'crO9UEWH5c\'])" class="wagoCopyButton"><small class="clickToCopyWago">Click to copy</small><div class="wagoName">Dorkk - Hunter - ElvUI Profile</div></button></span>');

*/