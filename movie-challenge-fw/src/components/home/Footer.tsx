import ReactPaginate from 'react-paginate';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {
  totalPages: number;
  ChangePage: (selectedItem: { selected: number }) => void;
}

//<FontAwesomeIcon icon={faAngleRight} style={{color: "#000000",}} />
const Footer: React.FC<FooterProps> = ({ totalPages, ChangePage }) => {
  return (
    <footer className="pagination">
      <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} style={{ color: '#000000' }} />}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} style={{ color: '#000000' }} />}
        pageCount={totalPages}
        onPageChange={ChangePage}
        breakLabel={'...'}
        containerClassName={'paginationBttns'}
        activeClassName={'paginationActive'}
        disableInitialCallback={true}
        initialPage={1}
      />
    </footer>
  );
};

export default Footer;
