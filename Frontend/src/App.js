/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorite from './Components/Favorites';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import Loading from './Components/Loading';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true); // Initialize loading as true

  const api = axios.create({
    baseURL: 'https://cinesearch.onrende.com/api',
  });

  const handleSearch = debounce(async (query) => {
    try {
      setIsLoading(true); // Set loading to true when starting a new search
      if (query.trim() === '') {
        const response = await api.get('/movies/random');
        setMovies(response.data);
      } else {
        const response = await api.get(`/movies/search?query=${query}`);
        setMovies(response.data.Search || []);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    } finally {
      setIsLoading(false); // Set loading to false when data fetching is complete
    }
  }, 300);

  const toggleFavorite = (imdbID) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(imdbID)) {
      updatedFavorites.delete(imdbID);
    } else {
      updatedFavorites.add(imdbID);
    }
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        setIsLoading(true); // Set loading to true when fetching random movies
        const response = await api.get('/movies/random');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching random movies:', error);
      } finally {
        setIsLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchRandomMovies();
  }, []);

  return (
    <Router>
      <div className="container">
        <h1 className="main-title">
          Cine<span className="thin">Search</span>
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorite
                  favorites={movies.filter((movie) =>
                    favorites.has(movie.imdbID)
                  )}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
