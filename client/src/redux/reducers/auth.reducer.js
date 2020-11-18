import {
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT,
  REGISTER_PENDING,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
} from '../constant/auth.constant';

const initialState = {
  isLogin: false,
  user: {},
  authLoading: false,
  authError: null,
  registerLoading: false,
  registerError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        authLoading: true,
        authError: null,
      };
    case LOGIN_FULFILLED:
      return {
        ...state,
        isLogin: true,
        authLoading: false,
        user: {
          id: action.payload.id,
          fullName: action.payload.fullName,
          email: action.payload.email,
          gender: action.payload.gender,
          phone: action.payload.phone,
          address: action.payload.address,
          subscribe: action.payload.subscribe,
          role: action.payload.role,
        },
        authError: null,
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        isLogin: false,
        authLoading: false,
        authError: action.payload,
      };
    case REGISTER_PENDING:
      return {
        ...state,
        registerLoading: true,
      };
    case REGISTER_FULFILLED:
      return {
        ...state,
        isLogin: true,
        registerLoading: false,
        user: {
          id: action.payload.id,
          fullName: action.payload.fullName,
          email: action.payload.email,
          gender: action.payload.gender,
          phone: action.payload.phone,
          address: action.payload.address,
          subscribe: action.payload.subscribe,
          role: action.payload.role,
        },
        registerError: null,
      };
    case REGISTER_REJECTED:
      return {
        ...state,
        isLogin: false,
        registerLoading: false,
        registerError: action.payload,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
