fetch("https://ipinfo.io/json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    document.querySelector("#ipText").innerHTML = myJson.ip;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (let index = 0; index < data.results.length; index++) {
      const pokemonName = document.createElement('p');
      pokemonName.textContent = data.results[index].name;
      document.body.appendChild(pokemonName);
    }
    console.log('Pokemon data', data);
    return data;
  })
  .catch(error => {
    console.log('err', error);
  });