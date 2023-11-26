import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './MovieDetails.module.css';

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  return <FontAwesomeIcon icon={faStar} color={filled ? '#FF00B8BF' : 'gray'} />;
};

interface RatingProps {
  averageRating?: number;
}

const Rating: React.FC<RatingProps> = ({ averageRating }) => {
  const roundedRating = Math.round(averageRating || 0);

  const stars = Array.from({ length: roundedRating }, (_, index) => (
    <Star key={index} filled={true} />
  ));

  // Rellenar con estrellas vacías si es necesario
  const emptyStars = Array.from({ length: 10 - roundedRating }, (_, index) => (
    <Star key={index + roundedRating} filled={false} />
  ));

  return (
    <div className={styles.stars}>
      {stars}
      {emptyStars}
    </div>
  );
};

export default Rating;
