import styles from './Sidebar.module.css';
import Logo from '../assets/Logo.svg';
import { useState, useEffect } from 'react';
import Movies from './Movies';
import { allGenres, AllGenresResponse, Genre } from '../FetchMovies';

const Sidebar = () => {
  const [sortBy, setSortBy] = useState<string>();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [genresAPI, setGenresAPI] = useState<AllGenresResponse | null>(null);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const genresData = await allGenres();
      setGenresAPI(genresData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption: string = event.target.value;
    setSortBy(selectedOption);
  };

  const handleGenreClick = (selectedGenre: string) => {
    if (selectedGenres.includes(selectedGenre)) {
      // Erase genre if it is present
      setSelectedGenres(selectedGenres.filter((genre) => genre !== selectedGenre));
    } else {
      // Add genre if it is not present
      setSelectedGenres([...selectedGenres, selectedGenre]);
    }
  };

  return (
    <>
      <section className={styles.filters}>
        <img src={Logo} alt="80s Fever" className={styles.logo}></img>
        <div className={styles.order_container}>
          <p id={styles.containers_text_sort}>Sort by</p>
          <select
            className={styles.order_select}
            defaultValue="popularity.desc"
            onChange={handleSortByChange}>
            <optgroup label="Film Popularity">
              <option value="popularity.desc">Most Popular</option>
              <option value="popularity.asc">Less Popular</option>
            </optgroup>
            <optgroup label="Release Date">
              <option value="primary_release_date.desc">Newest First</option>
              <option value="primary_release_date.asc">Earliest First</option>
            </optgroup>
            <optgroup label="Average Rating">
              <option value="vote_average.desc">Highest First</option>
              <option value="vote_average.asc">Lowest First</option>
            </optgroup>
          </select>
        </div>
        <div className={styles.genre_container}>
          <p id={styles.containers_text_genre}>Genres</p>
          {genresAPI?.genres.map((genre: Genre) => (
            <button
              key={genre.id}
              className={styles.genre_button}
              style={{
                backgroundColor: selectedGenres.includes(genre.id.toString())
                  ? '#fee500'
                  : 'rgba(255, 0, 184, 0.75)',
                boxShadow: selectedGenres.includes(genre.id.toString())
                  ? ''
                  : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onClick={() => handleGenreClick(genre.id.toString())}>
              {genre.name}
            </button>
          ))}
        </div>
      </section>
      <Movies sortByOption={sortBy || 'popularity.desc'} genres={selectedGenres} />
    </>
  );
};

export default Sidebar;
