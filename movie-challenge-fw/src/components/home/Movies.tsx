import axios from 'axios';
import './Movies.css';
import { useState, useEffect } from 'react';

const Movies = () => {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'aed0b9b04b9b2314524e703621a1f16e';
  //const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
  }

  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = () => {
    return axios
      .get(`${API_URL}/discover/movie`, {
        params: {
          api_key: `${API_KEY}`,
          include_adult: 'false',
          'primary_release_date.gte': '1980-01-01',
          'primary_release_date.lte': '1989-12-31',
          sort_by: 'popularity.desc'
        }
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies-big-container">
      <div className="movies-small-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={movie.poster_path ? `${URL_IMAGE + movie.poster_path}` : 'unavailable'}
              alt={movie.title + ' poster'}
              className="movie-poster"
              height={250}
              width={140}
              style={{ objectFit: 'fill' }}
            />
            <p className="movie-info">
              <span>{movie.title}</span>
              <br />
              <span id='release-date'>({movie.release_date})</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
