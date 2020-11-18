import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/auth.reducer';
import { filmReducer } from '../reducers/film.reducer';
import { categoryReducer } from '../reducers/category.reducer';
import { episodeReducer } from '../reducers/episode.reducer';
import { transactionReducer } from '../reducers/transaction.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promise from 'redux-promise-middleware';
// import logger from 'redux-logger';

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['authReducer'],
};

const reducers = combineReducers({
  authReducer,
  filmReducer,
  episodeReducer,
  categoryReducer,
  transactionReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistReducer(persistConfig, reducers),
  storeEnhancers(applyMiddleware(promise))
);

export const persistor = persistStore(store);
