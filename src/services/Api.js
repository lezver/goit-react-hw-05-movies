import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = 'api_key=069f0096f83b6d4377da260a7888cd6d';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTranding = async () => {
  let response = '';

  try {
    response = await axios.get(`${BASE_URL}trending/all/day?${API_KEY}`);
  } catch (error) {
    Notiflix.Notify.failure("Oops... Something's wron... try again later:)");
    console.log(error);
  }

  return response;
};

export const getMovieDetails = async id => {
  let response = '';

  try {
    response = await axios.get(`${BASE_URL}movie/${id}?${API_KEY}`);
  } catch (error) {
    Notiflix.Notify.failure("Oops... Something's wron... try again later:)");
    console.log(error);
  }

  return response;
};

export const getSearchMovies = async movie => {
  let response = '';

  try {
    response = await axios.get(
      `${BASE_URL}search/movie?query=${movie}&${API_KEY}`
    );
  } catch (error) {
    Notiflix.Notify.failure("Oops... Something's wron... try again later:)");
    console.log(error);
  }

  return response;
};
