import initState from './initState';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import rootReducer from './slices/rootReducer';

const middlewares = [ logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({thunk: true}), ...middlewares],
  devTools: true,
  preloadedState: initState(),
})

store.subscribe(() => {
  window.localStorage.setItem('Kvint', JSON.stringify(store.getState()))
})

export default store;
