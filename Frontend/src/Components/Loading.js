// Create a new file Loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div class="d-flex justify-content-center mt-4 mb-4">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
