import Logo from '../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpAZ, faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <section className="filters">
      <img src={Logo} alt="80s Fever" className="logo"></img>
      <div className="order-container">
        <p id="order-text">Order by:</p>
        <button className="order-button">
          <FontAwesomeIcon icon={faArrowUpAZ} style={{ color: '#000000' }} />
          Alphabetical Asc. (A -&gt; Z)
        </button>
        <button className="order-button">
          <FontAwesomeIcon icon={faArrowDownAZ} style={{ color: '#000000' }} />
          Alphabetical Dsc. (Z -&gt; A)
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
