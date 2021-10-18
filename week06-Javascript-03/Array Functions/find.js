/* eslint-disable no-console */
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 10 },
  { name: 'Album', price: 30 },
  { name: 'Book', price: 200 },
  { name: 'Board', price: 50 },
  { name: 'Phone', price: 85 },
  { name: 'Computer', price: 225 },
  { name: 'Keyboard', price: 10 },
  { name: 'Mouse', price: 30 },
];

const findComputer = items.find((item) => item.name === 'Computer');

console.log(typeof findComputer); // object
console.log(findComputer); // { name: 'Computer', price: 225 }
