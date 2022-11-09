import React, { useState, useEffect } from 'react';
import Items from './Items';
import Search from './Search';

const URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=3ec1d4184268274b4a951e2126299319';

const ListItems = () => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        
      });
  }, []);




  return (
    <div>
      <Search />
      <div>
        
      </div>
    </div>
  );
};

export default ListItems;
