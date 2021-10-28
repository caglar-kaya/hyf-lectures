const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundElephantIndex = animals.findIndex(word => {
    return word === 'elephant';
});

console.log(foundElephantIndex); // 7
console.log(animals[7]); // elephant

const startsWithS = animals.findIndex(word => {
    return word.startsWith('s');
});

console.log(startsWithS); // 3
console.log(animals[3]); // seal
