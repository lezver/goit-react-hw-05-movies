import { useEffect, useState } from 'react';
import './Movies.scss';
import { SearchMovie, MoviesList } from 'components';
import { getSearchMovies } from 'services/Api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from 'components';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovies = searchParams.get('query') ?? '';

  useEffect(() => {
    const moviesList = async () => {
      if (searchParams.get('query')) {
        const response = await getSearchMovies(searchParams.get('query'));
        return setMoviesList([...response.data.results]);
      }
    };

    moviesList(); // eslint-disable-next-line
  }, []);

  const fetchSearchMovie = async () => {
    setIsLoading(true);
    const response = await getSearchMovies(searchParams.get('query'));
    setMoviesList([...response.data.results]);
    setIsLoading(false);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <section>
      <SearchMovie
        search={fetchSearchMovie}
        onChange={updateQueryString}
        value={searchMovies}
      />
      {isLoading ? (
        <div className="backdrop-for-loader">
          <Loader />
        </div>
      ) : (
        <MoviesList moviesList={moviesList} from={location} />
      )}
    </section>
  );
};

export default Movies;
