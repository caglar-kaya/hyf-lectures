const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich',
    'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
    return animal.charAt(0);
});

console.log(secretMessage); // ['H', 'e', 'l', 'l','o', 'W', 'o', 'r','l', 'd']

console.log(secretMessage.join('')); // HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number => {
    return number / 100;
});
console.log(smallNumbers); // [ 1, 2, 3, 4, 5 ]