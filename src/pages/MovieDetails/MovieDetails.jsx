import './MovieDetails.scss';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { ImPointLeft } from 'react-icons/im';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMovieDetails } from 'services/Api';
import { AboutMovie, Loader } from 'components';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { state } = useLocation();
  const { current } = useRef(state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieDetails(id);

      return setMovie(response.data);
    };

    fetchMovieDetails();
  }, []);

  return (
    <section className="movie-details">
      <Link className="movie-details__back" to={current}>
        <ImPointLeft size={24} />
        Go Back
      </Link>

      <AboutMovie data={movie} />

      <h2>Additional information</h2>

      <ul className="add-info">
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
