import './Movies.css';
import { Movie, fetchMovies } from '../FetchMovies';
import { useState, useEffect } from 'react';
import PosterUnavailable from '../assets/PosterUnavailable.svg';
import Footer from './Footer';

interface MoviesProps {
  sortByOption: string;
  genres?: string[];
}

const Movies: React.FC<MoviesProps> = ({ sortByOption, genres }) => {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovies(page, sortByOption, genres);
        setMovies(response.results);
        setTotalPages(response.total_pages);
        console.log(genres);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [page, sortByOption, genres]);

  const ChangePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <div className="movies-big-container">
      <div className="movies-small-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={movie.poster_path ? `${URL_IMAGE + movie.poster_path}` : PosterUnavailable}
              alt={movie.title + ' poster'}
              className="movie-poster"
              height={220}
              width={125}
            />
            <p className="movie-info">
              <span>{movie.title}</span>
              <br />
              <span id="release-date">({movie.release_date})</span>
            </p>
          </div>
        ))}
      </div>
      <Footer totalPages={totalPages} ChangePage={ChangePage} />
    </div>
  );
};

export default Movies;
