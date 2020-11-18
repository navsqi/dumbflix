import {
  GET_FILM_PENDING,
  GET_FILM_FULFILLED,
  GET_FILM_REJECTED,
  CREATE_FILM_PENDING,
  CREATE_FILM_REJECTED,
  CREATE_FILM_FULFILLED,
  GET_FILM_EPS_PENDING,
  GET_FILM_EPS_FULFILLED,
  GET_FILM_EPS_REJECTED,
} from '../constant/film.constant';

const initialState = {
  films: [],
  loading: false,
  error: null,
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        films: action.payload,
        error: null,
      };
    case GET_FILM_REJECTED:
      return {
        ...state,
        isLogin: false,
        loading: false,
        error: action.payload,
      };
    case CREATE_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        films: action.payload,
        error: null,
      };
    case CREATE_FILM_REJECTED:
      return {
        ...state,
        isLogin: false,
        loading: false,
        error: action.payload,
      };
    case GET_FILM_EPS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_FILM_EPS_FULFILLED:
      return {
        ...state,
        loading: false,
        films: action.payload,
        error: null,
      };
    case GET_FILM_EPS_REJECTED:
      return {
        ...state,
        isLogin: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
