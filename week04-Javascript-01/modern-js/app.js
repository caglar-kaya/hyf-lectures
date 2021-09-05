          // VARIABLES & DATA TYPES
/* 
var life = 100; // This is my life bar

life = 70;

life = life - 20;

var myName = 'Caglar'; // This is the name displayed in the game


console.log('Hello World');

console.log(life);

console.log(myName);


const myAge = 32;

// myAge = 45; // gives error!

// const myAge = 25; // gives error!


let mySurname = 'Kaya';


console.log(mySurname);
*/

          // FUNCTIONS & PARAMETERS

/*
const myName = 'Caglar';

function toUpper(text) { // 1. way
  const upper = text.toUpperCase();
  console.log(upper);
}

toUpper(myName);

const toUpper_2 = (text) => { // 2. way
  const upper = text.toUpperCase();
  console.log(upper);
}

toUpper_2(myName);
*/

          // STRING CONCATENATION

/* console.log('Hello It\'s me Caglar'); // 1. way

console.log("Hello It's me Caglar"); // 2. way


const myName = 'Caglar';

const myAge = 33;

console.log(`Hello it's me and my name is ${myName}`); // 3. way

console.log("Hello it's me " + myName + " and my age is " + myAge + " and I'm getting old.");

console.log(`Hello it's me ${myName} and my age is ${myAge} and I'm getting old.`);


const combined_1 = myName + myAge;

console.log(combined_1);

console.log(typeof combined_1);


const combined_2 = myAge + myName;

console.log(combined_2);

console.log(typeof combined_2);
*/

          // IF ELSE STATEMENTS

const myAge = 33;
/*
if (myAge > 40) {
  console.log('Case 1');
} else if (myAge === 33) {
  console.log('case 2');
} else {
  console.log('case 3')
}
*/

          // ARRAYS
/*
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(days);

console.log(days[0]);

console.log(days[days.length - 1]);


days.pop(); // removes the last element

console.log(days);

days.shift(); // removes the first element

console.log(days);

days.unshift('First'); // adds element to first index

console.log(days);

days.push('Last'); // adds element to last index

console.log(days);


const wed = days.indexOf('Wednesday');

console.log(wed);

console.log(days[wed]);
*/

          // OBJECTS AND KEYWORD THIS

/*
const user = {
  userName: 'Caglar',
  age: 33,
  married: false,
  purchases: ['phone', 'laptop'],

  sayObject: function() {
    console.log(this); // user object
  },

  sayName: function() {
    console.log(this.userName);
  }
};

console.log(user.userName);

console.log(user.purchases);

// console.log(this); // here 'this' keyword refers to 'window'.

user.sayObject();

user.sayName();

function sayMyAge() {
  console.log(`My age is ${this}`); // Here 'this' is 'object Window'.
}

sayMyAge();

*/

          // FOR LOOP AND WHILE LOOP
/*
const names = ['Ed', 'John', 'Maria', 'Eliza', 'Burrito', 'Harry', 'Potter'];

for (nam of names) {
  console.log(nam);
}

names.forEach(elem => {
  console.log(elem);
});

for (nam of names) {
  console.log(nam);
  if (nam === 'Eliza') {
    console.log('Eliza is found.');
    break;
  }
}

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++;
}

console.log(i);

let j = 0;

do {
  console.log(names[j]);
  j++;
} while (j < names.length);

console.log(j);
*/

          // DOM MANIPULATION

// const element = document.querySelector('.title');

  // console.log(typeof element); // object
  // console.log(element); // <h1 class="title">Hello</h1>
  // console.log(element.textContent); // Hello

// const btn = document.querySelector('.changeColor');

  // console.log(typeof btn); // object
  // console.log(btn); // <button class="changeColor">Click me</button>
  // console.log(btn.textContent); // Click me

// element.style.color = 'red';
// element.style.backgroundColor = 'green';
// element.classList.add('change');
// element.classList.remove('change');

// btn.addEventListener('click', function () {
//   element.classList.toggle('change');
// })

const userList = document.querySelector('.name-list');

// console.log(userList);

// for(user of userList) {
//   // console.log(user.textContent);
//   user.addEventListener('click', function () {
//     console.log(this.textContent);
//   })
// }

const listInput = document.querySelector('.list-input');

// console.log(listInput);

const addListBtn = document.querySelector('.add-list');

// console.log(addListBtn);

addListBtn.addEventListener('click', function() {
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  newLi.appendChild(liContent);
  userList.appendChild(newLi);
  listInput.value = "";
});





