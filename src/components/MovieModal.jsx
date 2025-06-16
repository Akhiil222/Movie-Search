import React from 'react';
import './MovieModal.css';

const DEFAULT_PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x450?text=No+Image";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <img src={poster} alt={`${movie.Title} poster`} className="modal-poster" />
          <div className="modal-details">
            <h2>{movie.Title} ({movie.Year})</h2>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating} <span role="img" aria-label="Star">⭐</span></p>
            <p><strong>Awards:</strong> {movie.Awards}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Rated:</strong> {movie.Rated}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;