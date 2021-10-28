/* eslint-disable no-console */
const strArray = ['Hello', 'World'];

function reverseWord(word) {
  return word.split('').reverse().join('');
}

const strArrayReversed = strArray.map(reverseWord);

console.log(strArray); // [ 'Hello', 'World' ]
console.log(strArrayReversed); // [ 'olleH', 'dlroW' ]
