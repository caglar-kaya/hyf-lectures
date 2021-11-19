const callback1 = () => {
  console.log('Hello');
}

const callback2 = () => {
  console.log('World');
}

function job(callback1, callback2) {
  setTimeout(callback1, 2000);
  let counter = 0;
  const timer = setInterval(() => {
    callback2();
    counter++;
    if (counter >= 3) {
      clearInterval(timer);
    }
  }, 1000)

}

job(callback1, callback2);