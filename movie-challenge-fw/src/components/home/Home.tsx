import './Home.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Movies from './Movies';


function Home() {
  return (
    <div className='home'>
    <Sidebar/>
    <Movies/>
    <Footer/>
    </div>
  );
}

export default Home;
