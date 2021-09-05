const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let index = 0;

const len = months.length; // 12

console.log('*** WHILE LOOP ***');
while (index < len) {
  console.log(months[index]);
  index += 1;
}

index = 0; // index was 12 since above while loop.

console.log('*** DO WHILE LOOP ***');
do  {
  console.log(months[index]);
  index += 1;
} while (index < len)

console.log('*** FOR LOOP ***');
for (let index = 0; index < len; index++) {
  console.log(months[index]);
}

console.log('*** FOR OF LOOP ***'); // for use with ARRAYS. It was introduced with the ES6 variant of JavaScript.
for (const month of months) {
  console.log(month);
}

console.log('*** FOR IN LOOP ***'); // for use with JavaScript OBJECTS only. It existed before the for...of loop variant became available.
const obj = {
  a: 10,
  b: 'test',
};

// for...in
for (const key in obj) {
  console.log(obj[key]);
}

// equivalent for...of
for (const key of Object.keys(obj)) {
  console.log(obj[key]);
}

console.log('*** ARRAY.FOREACH LOOP ***'); // when working with arrays.
months.forEach(myFunction);

function myFunction(item) {
  console.log(item);
}