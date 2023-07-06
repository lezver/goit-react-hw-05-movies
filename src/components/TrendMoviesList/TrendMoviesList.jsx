import './TrendMoviesList.scss';
import { Link } from 'react-router-dom';

export const TrendMoviesList = ({ trendMovies }) => (
  <ul className="trend-list">
    {trendMovies.map(movie => (
      <li key={movie.id}>
        <Link to={`movies/${movie.id}`}>{movie.title ?? movie.name}</Link>
      </li>
    ))}
  </ul>
);
