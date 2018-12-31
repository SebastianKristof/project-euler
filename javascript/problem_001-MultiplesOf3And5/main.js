'use strict'

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Iterative solution

let sum = 0;
for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(`Sum is ${sum}`);


// Functional solution

const isMultipleOfThreeOrFive = (num) => (num % 3 === 0 || num % 5 === 0); // boolean

const sumOfMultiples = (lowerLimit, upperLimit, sum) => {
    if (lowerLimit > upperLimit - 1) {
        return sum;
    } else if (isMultipleOfThreeOrFive(lowerLimit)) {
        return sumOfMultiples(lowerLimit + 1, upperLimit, sum + lowerLimit);
    } else {
        return sumOfMultiples(lowerLimit + 1, upperLimit, sum);
    }
}
console.log(`Functional sum is ${sumOfMultiples(0, 1000, 0)}`);