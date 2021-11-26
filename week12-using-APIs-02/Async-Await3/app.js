// async function myFunc() {
// Function body here
// };

// myFunc();

// const myFunc = async () => {
// Function body here
// };

// myFunc();

/**
 * async functions always return a promise.
 */

async function fivePromise() {
  return 5;
}

fivePromise()
  .then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

