// 'use strict';

// Lecture 34
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and it's capital city is ${capitalCity}`;
}

const describeNetherlands = describeCountry('Netherlands', '18 million', 'Amsterdam');
const describeAmerica = describeCountry('America', '341 million', 'Washington D.C.');
const describeGermany = describeCountry('Germany', '83 million', 'Berlin');
console.log(describeNetherlands);
console.log(describeAmerica);
console.log(describeGermany);
// -----------------------------------------------------------------------------------------------------

// lecture 35
// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).
const worldPopulation = 7900000000;
const netherlandsPopulation = 18000000
const americaPopulation = 341000000
const germanyPopulation = 83000000
function percentageOfWorld1(population) {
    return population / worldPopulation * 100;
}

let netherlandsPercentageOfWorld = percentageOfWorld1(netherlandsPopulation);
let americaPercentageOfWorld = percentageOfWorld1(americaPopulation);
let germanyPecentageOfWorld = percentageOfWorld1(germanyPopulation);

console.log(netherlandsPercentageOfWorld, americaPercentageOfWorld, germanyPecentageOfWorld);

const percentageOfWorld2 = function (population) {
    return population / worldPopulation * 100;
}

netherlandsPercentageOfWorld = percentageOfWorld2(netherlandsPopulation);
americaPercentageOfWorld = percentageOfWorld2(americaPopulation);
germanyPecentageOfWorld = percentageOfWorld2(germanyPopulation);
console.log(netherlandsPercentageOfWorld, americaPercentageOfWorld, germanyPecentageOfWorld);
// -----------------------------------------------------------------------------------------------------

// Lecture 36
// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
const percentageOfWorld3 = population => population / worldPopulation * 100;
netherlandsPercentageOfWorld = percentageOfWorld3(netherlandsPopulation);
americaPercentageOfWorld = percentageOfWorld3(americaPopulation);
germanyPecentageOfWorld = percentageOfWorld3(germanyPopulation);
console.log(netherlandsPercentageOfWorld, americaPercentageOfWorld, germanyPecentageOfWorld);
// -----------------------------------------------------------------------------------------------------

// lecture 37
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
// Call describePopulation with data for 3 countries of your choice.

function describePopulation(country, population) {
    const percentageOfWorld = percentageOfWorld1(population);
    return `${country} has ${population} people, which is about ${percentageOfWorld}% of the world!`;
}
console.log(describePopulation('America', americaPopulation), describePopulation('Netherlands', netherlandsPopulation), describePopulation('Germany', germanyPopulation));
// -----------------------------------------------------------------------------------------------------

// Lecture 40:
// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.
const belgiumPopulation = 11000000;
const populations = [netherlandsPopulation, americaPopulation, germanyPopulation, belgiumPopulation];
// Log to the console whether the array has 4 elements or not (true or false).
if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
}
// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
const percentages = new Array(percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]));
console.log(percentages);
// -----------------------------------------------------------------------------------------------------

// Lecture 41:
// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.
const neighbours = ['germany', 'belgium'];
// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.
neighbours.push('utopia');
console.log(neighbours);
// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.
neighbours.pop();
console.log(neighbours);
// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.
if (!neighbours.includes('germany')) {
    console.log('Probably not a central european country :D');
}
// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
neighbours[0] = 'deutschland';
// -----------------------------------------------------------------------------------------------------

// Lecture 43:
// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).
const myCountry = {
    country: 'Netherlands',
    capital: 'Amsterdam',
    language: 'Dutch',
    population: netherlandsPopulation,
    neighbours: neighbours,
};
// -----------------------------------------------------------------------------------------------------
const personalInfo = {
    firstName: 'John',
    lastName: 'Johnson',
    age: 2026 - 1990,
}

personalInfo.location = 'Netherlands';
personalInfo['Friends'] = ['Charlie', 'Alan', 'Jake'];

console.log(`${personalInfo.firstName} has ${personalInfo.Friends.length} friends an his best friend is called ${personalInfo.Friends[0]}! `);

personalInfo.summary = function () {
    return `${this.firstName} has ${this.Friends.length} friends an his best friend is called ${this.Friends[0]}!`;
}

console.log(personalInfo.summary());
// -----------------------------------------------------------------------------------------------------

// lecture 44:
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbours and a capital named ${myCountry.capital}`);
// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
myCountry.population += 2000000;
myCountry['population'] -= 2000000;
console.log(myCountry.population);
// -----------------------------------------------------------------------------------------------------

// Lecture 45:
// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
myCountry.describe = function () {
    return `${myCountry.country} has ${this.population} ${this.language} speaking people, ${this.neighbours.length} neighbours and a capital named ${this.capital}`;
}

// Call the describe method.
console.log(myCountry.describe());

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

myCountry.checkIsIsland = function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
}
myCountry.checkIsIsland();
console.log(myCountry);
// -----------------------------------------------------------------------------------------------------

// Lecture 47
// There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter #${voter} is currently voting`);
}