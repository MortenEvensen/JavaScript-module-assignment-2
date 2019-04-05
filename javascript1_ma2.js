//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function footballTeam () {
    this.team = "Manchester United"
}        

footballTeam.prototype.foot = function() {
    console.log("My favorite football team is " + this.team);
}        
 
var football = new footballTeam();
football.foot();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbersArray = [1,2,3,4,5,6,7,8,9,10];
var fithNumberSlice = numbersArray.slice(4,5);
console.log(fithNumberSlice);

//3. Delete the last number in the array that you created above.

numbersArray.pop();
console.log(numbersArray);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function strawberryVsBananas(speech) {
speech = speech.replace(/strawberry/g, "banana");
speech = speech.replace(/Strawberry/g, "Banana");
speech = speech.replace(/strawberries/g, "bananas");
speech = speech.replace(/Strawberries/g, "Bananas");    
return speech;
}        
        
var textAboutFruit = strawberryVsBananas("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.");

console.log(textAboutFruit);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var fourFootballTeams = ["Manchester United", "Real Madrid", "Juventus", "Porto"];

console.log(fourFootballTeams);
        
function replaceFootballWithCars() {
    fourFootballTeams.splice(0, 4, "Volvo", "Mercedes", "Toyota", "BMW");
    console.log(fourFootballTeams);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var threePeople = [
    {
        name: "Bob",
        age: 43,
        hobby: "fishing"
    },
    {
        name: "Martin",
        age: 24,
        hobby: "football"
    },
    {
        name: "Jill",
        age: 35,
        hobby: "nitting"
    }
];
var threePeopleNames =  threePeople.filter(function(names){
    return (names.name === "Martin");
});
console.log(threePeopleNames);


//7. Create a simple function that logs the date.

var logDate = new Date();
console.log(logDate);
