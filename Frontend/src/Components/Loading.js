// Create a new file Loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="d-flex justify-content-center mt-4 mb-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
