//Router
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MovieDetails from './components/movie/MovieDetails';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetails/>} />
      </Routes>
    </div>
  );
};

export default App;
