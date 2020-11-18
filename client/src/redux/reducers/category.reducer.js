import {
  GET_CATEGORY_PENDING,
  GET_CATEGORY_FULFILLED,
  GET_CATEGORY_REJECTED,
} from '../constant/category.constant';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_FULFILLED:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      };
    case GET_CATEGORY_REJECTED:
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
