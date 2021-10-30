console.dir(document); // > #document
console.log(document.domain); // 127.0.0.1
console.log(document.URL); // http://127.0.0.1:5500/dom.html
console.log(document.title); // DOM 1
console.log(document.doctype); // > <!DOCTYPE html>
console.log(document.head); // > head
console.log(document.body); // > body
console.log(document.all); // > HTMLAllCollection(8) [html, head, meta, meta, meta, title, body, script, viewport: meta]
console.log(document.all[7]); // > script

const myLogoText = document.getElementById('logo-text');

console.log(myLogoText); // <p id="logo-text">MyLogoText</p>
console.log(myLogoText.textContent); // MyLogoText
console.log(myLogoText.innerText); // MyLogoText
console.log(myLogoText.innerHTML); // MyLogoText

myLogoText.innerHTML = '<p id="logo-text">MyLogoText-NewOne</p>';
console.log(myLogoText.innerText); // MyLogoText-NewOne

myLogoText.style.color = 'red';
myLogoText.style.backgroundColor = 'yellow';
myLogoText.style.border = 'solid 3px green';

const logo = document.getElementsByClassName('logo'); // returns array

console.log(logo); // > HTMLCollection [div.logo]

logo[0].style.backgroundColor = 'pink';
logo[0].style.borderRadius = '5px';

const headerLinksList = document.getElementsByTagName('ul');
console.log(headerLinksList); // HTMLCollection [ul.header-links]

const headerLinks = document.getElementsByTagName('li');
console.log(headerLinks); // Array
console.log(headerLinks[0]); // <li class="header-link"><a href="">Link 1</a></li>
console.log(headerLinks[0].textContent); // Link 1

const headerLinks_2 = document.querySelector('li');
console.log(headerLinks_2); // <li class="header-link"><a href="">Link 1</a></li>
console.log(headerLinks_2.textContent); // Link 1

const headerLinks_3 = document.querySelectorAll('li');
console.log(headerLinks_3); // Array
console.log(headerLinks_3[0]); // <li class="header-link"><a href="">Link 1</a></li>
console.log(headerLinks_3[0].textContent); // Link 1

const myLogoText_2 = document.querySelector('#logo-text');
console.log(myLogoText_2); // <p id="logo-text" style="color: red; background-color: yellow; border: 3px solid green;"><p id="logo-text">MyLogoText-NewOne</p></p>
console.log(myLogoText_2.textContent); // MyLogoText-NewOne

const submitButton = document.querySelector('input[type="submit"]');
console.log(submitButton); // <input type="submit" value="Gonder">
console.log(submitButton.value); // Gonder

submitButton.value = 'Submit';
console.log(submitButton.value); // Submit

const headerLinksWithQueryAll = document.querySelectorAll('li');
console.log(headerLinksWithQueryAll);

for (let index = 0; index < headerLinksWithQueryAll.length; index++) {
  const element = headerLinksWithQueryAll[index];
  console.log(element.textContent);
}

const oddHeaderLinksWithQueryAll = document.querySelectorAll('li:nth-child(odd)');
console.log(oddHeaderLinksWithQueryAll);

for (let index = 0; index < oddHeaderLinksWithQueryAll.length; index++) {
  const element = oddHeaderLinksWithQueryAll[index];
  element.style.backgroundColor = 'lightgray';
}

const evenHeaderLinksWithQueryAll = document.querySelectorAll('li:nth-child(even)');
console.log(evenHeaderLinksWithQueryAll);

for (let index = 0; index < evenHeaderLinksWithQueryAll.length; index++) {
  const element = evenHeaderLinksWithQueryAll[index];
  element.style.backgroundColor = 'gray';
}

const body = document.querySelector('body');
body.style.backgroundColor = 'lightblue';

const newParagraph = document.createElement('p'); // *****
newParagraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt aliquid non esse quisquam sit officia aliquam saepe iusto ipsa.';
newParagraph.style.color = 'orange';
newParagraph.style.margin = '20px';
newParagraph.style.fontSize = '1.5rem';
body.appendChild(newParagraph); // *****
















































































