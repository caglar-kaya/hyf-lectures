function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data); // success
    return job(true);
  })

  .then(function (data) {
    if (data !== 'victory') {
      throw 'Defeat'; // Defeat
    }
    return job(true);
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error); // error
    return job(false);
  })

  .then(function (data) {
    console.log(data);
    return job(true);
  })

  .catch(function (error) {
    console.log(error);
    return 'Error caught';
  })

  .then(function (data) {
    console.log(data); // Error caught
    return new Error('test');
  })

  .then(function (data) {
    console.log('Success:', data.message); // Success: test
  })

  .catch(function (data) {
    console.log('Error:', data.message);
  });