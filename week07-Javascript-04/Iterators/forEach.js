const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => {
    console.log(`I want to eat a ${fruit}`);
});

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(`I want to eat a ${element}`);
}