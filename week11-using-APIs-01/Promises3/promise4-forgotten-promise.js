// You call a method that returns a promise but you create your own promise:

function test() {
  var promise = job();

  return new Promise(function (resolve, reject) {
    promise.then(function (data) {
      data = doSomething(data);
      resolve(data);
    }, function (error) {
      reject(error);
    });
  });
}

// A lot of pointless code above. You can fix it like this:

function test() {
  return job().then(function (data) {
    return doSomething(data);
  });
}