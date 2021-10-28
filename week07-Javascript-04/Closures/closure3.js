function count() {
  let counter = 0;
  console.log(`Before: ${counter}`);
  return function () {
    counter += 1;
    console.log(`After: ${counter}`);
    return counter;
  };
}

const add = count(); // "Before: 0" logged to console

console.log(`1. Execution:`);
add(); // "After: 1" logged to console

console.log(`2. Execution:`);
add(); // "After: 2" logged to console

console.log(`3. Execution:`);
add(); // "After: 3" logged to console
