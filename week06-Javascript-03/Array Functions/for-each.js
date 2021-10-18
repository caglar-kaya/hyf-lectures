/* eslint-disable no-return-assign */
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

items.forEach((item) => console.log(typeof item.name)); // string

items.forEach((item) => console.log(item.name));

let totalPrice = 0;

items.forEach((item) => totalPrice += item.price);

console.log(`Total price of all products: ${totalPrice}`);
