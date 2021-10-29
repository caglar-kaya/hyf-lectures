// 1. Select .characters with document.querySelector
const characters = document.querySelector('.characters');
console.log(characters);
characters.style.backgroundColor = 'gray';

// 2. Select .humans from .characters
const humans = characters.children[1];
console.log(humans);
humans.style.backgroundColor = 'red'

// 3. Select all humans with querySelectorAll, starting from .humans
const allHumans = document.querySelectorAll('.humans');
console.log(allHumans);

// 4. Select all hobbits with children
const allHobbits = document.querySelector('.hobbits');
console.log(allHobbits);
const allHobbitsWithChildren = allHobbits.children;

// 5. Select the Merry(the hobbit)
console.log(allHobbitsWithChildren[2].innerText);

// 6. Select .enemies from Sauron
const enemies = characters.children[3];
console.log(enemies);
console.log(enemies.children[0].innerText);
console.log(document.querySelector('.characters .enemies').children[0].innerText);

// 7. Select the .characters div from Nazgûl
const nazgul = document.querySelector('.characters .enemies').children[1];
console.log(nazgul.innerText);
const characters_2 = nazgul.closest('.characters');
console.log(characters_2);

// 8. Select Elrond from Glorfindel
const Glorfindel = characters.children[2].children[1];
console.log(Glorfindel.innerText);
const Elrond = Glorfindel.nextElementSibling;
console.log(Elrond.innerText);

// 9. Select Legolas from Glorfindel
const Legolas = Glorfindel.previousElementSibling;
console.log(Legolas.innerText);

// 10. Select Arwen from Glorfindel
const Arwen = Glorfindel.nextElementSibling.nextElementSibling;
console.log(Arwen.innerText);
