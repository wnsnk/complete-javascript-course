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
