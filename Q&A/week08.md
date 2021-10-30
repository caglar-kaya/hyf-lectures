# Week-08 Q&A Session

## Browsers-1 Questions

My question is about our JavaScript exam Question-5. For below code,

- What is deduplication?
- How can we test it?
- Where do we use it in web development?

```JavaScript
/**
 * This function returns a new array that is a deduplicated version of the combination of the two arrays.
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const combineAndDeduplicate = (firstArr, secondArr) => {
  if (!Array.isArray(firstArr)) {
    if (Array.isArray(secondArr)) {
      return secondArr;
    } else {
      return [];
    }
  } else if (!Array.isArray(secondArr)) {
    if (Array.isArray(firstArr)) {
      return firstArr;
    } else {
      return [];
    }
  }

  const newArray = [...firstArr, ...secondArr];

  // This syntax will be new to you, it is a quick way to remove any duplicates from the newArray
  return [...new Set(newArray)];
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("combineAndDeduplicate", () => {
  // Test 1
  it("", () => {
    expect().toBe();
  });
});
```
