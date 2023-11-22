import './Sidebar.css';
import Logo from '../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <section className="filters">
      <img src={Logo} alt="80s Fever" className="logo"></img>
      <div className="order-container">
        <p id="order-text">Sort by:</p>
        <select className="order-button">
          <option selected disabled>
            Film Name
          </option>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: '#000000' }} /> &nbsp
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
        <select className="order-button">
          <option selected disabled>
            Release Date
          </option>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: '#000000' }} />
          <option value="newest">Newest First</option>
          <option value="earliest">Earliest First</option>
        </select>
        <select className="order-button">
          <option selected disabled>
            Average Rating
          </option>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: '#000000' }} />
          <option value="highest-rating">Highest First</option>
          <option value="lowest-rating">Lowest First</option>
        </select>
        <select className="order-button">
          <option selected disabled>
            Film Popularity
          </option>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: '#000000' }} />
          <option value="most-popular">Most Popular</option>
          <option value="less-popular">Less Popular</option>
        </select>
      </div>
      <div className="genre-container">
        <p id="order-text">Filter by genre:</p>
        <button className='genre-button'>Action</button>
        <button className='genre-button'>Adventure</button>
        <button className='genre-button'>Animation</button>
        <button className='genre-button'>Comedy</button>
        <button className='genre-button'>Crime</button>
        <button className='genre-button'>Drama</button>
        <button className='genre-button'>Fantasy</button>
        <button className='genre-button'>Horror</button>
        <button className='genre-button'>Mystery</button>
        <button className='genre-button'>Romance</button>
        <button className='genre-button'>Sci-Fi</button>
        <button className='genre-button'>Thriller</button>
      </div>
    </section>
  );
};

export default Sidebar;
