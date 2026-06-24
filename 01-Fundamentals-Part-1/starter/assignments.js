// Lecture 9 Values and Variables
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// Log their values to the console.
const country = 'Netherlands';
const continent = 'Europe';
let population = 18000000;
console.log(country);
console.log(continent);
console.log(population);

// Lecture 11 Data Types
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// Log the types of isIsland, population, country and language to the console.
const isIsland = false;
let language;
console.log(isIsland);
console.log(language);

// Lecture 12 let, const and var
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.
language = 'dutch';

// Lecture 13 Basic Operators
// If your country split in half, and each half would contain half the population, then how many people would live in each half?
// Increase the population of your country by 1 and log the result to the console.
// Finland has a population of 6 million. Does your country have more people than Finland?
// The average population of a country is 33 million people. Does you country have less people than the average country?
// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
splitCountry = population / 2;
console.log(splitCountry++);
const finlandPopulation = 6000000;
hasMorePeopleThanFinland = population > finlandPopulation;
const averagePopulationOfACountry = 33000000;
hasLessPopulationThanAverage = population < averagePopulationOfACountry;
console.log(country, 'is in', continent, 'and its', population, 'people speak', language);

// Lecture 17:
// Recreate the description variable from the last assignment, this time using the template literal syntax.
const description = `${country} is in ${continent} and it's ${population} people speak ${language}.`;
console.log(description);

// Lecture 18:
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
if (population > averagePopulationOfACountry) {
    console.log(`${country}'s population is ${population - averagePopulationOfACountry} above the average.`);
} else {
    console.log(`${country}'s population is ${averagePopulationOfACountry - population} below the average.`);

};

//lecture 20:
// Predict the result of these 5 operations without executing them:
// Execute the operations to check if you were right.
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 117
// Execute the operations to check if you were right.
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
// 3/5 correct.
// #2 Result should have been a string instead of a number
// #5 Counted 5 + 6 + '4' = 114 + 9 = 123 - 4 - 2 = 117. 
// But should have counted 5 + 6 + '4' = '114' + 9 = '1149' - 4 - 2 = 1143.

// Lecture 21:
// Declare a variable numNeighbours based on a prompt input like this:
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// Test the code with different values of numNeighbours, including 1 and 0.
// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?
// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.
// Reflect on why we should use the === operator and type conversion in this situation.
//      if the operator === is used and numNeighbors is not manually converted to a number:
//      The prompt always returns a string. and '1' is not the same as 1. so the else statement gets triggered.
//      if the prompt is above 1: the else if statement DOES get triggered because the greater than (>) forces type Coercion.

// Lecture 24
// Comment out the previous code so the prompt doesn't get in the way.
// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.
// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.
// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).
if (language === 'english' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not fit your criteria.`);
}