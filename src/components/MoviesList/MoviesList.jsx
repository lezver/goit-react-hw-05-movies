import './MoviesList.scss';
import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesList, form }) => {
  return (
    <ul className="movies-list">
      {moviesList.map(({ id, title, name, backdrop_path, release_date }) => (
        <li key={id}>
          <div>
            <Link to={`${id}`} state={{ form }}>
              {title ?? name}
            </Link>
            <span> Date: {release_date ?? 'coming soon'}</span>
          </div>
          <img
            src={
              `https://image.tmdb.org/t/p/w400${backdrop_path}` ??
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'
            }
            alt={title}
          />
        </li>
      ))}
    </ul>
  );
};
