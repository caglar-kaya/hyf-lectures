const itemList = document.querySelector('#items');

console.log(itemList); // > ul#items.header-links

console.log(itemList.parentElement); // header

console.log(itemList.children); // HTMLCollection(7) [li.header-link, li.header-link, li.header-link, li.header-link, li.header-link, li.header-link, li.header-link]

console.log(itemList.children[0]); // li.header-link

console.log(itemList.children[0].textContent); // Link 1

console.log(itemList.children[itemList.children.length - 1]); // li.header-link

console.log(itemList.children[itemList.children.length - 1].textContent); // Link 7

console.log(itemList.firstElementChild.textContent); // Link 1

console.log(itemList.lastElementChild.textContent); // Link 7

console.log(itemList.nextElementSibling); // > input

console.log(itemList.nextElementSibling.value); // Gonder

console.log(itemList.previousElementSibling); // div.logo

console.log(itemList.previousElementSibling.textContent); // MyLogoText

// Create an Element
const newList = document.createElement('ul');

newList.id = 'items_2';
newList.className = 'header-links_2';
newList.setAttribute('title', 'New Links');
newList.innerHTML = '<li class="header-link"><a href="">New Link 1</a></li><li class="header-link"><a href="">New Link 2</a></li><li class="header-link"><a href="">New Link 3</a></li><li class="header-link"><a href="">New Link 4</a></li><li class="header-link"><a href="">New Link 5</a></li><li class="header-link"><a href="">New Link 6</a></li><li class="header-link"><a href="">New Link 7</a></li>';
newList.style.margin = '20px';
newList.style.listStyle = 'none';
newList.style.border = 'solid 1px red';


// Insert an Element
const header = document.querySelector('header'); // Parent
const paragraphsDiv = document.querySelector('.paragraphs'); // Child

header.insertBefore(newList, paragraphsDiv);







































































