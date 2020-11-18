import { ActionType } from 'redux-promise-middleware';

export const GET_CATEGORY = 'GET_CATEGORY';

export const GET_CATEGORY_PENDING = `${GET_CATEGORY}_${ActionType.Pending}`;
export const GET_CATEGORY_FULFILLED = `${GET_CATEGORY}_${ActionType.Fulfilled}`;
export const GET_CATEGORY_REJECTED = `${GET_CATEGORY}_${ActionType.Rejected}`;
