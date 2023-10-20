import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFavoritesPage = location.pathname === '/favorites';

  const handleFavoriteClick = () => {
    if (isFavoritesPage) {
      navigate('/');
    } else {
      navigate('/favorites');
    }
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />

      <button className="btn btn-outline-dark" onClick={handleFavoriteClick}>
        {isFavoritesPage ? 'Go Home' : 'Go to Favorites'}
      </button>
    </div>
  );
};

export default SearchBar;
