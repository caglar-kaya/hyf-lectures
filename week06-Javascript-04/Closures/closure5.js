const addTo = function(passed) {
    const add = function(inner) {
        return passed + inner;
    }
    return add;
}

const addThree = new addTo(3);
const addFive = new addTo(5);

console.log(addThree(7)); // 10
console.log(addFive(15)); // 20
