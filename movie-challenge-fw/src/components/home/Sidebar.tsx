import styles from './Sidebar.module.css';
import Logo from '../assets/Logo.svg';
import { useState } from 'react';
import Movies from './Movies';

const Sidebar = () => {
  const [sortBy, setSortBy] = useState<string>();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption: string = event.target.value;
    setSortBy(selectedOption);
  };

  const handleGenreClick = (selectedGenre: string) => {
    if (selectedGenres.includes(selectedGenre)) {
      // Si ya está presente, quítalo
      setSelectedGenres(selectedGenres.filter((genre) => genre !== selectedGenre));
    } else {
      // Si no está presente, agrégalo
      setSelectedGenres([...selectedGenres, selectedGenre]);
    }
  };

  return (
    <>
      <section className={styles.filters}>
        <img src={Logo} alt="80s Fever" className={styles.logo}></img>
        <div className={styles.order_container}>
          <p id={styles.containers_text}>Sort by:</p>
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
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('28')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('28')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('28')}>
            Action
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('12')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('12')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('12')}>
            Adventure
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('16')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('16')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('16')}>
            Animation
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('35')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('35')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('35')}>
            Comedy
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('80')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('80')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('80')}>
            Crime
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('99')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('99')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('99')}>
            Documentary
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('18')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('18')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('18')}>
            Drama
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('10751')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('10751')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('10751')}>
            Family
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('14')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('14')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('14')}>
            Fantasy
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('36')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('36')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('36')}>
            History
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('27')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('27')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('27')}>
            Horror
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('10402')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('10402')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('10402')}>
            Music
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('9648')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('9648')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('9648')}>
            Mystery
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('10749')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('10749')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('10749')}>
            Romance
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('878')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('878')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('878')}>
            Sci-Fi
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('10770')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('10770')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('10770')}>
            TV Movie
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('53')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('53')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('53')}>
            Thriller
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('10752')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('10752')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('10752')}>
            War
          </button>
          <button
            className={styles.genre_button}
            style={{
              backgroundColor: selectedGenres.includes('37')
                ? '#fee500'
                : 'rgba(255, 0, 184, 0.75)',
              boxShadow: selectedGenres.includes('37')
                ? ''
                : '-4px 4px 4px 0px rgba(152, 0, 110, 0.7)'
            }}
            onClick={() => handleGenreClick('37')}>
            Western
          </button>
        </div>
      </section>
      <Movies sortByOption={sortBy || 'popularity.desc'} genres={selectedGenres} />
    </>
  );
};

export default Sidebar;
