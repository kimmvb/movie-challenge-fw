import styles from './Movies.module.css';
import { Movie, fetchMovies } from '../data/FetchMovies';
import { useState, useEffect } from 'react';
import PosterUnavailable from '../assets/PosterUnavailable.svg';
import Footer from './Footer';
import NoResults from '../assets/NoResults.svg';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../MovieContext';

interface MoviesProps {
  sortByOption: string;
  genres?: string[];
}

const Movies: React.FC<MoviesProps> = ({ sortByOption, genres }) => {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const { page, setPage } = useMovieContext();

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetchMovies(page, sortByOption, genres);
        setMovies(response.results);
        setTotalPages(response.total_pages);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    fetchData();
  }, [page, sortByOption, genres]);

  const ChangePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const formatDateToWords = (dateString: string) => {
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', { year: 'numeric' });
    return formattedDate;
  };

  return (
    <div className={styles.movies_big_container}>
      <div className={styles.movies_small_container}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className={styles.link_no_underline}>
              <div className={styles.movie_card} key={movie.id}>
                <img
                  src={movie.poster_path ? `${URL_IMAGE + movie.poster_path}` : PosterUnavailable}
                  alt={movie.title + ' poster'}
                  className={styles.movie_poster}
                  height={220}
                  width={125}
                  style={{ maxHeight: '220px' }}
                />
                <p className={styles.movie_info}>
                  <span>{movie.title}</span>
                  <br />
                  <span id={styles.release_date}>({formatDateToWords(movie.release_date)})</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <img className={styles.no_results} src={NoResults} />
        )}
      </div>
      <Footer totalPages={totalPages} ChangePage={ChangePage} />
    </div>
  );
};

export default Movies;
