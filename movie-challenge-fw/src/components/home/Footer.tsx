import ReactPaginate from 'react-paginate';
import './Footer.css';

interface FooterProps {
  totalPages: number;
  ChangePage: (selectedItem: { selected: number }) => void;
}

const Footer: React.FC<FooterProps> = ({ totalPages, ChangePage }) => {
  return (
    <footer className="pagination">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={totalPages}
        onPageChange={ChangePage}
        containerClassName={'paginationBttns'}
        activeClassName={'paginationActive'}
        disableInitialCallback={true}
        initialPage={1}
      />
    </footer>
  );
};

export default Footer;
