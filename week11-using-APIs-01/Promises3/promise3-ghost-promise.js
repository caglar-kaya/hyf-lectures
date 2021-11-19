// When a function can return a promise, ALWAYS return a promise.

function job() {
  if (test) {
    return aNewPromise();
  } else {
    return 42;
  }
}

var result = job();

if (typeof job === 'object' && typeof job.then === 'function') {
  // ...
} else {
  // ...
}

// If you want to create an auto-resolved promise with a simple value, use Promise.resolve:
// If you want to create an auto-rejected promise, use Promise.reject.

function job() {
  if (test) {
    return aNewPromise();
  } else {
    return Promise.resolve(42); // return an anto-resolved promise with `42` in data.
  }
}