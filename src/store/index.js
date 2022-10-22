import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

// import getLastRoutesReduser from '../reducers/getLastRoutes';
import routesSearch from './slices/routesSearch';
import subscribe from './slices/subscribe';
import lastRoutes from './slices/lastRoutes';
import loading from './slices/loading';

const middleware = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};

const reducer = combineReducers({
  subscribe,
  routesSearch,
  lastRoutes,
  loading
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
