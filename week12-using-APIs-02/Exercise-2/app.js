function searchShow(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  const errorText = document.querySelector('#errorMessage');
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw 'HTTP ERROR';
    })
    .then((jsonData) => {
      const results = jsonData.map(element => element.show.name);
      renderResults(results);
      errorText.innerHTML = "";
    })
    .catch(error => {
      errorText.innerHTML = error;
      renderResults([]);
    });
}

function renderResults(results) {
  const list = document.querySelector('#resultsList');
  list.innerHTML = "";
  results.forEach(result => {
    const listEl = document.createElement('li');
    listEl.textContent = result;
    list.appendChild(listEl);
  });
}

let searchTimeoutToken = 0;

window.addEventListener('load', () => {

  const searchFieldEl = document.querySelector('#searchField');

  searchFieldEl.addEventListener('keyup', () => {

    clearTimeout(searchTimeoutToken);

    if (searchFieldEl.value.trim().length === 0) {
      return;
    }

    searchTimeoutToken = setTimeout(() => {
      searchShow(searchFieldEl.value);
    }, 250);

  });
});