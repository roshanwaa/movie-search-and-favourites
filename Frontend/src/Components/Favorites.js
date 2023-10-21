import React from 'react';

const Favorite = ({ favorites, toggleFavorite }) => {
  return (
    <div className="mt-5">
      <h2>Your Favorites</h2>
      <div className="row">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="col-md-4 mt-4 mb-4">
            <div
              className="card movie-card"
              style={{ backgroundColor: '#D0D4CA' }}>
              <img
                src={movie.Poster}
                className="card-img-top"
                alt={movie.Title}
                style={{ objectFit: 'fill', height: '500px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => toggleFavorite(movie.imdbID)}>
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
