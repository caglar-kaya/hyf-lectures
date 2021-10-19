const add = (function () {
  let counter = 0;
  console.log(`First ${counter}`);
  return function () {
    counter += 1;
    console.log(`Second ${counter}`);
    return counter;
  };
})();

console.log(`1. Execution:`);
add();
console.log(`2. Execution:`);
add();
console.log(`3. Execution:`);
add();
