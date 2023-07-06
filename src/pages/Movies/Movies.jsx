import { useEffect, useState } from 'react';
import './Movies.scss';
import { SearchMovie, MoviesList } from 'components';
import { getSearchMovies } from 'services/Api';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
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
    const response = await getSearchMovies(searchParams.get('query'));
    return setMoviesList([...response.data.results]);
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
      <MoviesList moviesList={moviesList} form={location} />
    </section>
  );
};

export default Movies;
