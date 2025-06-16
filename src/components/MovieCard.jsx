import React from 'react';
import './MovieCard.css';

const DEFAULT_PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x450?text=No+Image";

function MovieCard({ movie, onMovieSelect }) {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie-card" onClick={() => onMovieSelect(movie.imdbID)}>
      <img src={poster} alt={`${movie.Title} poster`} className="movie-card-poster" />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.Title}</h3>
        <p className="movie-card-year">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;