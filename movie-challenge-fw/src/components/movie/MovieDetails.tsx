import { fetchMovieID } from '../FetchMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.svg';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import PosterUnavailable from '../assets/PosterUnavailable.svg';

const MovieDetails = () => {
  interface MovieDetails {
    title: string;
    poster_path: string | null;
    overview: string;
    release_date: string;
    genres: Genre[];
    vote_average: number;
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
      try {
        const response = await fetchMovieID(Number(id));
        setMovieDetails(response);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
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

  return (
    <>
      <header>
        <FontAwesomeIcon icon={faCircleArrowLeft} style={{ color: '#fee500' }} />
        <p>Back to the movie list</p>
        <img src={Logo}></img>
      </header>
      <section>
        <img
          src={
            movieDetails?.poster_path
              ? `${URL_IMAGE + movieDetails?.poster_path}`
              : PosterUnavailable
          }></img>
        <p>Release day: {movieDetails && formatDateToWords(movieDetails.release_date)}</p>
        <p>Genres: {movieDetails?.genres && renderGenres(movieDetails?.genres)}</p>
        <p>Overview: {movieDetails?.overview}</p>
      </section>
    </>
  );
};

export default MovieDetails;
