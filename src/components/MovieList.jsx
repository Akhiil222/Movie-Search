import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movies, onMovieSelect }) {
  if (!movies || movies.length === 0) {
    return <p className="no-movies-message">No movies found. Try a different search!</p>;
  }

  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onMovieSelect={onMovieSelect} />
      ))}
    </div>
  );
}

export default MovieList;