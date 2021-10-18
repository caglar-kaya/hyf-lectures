/* eslint-disable no-console */
const numbers = [0, 2, 4, 6, 8, 10];

function addOne(number) {
  return number + 1;
}

const numbersPlusOne = numbers.map(addOne);

console.log(`New array: ${numbersPlusOne}`); // New array: 1,3,5,7,9,11
console.log(`Original array: ${numbers}`); // Original array: 0,2,4,6,8,10

const numbers2 = [2, 4, 6, 8, 10];
const numbersPlusTwo = [];

for (let i = 0; i < numbers2.length; i++) {
  numbersPlusTwo.push(numbers2[i] + 2);
}

console.log(`New array: ${numbersPlusTwo}`); // New array: 4,6,8,10,12
console.log(`Original array: ${numbers2}`); // Original array: 2,4,6,8,10
