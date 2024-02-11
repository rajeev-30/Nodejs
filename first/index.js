const q = require('lodash');
const q1 = require('./add.js');

const numbers = [1, 2, 3, 4, 5, 6];

const sum = q.sum(numbers);
const doubledNumbers = q.map(numbers, n => n * 2);
const filteredNumbers = q.filter(numbers, n => n % 2 === 0);
const add = q1.add(3,3);


// Output the results
console.log('Original Numbers:', numbers);
console.log('Sum of Numbers:', sum);
console.log('Doubled Numbers:', doubledNumbers);
console.log('Filtered Even Numbers:', filteredNumbers);
console.log('add Numbers:', add);

