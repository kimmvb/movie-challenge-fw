import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './MovieDetails.module.css';

interface StarProps {
  filled: boolean;
}

interface RatingProps {
  averageRating?: number;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  //If 'filled' is true, the star will be pink, if it is false, the star will be gray
  return <FontAwesomeIcon icon={faStar} color={filled ? '#FF00B8BF' : 'gray'} />;
};


const Rating: React.FC<RatingProps> = ({ averageRating }) => {
  // The rating is rounded. If averageRating is undefined or null, 0 is set as default.
  const roundedRating = Math.round(averageRating || 0);

  //Array.from(): static method that creates a new Array instance from an iterable or array-like object.
  //An array of filled stars components is created according to the length 
  //of the rounded averageRating
  const stars = Array.from({ length: roundedRating }, (_, index) => (
    <Star key={index} filled={true} />
  ));

  //An array of empty stars components is created according to 10 (number of stars) minus the length 
  //of the rounded averageRating
  const emptyStars = Array.from({ length: 10 - roundedRating }, (_, index) => (
    <Star key={index + roundedRating} filled={false} />
  ));

  //The function returns a components with both, filled and empty stars
  return (
    <div className={styles.stars}>
      {stars}
      {emptyStars}
    </div>
  );
};

export default Rating;
