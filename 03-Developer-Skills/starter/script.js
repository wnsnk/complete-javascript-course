// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    for (let index = 0; index < arr.length; index ++) {
        console.log(`... ${arr[index]}ºC in ${index +  1} days`);
    }
}

printForecast(testData1);
printForecast(testData2);


///////////////////////////////////////
// Coding Challenge #2

/*
Let's say you're building a time tracking application for freelancers. 
At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const testData3 = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const calcTotal = function(arr) {
    let total = 0;
    for (let index = 0; index < arr.length; index ++) {
        total += arr[index];
    }
    return total;
} 

const calcAverage = function(arr) {
    const total = calcTotal(arr);
    return total / arr.length};

const calcLongestDay = function(arr) {
    let longestDay = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > longestDay) {
            longestDay = arr[index];
        }
    }
    return longestDay;
}

const calcDaysWorked = function(arr) {
    let daysWorked = 0
    for(let index = 0; index < arr.length; index ++) {
        if (arr[index] > 0) {
            daysWorked ++;
        }
    }
    return daysWorked;
}

const workedFulltime = function (arr) {
    if (calcTotal(arr) >=35) {
        return true;
    } else {
        return false;
    }
}
const reviewWorkWeek = function(hoursWorked) {
    console.log(`Total hours worked: ${calcTotal(hoursWorked)}`);
    console.log(`Average daily hours: ${calcAverage(hoursWorked)}`);
    console.log(`The day with the most hours worked: ${calcLongestDay(hoursWorked)}`);
    console.log(`Number of days worked: ${calcDaysWorked(hoursWorked)}`);
    console.log(`Worked fulltime: ${workedFulltime(hoursWorked)}`);
    
}

reviewWorkWeek(testData3);

