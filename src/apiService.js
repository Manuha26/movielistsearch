const API_KEY = '6ba52f4bfeed26b05970b00d4c4fe9c9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};
