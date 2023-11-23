import styles from './Sidebar.module.css';
import Logo from '../assets/Logo.svg';
import { useState } from 'react';
import Movies from './Movies';

const Sidebar = () => {
  const [sortBy, setSortBy] = useState<string>();

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption: string = event.target.value;
    setSortBy(selectedOption);
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
          <button className={styles.genre_button}>Action</button>
          <button className={styles.genre_button}>Adventure</button>
          <button className={styles.genre_button}>Animation</button>
          <button className={styles.genre_button}>Comedy</button>
          <button className={styles.genre_button}>Crime</button>
          <button className={styles.genre_button}>Drama</button>
          <button className={styles.genre_button}>Fantasy</button>
          <button className={styles.genre_button}>Horror</button>
          <button className={styles.genre_button}>Mystery</button>
          <button className={styles.genre_button}>Romance</button>
          <button className={styles.genre_button}>Sci-Fi</button>
          <button className={styles.genre_button}>Thriller</button>
        </div>
      </section>
      <Movies sortByOption={sortBy || 'popularity.desc'} />
    </>
  );
};

export default Sidebar;
