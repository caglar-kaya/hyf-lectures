// This function will run. If anything goes wrong...
async function fetchData() {
  try {
    const fetchedData = await fetch('https://randomuser.me/api/');
    console.log(fetchedData);

    const parsedData = await fetchedData.json();
    console.log(parsedData);

    return parsedData;
  } catch (err) {
    // ...the code in this block will execute. The error that has been created will now be inserted into `err`
    console.log('Oops, something went wrong!', err);
  }
}

fetchData();