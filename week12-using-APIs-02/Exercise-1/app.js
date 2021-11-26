function searchShow(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
      const results = jsonData.map(element => element.show.name);
      console.log(results);
    })
}

window.addEventListener('load', () => {
  const searchFieldEl = document.querySelector('#searchField');
  searchFieldEl.addEventListener('keyup', () => {
    searchShow(searchFieldEl.value);
  });
});