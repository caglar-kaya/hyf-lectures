let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 2000, 'p4');
});

let p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1, p2, p3, p4, p5]);

promise

  .then(function (data) {
    data.forEach(function (data) {
      console.log(data);
    });
  })

  .catch(function (error) {
    console.error('error:', error);
  });

  // OUTPUT:
  // error: p4

// As you can see, error p4 is displayed.We can't access the result of the other promises.
// You should only use Promise.all when you need for all of your promises to resolve successfully.
// What if you want to start multiple asynchronous jobs at once and you want results even if a job is rejected?
// Just use catch. See the following example.