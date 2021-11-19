function job(delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Resolving', delay);
      resolve('done ' + delay);
    }, delay);
  });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function (data) {
  console.log('All done');
  data.forEach(function (text) {
    console.log(text);
  });
});

// OUTPUT:
// Resolving 500
// Resolving 1000
// Resolving 1500
// Resolving 2000
// All done
// done 1000
// done 2000
// done 500
// done 1500