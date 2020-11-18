import { GET_FILM, CREATE_FILM, GET_FILM_EPS } from '../constant/film.constant';
import { API, setAuthToken } from '../../utils/baseAxios';
import { sendError } from '../../utils/errorAsync';
import Cookies from 'js-cookie';

export const getFilms = (queryString = '') => {
  return {
    type: GET_FILM,
    payload: async () => {
      try {
        const response = await API.get(`/films${queryString}`);

        if (response.data.status === 'success') {
          return response.data.data.films;
        }
      } catch (err) {
        sendError(err);
      }
    },
  };
};

export const getFilmAndEpisodes = (idFilm) => {
  return {
    type: GET_FILM_EPS,
    payload: async () => {
      try {
        const response = await API.get(`/films/${idFilm}/episodes`);

        if (response.data.status === 'success') {
          return response.data.data.film;
        }
      } catch (err) {
        sendError(err);
      }
    },
  };
};

export const createFilm = (body) => {
  return {
    type: CREATE_FILM,
    payload: async () => {
      try {
        setAuthToken(Cookies.get('jwt'));
        const response = await API.post('/films/', body);

        if (response.data.status === 'success') {
          return response.data.data.film;
        }
      } catch (err) {
        sendError(err);
      }
    },
  };
};
