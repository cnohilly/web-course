/**
Created by cnohilly on 11/8/2021
 */

var numbers = [43,56,601,100,45,10,58,34];

var words = ["Apple","Pear","Coconut","Pizza","Hamburger","Banana"];

var newNumbers = [3,8,7,9,6,4,1,0,18,5,14,2,19,16,11,20,10,15,17,13];
var sortedNumbers = newNumbers.sort(function(a,b){return a-b});

function findMissing(nums){
	console.log("Starting list: " + nums);
	for (let i = 0; i < nums.length; i++){
		console.log("Checking for: " + i + ". Index is: " + nums.indexOf(i));
		if (nums.indexOf(i) == -1){
			return i + " is the missing number from the list.";
		}
		
	}
	return "No numbers are missing from the list.";
}

console.log(findMissing(newNumbers));

function sortedFindMissing(nums){
	console.log("Starting list: " + nums);
	sorted = nums.sort(function(a,b){return a-b});
	console.log("Sorted list: " + sorted);
	for (let i = 0; i < sorted.length; i++){
		console.log("Checking for index: " + i + ". Number is: " + sorted.indexOf(i));
		if (nums.indexOf(i) != i){
			return i + " is the missing number from the list.";
		}
		
	}
	return "No numbers are missing from the list.";
}

console.log(sortedFindMissing(newNumbers));