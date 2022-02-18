import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieListContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, SetMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const submitMovie = (e) => {
    e.preventDefault();
    SetMovies((movies) => [
      ...movies,
      {
        name: name,
        price: price,
        id: movies.length + 1,
      },
    ]);
  };

  return (
    <form>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button onClick={submitMovie}>Submit</button>
    </form>
  );
};

export default AddMovie;
