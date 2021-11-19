function test() {
  var promise = job();

  promise.then(function (data) {
    doSomething(data);
  });

  return promise;
}

// The problem is that we return the initial promise. Not the result of promise.then.

// You should write this:

function test2() {
  return job().then(function (data) {
    doSomething(data);
  });
}