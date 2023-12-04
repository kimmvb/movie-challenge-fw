import { fetchMovieID } from '../data/FetchMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.svg';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import PosterUnavailable from '../assets/PosterUnavailable.svg';
import styles from './MovieDetails.module.css';
import { Link } from 'react-router-dom';
import Rating from './StarsRating';

const MovieDetails = () => {
  interface MovieDetails {
    title: string;
    poster_path: string | null;
    overview: string;
    release_date: string;
    genres: Genre[];
    vote_average: number;
    vote_count: number;
  }

  interface Genre {
    id: number;
    name: string;
  }

  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
        const response = await fetchMovieID(Number(id));
        setMovieDetails(response);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    fetchDetails();
  }, [id]);

  const renderGenres = (genres: Genre[] | undefined) => {
    return genres ? genres.map((genre) => genre.name).join(', ') : 'N/A';
  };

  const formatDateToWords = (dateString: string) => {
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return formattedDate;
  };

  const justYear = (dateString: string) => {
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric'
    });
    return formattedDate;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.go_home}>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" className={styles.icon_hover} />
          </Link>
          <p className={styles.go_home_text}>Back to the movie list</p>
        </div>
        <img src={Logo} className={styles.logo}></img>
      </header>
      <section className={styles.movie_details}>
        <img
          src={
            movieDetails?.poster_path
              ? `${URL_IMAGE + movieDetails?.poster_path}`
              : PosterUnavailable
          }
          className={styles.poster}></img>
        <div className={styles.more_details}>
          <div className={styles.details_header}>
            <h2 id={styles.movie_title}>
              {movieDetails?.title} <br /> ({movieDetails && justYear(movieDetails.release_date)})
            </h2>
            <div className={styles.rating}>
              <Rating averageRating={movieDetails?.vote_average}></Rating>
              <p>
                <b>Vote average:</b> {movieDetails?.vote_average.toFixed(1)}
              </p>
              <p>
                <b>Total votes:</b> {movieDetails?.vote_count}
              </p>
            </div>
          </div>
          <p>
            <b style={{ fontSize: '17px' }}>Release day</b>:{' '}
            {movieDetails && formatDateToWords(movieDetails.release_date)}
          </p>
          <p>
            <b style={{ fontSize: '17px' }}>Genres</b>:{' '}
            {movieDetails?.genres && renderGenres(movieDetails?.genres)}
          </p>
          <p>
            <b style={{ fontSize: '17px' }}>Overview</b>: <br />
            <br /> {movieDetails?.overview}
          </p>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
