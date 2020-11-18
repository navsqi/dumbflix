import { ActionType } from 'redux-promise-middleware';

export const GET_FILM = 'GET_FILM';
export const GET_FILM_EPS = 'GET_FILM_EPS';
export const CREATE_FILM = 'CREATE_FILM';
export const UPDATE_FILM = 'UPDATE_FILM';
export const DELETE_FILM = 'DELETE_FILM';

export const GET_FILM_PENDING = `${GET_FILM}_${ActionType.Pending}`;
export const GET_FILM_FULFILLED = `${GET_FILM}_${ActionType.Fulfilled}`;
export const GET_FILM_REJECTED = `${GET_FILM}_${ActionType.Rejected}`;

export const GET_FILM_EPS_PENDING = `${GET_FILM_EPS}_${ActionType.Pending}`;
export const GET_FILM_EPS_FULFILLED = `${GET_FILM_EPS}_${ActionType.Fulfilled}`;
export const GET_FILM_EPS_REJECTED = `${GET_FILM_EPS}_${ActionType.Rejected}`;

export const CREATE_FILM_PENDING = `${CREATE_FILM}_${ActionType.Pending}`;
export const CREATE_FILM_FULFILLED = `${CREATE_FILM}_${ActionType.Fulfilled}`;
export const CREATE_FILM_REJECTED = `${CREATE_FILM}_${ActionType.Rejected}`;
