const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(ar => {
    console.log(ar + ' is one of my favorite artists.');
});

// Picasso is one of my favorite artists.
// Kahlo is one of my favorite artists.
// Matisse is one of my favorite artists.
// Utamaro is one of my favorite artists.

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(numb => {
    return numb === 4;
});

console.log(squareNumbers); // [ false, false, false, true, false ]

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});

console.log(onlyNumbers); // [ 5, 3.14, 100 ]