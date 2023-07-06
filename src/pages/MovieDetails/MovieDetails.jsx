import './MovieDetails.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ImPointLeft } from 'react-icons/im';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/Api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { state } = useLocation();
  const backLinkHref = state?.form ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieDetails(id);

      return setMovie(response.data);
    };

    fetchMovieDetails();
  }, []);

  return (
    <section className="movie-details">
      <Link className="movie-details__back" to={backLinkHref}>
        <ImPointLeft size={24} />
        Go Back
      </Link>
      <div>MovieDetails</div>
    </section>
  );
};

export default MovieDetails;
