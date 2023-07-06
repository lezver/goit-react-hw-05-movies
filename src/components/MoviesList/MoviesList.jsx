import './MoviesList.scss';
import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesList, form }) => {
  return (
    <ul className="movies-list">
      {moviesList.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={{ form }}>
            {movie.title ?? movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
