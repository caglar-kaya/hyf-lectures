# Week-06 Q&A Session

## JavaScript-3 Questions

I don't feel very comfortable about debugging in [JS Tutor](https://pythontutor.com/javascript.html#mode=edit), VSCode Debugger, and Browser Devtools Debugger.
</br>
I have provided code below from my previous exercises and also **put a small bug inside it consciously**.
</br>
Can we debug it in these 3 debuggers to find out how to debug and to see similarities and differences between these 3 debuggers.

> Code:

```JavaScript
// isPrime function checks whether a number is prime or not.
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i !== 0) {
      return false;
    }
  }
  return true;
};

// arrayPrimes function logs prime numbers until a specific number and
// calculates the number of primes
const arrayPrimes = (number) => {
  let count = 0;
  const primeArray = [];
  for (let i = 0; i <= number; i++) {
    if (isPrime(i)) {
      count++;
      primeArray.push(i);
    }
  }
  console.log(primeArray);
  console.log(`Total number of prime numbers until ${number}: ${count}`);
};

arrayPrimes(23);
```

> Output:

```html
[2, 3, 5, 7, 11, 13, 17, 19, 23]
Total number of prime numbers until 23: 9
```
