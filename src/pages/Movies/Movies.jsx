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

    moviesList();
  }, []);

  const fetchSearchMovie = async () => {
    await setIsLoading(true);
    const response = await getSearchMovies(searchParams.get('query'));
    await setMoviesList([...response.data.results]);
    await setIsLoading(false);
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
        <MoviesList moviesList={moviesList} form={location} />
      )}
    </section>
  );
};

export default Movies;
