const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

const lessThan6 = words.some((word) => {
    return word.length < 6;
})

console.log(lessThan6); // true
