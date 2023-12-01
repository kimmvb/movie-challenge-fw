//Just App()
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import { MovieProvider } from './components/MovieContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MovieProvider>
      <App />
    </MovieProvider>
);
