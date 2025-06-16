// src/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, initialTerm }) {
  const [term, setTerm] = useState(initialTerm);

  useEffect(() => {
    setTerm(initialTerm);
  }, [initialTerm]);

  const handleChange = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
    onSearch(newTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar-form">
      <input
        type="text"
        placeholder="Search for a movie title..."
        value={term}
        onChange={handleChange}
        className="search-input"
      />
      {/* <button type="button" className="search-button" onClick={() => onSearch(term)}>
        <span role="img" aria-label="Magnifying glass">🔍</span> Search
      </button> */}
    </div>
  );
}

export default SearchBar;
