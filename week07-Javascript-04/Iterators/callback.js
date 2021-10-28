const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000; i++) {
    if ((2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

console.log(time2p2);

const checkConsistentOutput = (func, value) => {
  const result1 = func(value);
  const result2 = func(value);
  if (result1 === result2) {
    return result1;
  }
  return 'This function returned inconsistent results';
}

console.log(checkConsistentOutput(addTwo, 5));
