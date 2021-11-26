async function fetchData() {

  const fetchedData = await fetch('https://randomuser.me/api/');
  console.log(fetchedData);
  // console.log(fetchedData instanceof Promise); // false

  const parsedData = await fetchedData.json();
  console.log(parsedData);
  // console.log(parsedData instanceof Promise); // false

  // console.log(parsedData instanceof Promise); // false

  return parsedData;
}

fetchData();
