const promise = job1();

promise

  .then(function (data1) {
    console.log('data1:', data1);
    return job2();
  })

  .then(function (data2) {
    console.log('data2:', data2);
    return 'Hello world';
  })

  .then(function (data3) {
    console.log('data3:', data3);
  })

  .then(function (data4) {
    console.log('data4:', data4);
  });

// OUTPUT:
// data1: result of job 1
// data2: result of job 2
// data3: Hello world
// data4: undefined

function job1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('result of job 1');
    }, 1000);
  });
}

function job2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('result of job 2');
    }, 1000);
  });
}