//Just App() and MovieProvider() (context)
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { MovieProvider } from './components/MovieContext';

//Here all the DOM is render
ReactDOM.createRoot(document.getElementById('root')!).render(
    <MovieProvider>
      <App />
    </MovieProvider>
);
