import axios from 'axios';
import { useState } from 'react';

function Movies() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'aed0b9b04b9b2314524e703621a1f16e';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  const [movies, setMovies] = useState([]);

  
}

export default Movies;
