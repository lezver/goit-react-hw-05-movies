import './MoviesList.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ moviesList, from }) => (
  <ul className="movies-list">
    {moviesList.map(({ id, title, name, backdrop_path, release_date }) => (
      <li key={id}>
        <div>
          <Link to={`${id}`} state={{ from }}>
            {title ?? name}
          </Link>
          <span> Date: {release_date ?? 'coming soon'}</span>
        </div>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w400${backdrop_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'
          }
          alt={title}
        />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  from: PropTypes.object.isRequired,
};
