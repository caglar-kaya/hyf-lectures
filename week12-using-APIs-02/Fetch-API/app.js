fetch("https://api.tvmaze.com/search/shows?q=simpsons")
  .then((response) => {
    console.log("We got the response, but the body is not ready yet");
    console.log(response);
    return response.json();
  })
  .then((jsonData) => {
    console.log("We got the data");
    console.log(jsonData);
  })