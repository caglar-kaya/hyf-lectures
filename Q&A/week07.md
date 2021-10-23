# Week-07 Q&A Session

## JavaScript-4 Questions

My question is related to **closure concept**. In below code example, after callings `add() function`, why `console.log(Before: ${counter});` line doesn't be executed although `add() function` connected to `count() function` with `const add = count();`?

> Code:

```JavaScript
function count() {
  let counter = 0;
  console.log(`Before: ${counter}`);
  return function () {
    counter += 1;
    console.log(`After: ${counter}`);
    return counter;
  };
}

const add = count(); // "Before: 0" logged to console

console.log(`1. Execution:`);
add(); // "After: 1" logged to console

console.log(`2. Execution:`);
add(); // "After: 2" logged to console

console.log(`3. Execution:`);
add(); // "After: 3" logged to console
```

> Console:

```html
Before: 0
1. Execution:
After: 1
2. Execution:
After: 2
3. Execution:
After: 3
```
