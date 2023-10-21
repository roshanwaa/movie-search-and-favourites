import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, favorites, toggleFavorite }) => {
  return (
    <div className="row pt-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col-md-4 mb-4">
          <div className="card movie-card">
            <img
              src={movie.Poster}
              className="card-img-top"
              alt={movie.Title}
              style={{ objectFit: 'fill', height: '500px' }}
            />
            <div className="card-body" style={{ backgroundColor: '#D0D4CA' }}>
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">Year: {movie.Year}</p>
              <button
                className={`btn ${
                  favorites.has(movie.imdbID) ? 'btn-danger' : 'btn-success'
                }`}
                onClick={() => toggleFavorite(movie.imdbID)}>
                {favorites.has(movie.imdbID)
                  ? 'Remove from Favorites'
                  : 'Add to Favorites'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
