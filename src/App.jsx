import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import useDebounce from './hooks/useDebounce';

const API_KEY = '4462d54d';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
const DEBOUNCE_DELAY = 500;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPopularMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}&s=action&type=movie`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch popular movies.');
      console.error(err);
    }
    setIsLoading(false);
  };

  const searchMovies = async (title) => {
    if (!title.trim()) {
      setMovies([]);
      setError(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}&s=${title}&type=movie`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || `No results found for "${title}".`);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please check your connection.');
      console.error(err);
    }
    setIsLoading(false);
  };

  const fetchMovieDetails = async (imdbID) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}&i=${imdbID}&plot=full`);
      const data = await response.json();
      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        setError(data.Error || 'Could not fetch movie details.');
      }
    } catch (err) {
      setError('Failed to fetch movie details.');
      console.error(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchMovies(debouncedSearchTerm);
    } else {
      setMovies([]);
      setError(null);
      if (!searchTerm) {
        fetchPopularMovies();
      }
    }
  }, [debouncedSearchTerm]);

  const handleSearchInputChange = (term) => {
    setSearchTerm(term);
  };

  const handleMovieSelect = (imdbID) => {
    fetchMovieDetails(imdbID);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1><span role="img" aria-label="Clapper board">🎬</span> MovieSearch</h1>
        <SearchBar onSearch={handleSearchInputChange} initialTerm={searchTerm} />
      </header>

      <main className="app-main">
        {isLoading && <div className="loading-spinner"></div>}
        {error && <p className="error-message">{error}</p>}
        {!isLoading && !error && movies.length > 0 && (
          <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
        )}
        {!isLoading && !error && movies.length === 0 && debouncedSearchTerm && (
          <p className="info-message">No movies found for "{debouncedSearchTerm}". Try a different search!</p>
        )}
        {!isLoading && !error && movies.length === 0 && !debouncedSearchTerm && !searchTerm && (
          <p className="info-message">Type in the search bar to find movies!</p>
        )}
      </main>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} MovieSearch By Akhilesh Kandoria.</p>
      </footer>
    </div>
  );
}

export default App;
