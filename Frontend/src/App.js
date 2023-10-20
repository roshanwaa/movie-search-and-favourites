/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorite from './Components/Favorites';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  const api = axios.create({
    baseURL: 'http://localhost:5000/api',
  });

  const handleSearch = debounce(async (query) => {
    if (query.trim() === '') {
      setMovies([]);
      return;
    }
    try {
      const response = await api.get(`/movies/search?query=${query}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movie data:', error);
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
        const response = await api.get('/movies/random');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching random movies:', error);
      }
    };
    fetchRandomMovies();
  }, []);

  return (
    <Router>
      <div className="container mt-5">
        <h1 class="main-title">
          Cine<span class="thin">Search</span>
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
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
      </div>
    </Router>
  );
};

export default App;
