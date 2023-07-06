import { Layout } from 'components';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFaund = lazy(() => import('pages/NotFaund/NotFaund'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFaund />} />
      </Route>
    </Routes>
  );
};
