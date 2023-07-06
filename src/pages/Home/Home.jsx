import { useEffect, useState } from 'react';
import './Home.scss';
import { getTranding } from 'services/Api';
import { TrendMoviesList } from 'components';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      const response = await getTranding();
      return setTrendMovies([...response.data.results]);
    };

    fetchTrendMovies();
  }, []);

  return (
    <section className="home">
      <h1>Trending today:</h1>
      <TrendMoviesList trendMovies={trendMovies} />
    </section>
  );
};

export default Home;
