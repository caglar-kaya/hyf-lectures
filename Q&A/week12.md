# Week-12 Q&A Session

## Using APIs - 2 Questions

Q1: Inside code below, although there is a `catch` block, why do we throw a new error object inside `try` block? Isn't `catch` block enough to catch all errors?

```JavaScript
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({ id: 200 })
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}
```
