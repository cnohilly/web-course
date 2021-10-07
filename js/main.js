/**
Created by cnohilly on 10/4/2021
 */

var isPremiumUser = false;

if(isPremiumUser){
	console.log("Thanks for being a loyal customer!");
} else {
	console.log("Please consider becoming a Premium User!");
}

var topStories = document.getElementById("top-stores");
var subscribeButton = document.getElementById("subscribe_button");
subscribeButton.addEventListener("click",buttonClicked);

function buttonClicked(){
	topStories.set
	isPremiumUser = true;
	console.log("Thank you for becoming a Premium User!");
	subscribeButton.remove();
}


