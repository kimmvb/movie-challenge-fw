import styles from './Sidebar.module.css';
import Logo from '../assets/Logo.svg';
import { useState } from 'react';
import Movies from './Movies';

const Sidebar = () => {
  const [sortBy, setSortBy] = useState<string>();
  const [selectedGenres, setSelectedGenres] = useState<string | undefined>(undefined);

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption: string = event.target.value;
    setSortBy(selectedOption);
  };

  const handleGenreClick = (selectedGenre: string) => {
    setSelectedGenres(selectedGenre);
  };

  return (
    <>
      <section className={styles.filters}>
        <img src={Logo} alt="80s Fever" className={styles.logo}></img>
        <div className={styles.order_container}>
          <p id={styles.containers_text}>Sort by:</p>
          <select
            className={styles.order_select}
            defaultValue="default_name"
            onChange={handleSortByChange}>
            <option value="default_name" disabled>
              Film Name
            </option>
            <option value="original_title.desc">A - Z</option>
            <option value="original_title.asc">Z - A</option>
          </select>
          <select
            className={styles.order_select}
            defaultValue="default_date"
            onChange={handleSortByChange}>
            <option value="default_date" disabled>
              Release Date
            </option>
            <option value="primary_release_date.desc">Newest First</option>
            <option value="primary_release_date.asc">Earliest First</option>
          </select>
          <select
            className={styles.order_select}
            defaultValue="default_rating"
            onChange={handleSortByChange}>
            <option value="default_rating" disabled>
              Average Rating
            </option>
            <option value="vote_average.desc">Highest First</option>
            <option value="vote_average.asc">Lowest First</option>
          </select>
          <select
            className={styles.order_select}
            defaultValue="default_popularity"
            onChange={handleSortByChange}>
            <option value="default_popularity" disabled>
              Film Popularity
            </option>
            <option value="popularity.desc">Most Popular</option>
            <option value="popularity.asc">Less Popular</option>
          </select>
        </div>
        <div className={styles.genre_container}>
          <p id={styles.containers_text}>Filter by genre:</p>
          <button className={styles.genre_button} onClick={() => handleGenreClick('28')}>
            Action
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('12')}>
            Adventure
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('16')}>
            Animation
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('35')}>
            Comedy
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('80')}>
            Crime
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('99')}>
            Documentary
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('18')}>
            Drama
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('10751')}>
            Family
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('14')}>
            Fantasy
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('36')}>
            History
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('27')}>
            Horror
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('10402')}>
            Music
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('9648')}>
            Mystery
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('10749')}>
            Romance
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('878')}>
            Sci-Fi
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('10770')}>
            TV Movie
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('53')}>
            Thriller
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('10752')}>
            War
          </button>
          <button className={styles.genre_button} onClick={() => handleGenreClick('37')}>
            Western
          </button>
        </div>
      </section>
      <Movies sortByOption={sortBy || 'popularity.desc'} genres={selectedGenres || undefined} />
    </>
  );
};

export default Sidebar;
