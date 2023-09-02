import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const API_KEY = '6ba52f4bfeed26b05970b00d4c4fe9c9'; // Replace with your API key
const BASE_URL = 'https://api.themoviedb.org/3';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setMovies([]);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      <Movie List movies={movies} />
    </div>
  );
}

export default App;


