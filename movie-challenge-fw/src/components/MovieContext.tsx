import { createContext, useContext, useState, ReactNode } from 'react';
import { AllGenresResponse } from './FetchMovies';

interface MovieContextProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  genresAPI: AllGenresResponse | null;
  setGenresAPI: React.Dispatch<React.SetStateAction<AllGenresResponse | null>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

//Initial state of the MovieContextProps
const initialMovieContext: MovieContextProps = {
  sortBy: '',
  setSortBy: () => {},
  selectedGenres: [],
  setSelectedGenres: () => {},
  genresAPI: null,
  setGenresAPI: () => {},
  page: 1,
  setPage: () => {}
};

//Create a context
const MovieContext = createContext<MovieContextProps>(initialMovieContext);

interface MovieProviderProps {
  children: ReactNode;
}

// Create a provider for the context
export const MovieProvider: React.FC<MovieProviderProps> =  ({ children }) => {
  // Initial State
  const [sortBy, setSortBy] = useState<string>('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [genresAPI, setGenresAPI] = useState<AllGenresResponse | null>(null);
  const [page, setPage] = useState(1);

  
  // Group all states and functions in a object
  const movieContextValue = {
    sortBy,
    setSortBy,
    selectedGenres,
    setSelectedGenres,
    genresAPI,
    setGenresAPI,
    page,
    setPage
  };

  // Provide the context's value to the children components
  return <MovieContext.Provider value={movieContextValue}>{children}</MovieContext.Provider>;
};

// Function that is made for using the context in the children components
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext should be used inside MovieProvider');
  }
  return context;
};
