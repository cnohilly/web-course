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
	var searchText = (document.getElementsByClassName("my-input"))[0];
	var textArea = (document.getElementsByClassName("my-textarea"))[0];
	var results = document.getElementById("text");
	results.innerHTML = searchText.value;
	results.innerHTML += "\nMessage: " + textArea.text;
}

var hobbies = ["Gaming","Coding","Reading","Music","Streaming"];

hobbies.forEach(function(item,index){
	console.log("I like",item,index);
});

var searchTerm = "Fishing"
if(hobbies.indexOf(searchTerm) >= 0){
	console.log(searchTerm,"is a hobby");
}
else {
	console.log(searchTerm,"is not a hobby");
}