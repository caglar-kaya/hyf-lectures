/* eslint-disable no-console */

const numberArray = [1, 2, 3];
const stringArray = ['Hello', 'World'];

const concatArray = [...numberArray, ...stringArray];

console.log(concatArray); // [ 1, 2, 3, 'Hello', 'World' ]
