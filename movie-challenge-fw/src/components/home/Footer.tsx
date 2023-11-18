interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Footer: React.FC<Props> = ({ page, setPage }) => {
  const Previous = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  const Next = () => {
    if (page < 1000) {
      setPage(page + 1);
    }
  };

  return (
    <footer className="pagination">
      <button onClick={Previous}>Previous</button>
      <button onClick={Next}>Next</button>
    </footer>
  );
};

export default Footer;
