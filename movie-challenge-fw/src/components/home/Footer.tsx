import ReactPaginate from 'react-paginate';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {
  totalPages: number;
  ChangePage: (selectedItem: { selected: number }) => void;
}

const Footer: React.FC<FooterProps> = ({ totalPages, ChangePage }) => {
  const footerWidth = {
    width: totalPages > 0 ? '70.3vw' : '71.3vw', 
  };

  console.log(totalPages);

  return (
    <footer className={styles.pagination}  style={footerWidth} >
      <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} style={{ color: '#000000' }} />}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} style={{ color: '#000000' }} />}
        pageCount={totalPages}
        onPageChange={ChangePage}
        breakLabel={'...'}
        containerClassName={styles.paginationBttns}
        activeClassName={styles.paginationActive}
        disableInitialCallback={true}
        initialPage={1}
      />
    </footer>
  );
};

export default Footer;
