function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject('error');
    } else if (data % 2 === 1) {
      setTimeout(() => {
        resolve('odd')
      }, 1000);
    } else if (data % 2 === 0) {
      setTimeout(() => {
        reject('even')
      }, 2000);
    }
  });
}

console.log(job('x')); // Promise { <rejected> 'error' }
console.log(job(3)); // Promise { <pending> }
console.log(job(8)); // Promise { <pending> }
