/**
Created by cnohilly on 11/9/2021
 */

class Animal {
	
	
	constructor(name){
		console.log("Created animal: " + name);
		this.name = name;
	}
	
	getNameLength(){
		return this.name.length;
	}
}

class Dog extends Animal {
	constructor(name, height, weight, barkVolume, leashColor){
		super(name,height,weight);
		this.barkVolume = barkVolume;
		this.leastColor = leashColor;
	}
	
	bark(){
		if (this.barkVolume > 50){
			console.log(this.name + " barks loudly!");
		}
		else {
			console.log(this.name + " barks timidly.");	
		}
			
	}
}

class Fish extends Animal {
	constructor(name,height,weight,swimSpeed){
		super(name,height,weight);
		this.swimSpeed = swimSpeed;
	}
	
	swim(){
		if (this.swimSpeed > 50){
			console.log(this.name + " swims quickly!");
		}
		else {
			console.log(this.name + " swims slowly.");
		}
	}
}

var dog = new Dog("Mason",36,60,25,"blue");
console.log(dog.getNameLength());
dog.bark();

var fishone = new Fish("Alpha",0.5,0.2,70);
fishone.swim();
var fishtwo = new Fish("Beta",0.5,0.2,25);
fishtwo.swim();

